There are (at least) two ways to generalize better.

Incorporate preconceptions (inductive bias) into your model, forcing it into some particular shape (L2 regular = small weights), or satisfying some constraints (hard or not) (like BIO tagging structure, parse tree structure, sentiment polarity rules, etc.). Humans have domain knowledge, and utilizing that is probably useful.
(Although, once you get enough data, our intuitions might prove to be actually terribly hacky heuristics that ought to be discarded).

The other way is to get more data. This is hard. But! Techniques are continuously being developed to make this easier. For example, clever ways of using monolingual data for machine translation (aligning word embeddings). Or using multi-modal data (captions, grounding, etc.).

The interesting thing is that as we get more data, inductive biases become less useful. What will be more useful in the long run?

It's the same kind of thing. Bringing to bear all our current knowledge on a low-domain problem (like Hausa). But instead of a small set of human expert rules, we use all the data we have at our disposal (multimodal english, multimodal Hausa, ) A linguist doesn't take that long to learn Hausa, because they know a bunch of different languages and have access to the grounding 

Many languages might not improve your performance; might want to use languages from the same language family.

What about a language tree model. Something that shares weights for things that branch from the same language tree.

Basically this
(argument)[http://incompleteideas.net/IncIdeas/BitterLesson.html?fbclid=IwAR09_rFeIffW4_IDJoyBGAMfo0EfOuatYLlPWCACYTAAIkr2erldL2xRCeU]
but for more data, rather than more computation.
