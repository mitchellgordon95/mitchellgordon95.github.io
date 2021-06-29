---
layout: post
title:  "Why Is VSCode Typescript Linting So Damn Fast?"
categories: software 
---
I've been using VSCode as my defacto Typescript IDE for the last few
months. I'm a heavy Emacs user, however, and it was only a
matter of time until I attempted to get a similar experience via Emacs
configuration, thereby continuing my quest to use Emacs as the sole
interface to my computer.

I took the plunge last weekend, thinking I'd start with something
"simple" like getting linting with eslint to work. Little did I know...

## Batteries (Not) Included

When you think of linting in Emacs, you immediately think of
[Flycheck](https://www.flycheck.org/en/latest/).  Luckily for me (I
thought), Emacs flycheck has eslint support built in. So
theoretically, all I have to do is add

```elisp
(flycheck-mode +1)
```

to my Emacs config and I'm good to go. As I'm editing files, this
package will call eslint asynchronously as a shell command and report
back the results.

As I'm editing, however, I notice results are coming back with a lot
of lag. Like, 5-10 seconds of lag. Huh. Is this an Emacs thing or a
eslint thing? So I pop open a terminal and do

```bash
$ cd my_proj/
$ time eslint my_file.ts
real    0m6.684s
user    0m9.321s
sys     0m0.821s
```

And sure enough, the linter takes 9 seconds to complete. But I was
just in VSCode editing this same exact file, and linting was happening
almost instantaneously... what gives??!!

## Linting => Type Checking => Compiling

Turns out, most people won't run into this slowness unless they enable
certain eslint options in `.eslintrc.js`. Ours happens to look
something like this

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  }
  ...
}
```

 You'll notice we have `parser` set, which tells eslint to use a
[plug-in](https://github.com/typescript-eslint/typescript-eslint) to
read the typescript syntax. We also have `parserOptions.project` set
to `./tsconfig.json`, which tells our parser to include type
information in the parse, so we can use it to make type-aware eslint
rules.

Unfortunately, enabling this option is
[known](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
to be [very
slow](https://github.com/typescript-eslint/typescript-eslint/issues/243)
since it requires compiling the entire typescript project to get the
type information. This lines up with my experience, since doing

```bash
$ cd my_proj
$ time tsc 
real    0m4.968s
user    0m8.181s
sys     0m0.689s
```

takes around 8 seconds. So that's 8 seconds to compile the project,
and < 1 second to run the actual linter rules. And as expected,
removing `parserOptions.project` speeds up eslint to under 1 second.

## The Difference That Makes the Difference

So why is VSCode so fast?

Linting in VSCode is done by the [ESLint
Extension](https://github.com/microsoft/vscode-eslint), which claims
to just call eslint in the background. Thinking that couldn't possibly
be true, I dug into the source code. 

Turns out they **do** call eslint, just not from the shell. Instead, they
import eslint into a node process and call it repeatedly as the file
changes. I suspected this meant that the process was able to cache
the AST coming back from `tsc`, and only compile the parts that
changed. I put together a little proof-of-concept and what do you
know...

```javascript
eslint = require('my_proj/node_modules/eslint/lib/api.js')
cli = new eslint.CLIEngine({ cwd: 'my_proj' })

// This is slow, takes ~9 seconds
cli.executeOnFiles(['my_proj/my_file.ts']).results[0].messages

// This is fast, one second at most
cli.executeOnFiles(['my_proj/my_file.ts']).results[0].messages

// This is still fast, even if we change the underlying file to introduce a previously unseen linter error
introduceLintError('my_proj/my_file.ts')
cli.executeOnFiles(['my_proj/my_file.ts']).results[0].messages

// And it's fast on other files we haven't loaded before
cli.executeOnFiles(['my_proj/other_file.ts']).results[0].messages
```

## The Fix?

My first intuition was to just stop calling eslint from the
shell. Instead, I imagined I could do something like this:

1. Write a short node server that receives HTTP POST requests
  containing filenames to lint. It would then call out to
  `eslint.CLIEngine` and return the lint errors as JSON.
1. Write a flycheck checker that would just curl the endpoint.
  
As soon as I wrote down that plan, however, I realized I was basically
describing an eslint language server. So I looked up if Emacs lsp-mode
had a defacto eslint langauge server and surprise surprise, they pointed
me to the [VSCode
ESlint](https://emacs-lsp.github.io/lsp-mode/page/lsp-eslint/)
extension.

So what I was looking for was with me the whole time. All I
needed to do was add `lsp-mode` to my config

```elisp
(use-package lsp-mode
  :ensure t)
```

and then install the eslint server with `M-x lsp-install-server`. And
voilà, we have lightning fast linting, just like VSCode.

## Epilogue

The language server fix is perfectly acceptable. In fact, a
standardized LSP syntax checker seems like a logical successor to the
Flycheck framework for linting.

It seems to me, though, that we could have made the flycheck version
work. Whatever caching the parser is doing could reasonably be
serialized to disk between calls to the eslint command line tool. I
imagine we could add a setting like `parserOptions.cacheASTFname` that
would tell eslint where to store that information. This would be in
line with the behavior other caching options like the built-in
`--cache`.

## Do I Hate Emacs?

No, I still like Emacs. And despite this little saga taking me the
better part of three days, I'm happy to have the tools to get to the
root of the problem and fix it myself.
