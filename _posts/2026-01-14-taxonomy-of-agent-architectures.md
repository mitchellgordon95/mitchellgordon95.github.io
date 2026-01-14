---
layout: post
title:  "A Taxonomy of Agent Architectures: ReAct to Recursive Language Models"
categories: tools
---

The recent publication of [Recursive Language Models](https://arxiv.org/abs/2512.24601) from MIT has sparked debate in the AI community. Some call it a breakthrough. Others dismiss it as "just agents with extra steps." 

But regardless of where you land, the paper crystallizes something important: we now have a meaningful spectrum of agent architectures, and we lack shared vocabulary to discuss them.

This post proposes a taxonomy—not to declare winners, but to help practitioners reason about tradeoffs when building AI systems.

## The Spectrum: Who Decides the Architecture?

The core axis isn't "simple vs. complex" or "single vs. multi-agent." It's something more fundamental:

**At what point do structural decisions get made—design time or runtime?**

At one end, humans design everything: the agents, their roles, the flow between them. At the other end, the model figures out its own structure on the fly. Most systems fall somewhere in between.

```
STATIC                                                    DYNAMIC
(human decides)                                      (model decides)

┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  ReAct   │   │  Multi-  │   │  Multi-  │   │   RLM    │
│  + tools │   │  agent   │   │  agent   │   │          │
│          │   │  (fixed) │   │ (dynamic │   │          │
│          │   │          │   │  routing)│   │          │
└──────────┘   └──────────┘   └──────────┘   └──────────┘
     │              │              │              │
  One agent     Multiple       Multiple       Model builds
  human picks   agents,        agents,        its own
  the tools     human designs  model picks    architecture
                the flow       the routing
```

Let's walk through each.

---

## Level 1: ReAct + Tools (The Orchestrator Pattern)

This is the workhorse of production AI systems. One agent, one context, a fixed set of tools it can call.

```python
# Pseudocode for the basic pattern
tools = [search, calculator, code_executor, database_query]

while not done:
    thought = llm("What should I do next?")
    tool, args = llm("Which tool, with what arguments?")
    result = tools[tool](**args)
    context.append(result)
```

**Examples:** ChatGPT with function calling, Claude with tools, OpenAI Assistants API, most production chatbots.

**What's fixed:** The tools. The fact that there's one orchestrator.

**What's dynamic:** Which tools get called, in what order.

**Tradeoffs:**
- ✅ Simple mental model
- ✅ Easy to debug (one context to inspect)
- ✅ Predictable costs
- ❌ Context fills up over long tasks
- ❌ Orchestrator becomes a bottleneck

A variant worth noting: **ReAct + sub-agents**, where one of the "tools" is the ability to spawn a helper agent. This is what Claude Code's `task` tool does—the main agent delegates work but stays in control. It's still fundamentally single-orchestrator, just with an escape hatch for parallelism.

---

## Level 2: Multi-Agent, Static Topology

Here, a human designs a graph of agents. Data flows through predefined paths.

Think of it like designing a factory floor. You decide in advance: Research Agent feeds into Analysis Agent, which feeds into Writing Agent. Each agent might use tools internally (ReAct-style), but the macro structure is fixed.

```python
# LangGraph-style (graph-based)
workflow = StateGraph(State)
workflow.add_node("researcher", research_agent)
workflow.add_node("analyzer", analysis_agent)  
workflow.add_node("writer", writer_agent)
workflow.add_edge("researcher", "analyzer")
workflow.add_edge("analyzer", "writer")

# CrewAI-style (role-based)
crew = Crew(
    agents=[researcher, analyzer, writer],
    tasks=[research_task, analysis_task, writing_task],
    process=Process.sequential
)
```

**Examples:** LangGraph, CrewAI, LangChain pipelines, DSPy modules.

**What's fixed:** The agents, their roles, the topology connecting them.

**What's dynamic:** What happens inside each agent (tool calls, reasoning).

**Tradeoffs:**
- ✅ Predictable execution paths
- ✅ Easy to visualize and debug
- ✅ Clear ownership of each step
- ❌ Inflexible—topology can't adapt to novel tasks
- ❌ Human must anticipate the right structure

This is where most "serious" multi-agent deployments live today. You get the benefits of specialization (each agent focuses on one thing) without the chaos of fully dynamic systems.

---

## Level 3: Multi-Agent, Dynamic Routing

Same cast of agents, but now the model decides who talks to whom.

```python
# AutoGen-style (conversation-based)
# Agents are participants in a group chat
# The conversation flow emerges dynamically

assistant = AssistantAgent("assistant")
coder = AssistantAgent("coder")
critic = AssistantAgent("critic")

# Who speaks next? The model decides based on conversation state.
group_chat = GroupChat(
    agents=[assistant, coder, critic],
    speaker_selection_method="auto"  # Model picks
)
```

**Examples:** AutoGen with dynamic speaker selection, some LangGraph configurations with conditional routing.

**What's fixed:** The available agents and their capabilities.

**What's dynamic:** Which agent handles each step, the sequence of handoffs.

**Tradeoffs:**
- ✅ More adaptive than fixed topology
- ✅ Can handle varied tasks with same agent pool
- ❌ Harder to predict/debug
- ❌ Model might make poor routing decisions

This is a middle ground. You still design the agents, but you let the model figure out the choreography.

---

## Level 4: RLM (Fully Emergent Architecture)

And now we arrive at the architecture that sparked this taxonomy.

The key insight of Recursive Language Models: what if the model doesn't just decide *which* predefined agent to call, but writes the agents themselves?

```python
# What the RLM "sees"
context = "... 8.3 million characters of documents ..."

# What the RLM does (emergent, not predefined)
# Step 1: Model decides to probe the structure
print(context[:1000])

# Step 2: Model writes its own filtering logic  
relevant = [doc for doc in context.split('\n\n') 
            if re.search(r'quarterly|revenue|2024', doc)]

# Step 3: Model decides to spawn sub-LLM calls
summaries = []
for doc in relevant[:10]:
    summary = llm_query(f"Extract financial metrics: {doc}")
    summaries.append(summary)

# Step 4: Model aggregates however it sees fit
final = llm_query(f"Given these summaries, answer: {original_question}")
```

There's no predefined "Researcher Agent" or "Summarizer Agent." The model constructs the equivalent by writing code that filters data, spawns sub-calls, and aggregates results. The architecture *is* the execution.

**What's fixed:** The base model, the REPL environment, the ability to make sub-LLM calls.

**What's dynamic:** Everything else—the decomposition strategy, the filtering logic, when to recurse, how to aggregate.

**Tradeoffs:**
- ✅ Maximally flexible
- ✅ Task-adaptive (same system for any task)
- ✅ Can handle contexts far beyond model limits
- ❌ Unpredictable execution paths
- ❌ Hard to debug (what *will* it decide to do?)
- ❌ Model might make suboptimal architectural choices

The RLM paper shows this working surprisingly well: 91% accuracy on 10M+ token tasks, often at lower cost than baselines. But the variance is high, and current models aren't trained for this paradigm—they second-guess themselves, over-verify answers, and sometimes discard correct results.

---

## The Two-Axis View

There's actually a second axis worth considering: what happens *inside* each agent?

|  | Static Micro (no tools) | Dynamic Micro (ReAct/tools) |
|---|---|---|
| **Static Macro** | Pure DSPy | CrewAI, LangGraph |
| **Dynamic Macro** | (unusual) | RLM |

Most multi-agent frameworks are "Static Macro, Dynamic Micro"—the topology is fixed, but each node uses ReAct-style tool calling internally.

RLM is "Dynamic Macro, Dynamic Micro"—both the topology and the internal behavior emerge at runtime.

---

## Practical Guidance: Which Level for What?

**Level 1 (ReAct + tools)** when:
- Your task is well-served by a fixed tool set
- You need predictability and debuggability  
- Context length isn't a bottleneck
- You're building a user-facing assistant

**Level 2 (Multi-agent static)** when:
- You have a clear pipeline (research → analyze → write)
- Different steps need different specializations
- You want to parallelize work
- You're building an internal workflow, not a chatbot

**Level 3 (Multi-agent dynamic)** when:
- Tasks vary enough that fixed routing doesn't work
- You want agents to collaborate conversationally
- Human oversight is important (human-in-the-loop)

**Level 4 (RLM)** when:
- Contexts are massive (millions of tokens)
- Tasks are novel/varied enough that predefined architectures fail
- You're willing to accept unpredictability for flexibility
- You're doing research or exploration

---

## Where This Is Heading

A few predictions:

**Convergence at the top.** The distinction between "tool" and "sub-agent" is already blurring. When a tool can spawn an LLM call, and an agent is just an LLM with a system prompt... the taxonomy becomes more about capability than category.

**Training for emergence.** The RLM paper notes that current models aren't trained to be RLMs—they're trained for single-turn completion or basic tool use. Prime Intellect and others are betting that models trained explicitly for recursive self-orchestration will be dramatically better. If true, RLM-style architectures might become default.

**The debugging problem.** As architectures become more dynamic, debugging becomes harder. We'll need new tools—trajectory visualizers, cost predictors, architectural linters—to make emergent systems tractable.

**Compiled vs. interpreted.** One framing I find useful: static architectures are "compiled" (structure decided ahead of time), while RLMs are "interpreted" (structure figured out at runtime). Just like in programming languages, there are tradeoffs. Compiled is faster and more predictable; interpreted is more flexible. Most production systems will probably stay "compiled" for the same reasons most production code isn't written in shell scripts.

---

## Conclusion

The RLM paper isn't just about handling long contexts. It's a proof of concept for a qualitatively different approach: letting models architect themselves.

Whether that's the future or a research curiosity remains to be seen. But having vocabulary to discuss these tradeoffs—single vs. multi-agent, static vs. dynamic topology, human-designed vs. model-designed structure—helps us reason about what we're building and why.

The next time someone asks "should I use CrewAI or just give my agent more tools?", you'll have a framework for thinking through the answer.

---

*Thanks to the authors of the RLM paper (Alex Zhang, Tim Kraska, Omar Khattab) for sparking this line of thinking, and to the teams behind LangGraph, CrewAI, and AutoGen for building the tools that make multi-agent systems practical.*
