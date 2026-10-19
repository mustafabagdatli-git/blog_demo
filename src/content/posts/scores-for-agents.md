---
title: "Scores for agents: what Casey Reas can teach us about building with AI"
description: "Reas writes a short text and lets independent elements perform it. I tried his method on a real software spec with four agents. They split on the exact phrase that later broke."
date: 2026-10-19
tags: ["agents", "method", "casey reas"]
experiment: "hello-process.html"
run:
  date: 2026-10-19
  setup: "Four agents read one user story with no code and no tools, and each stated the rule it would build. One agent ran twice as a noise control."
  result: "They split on the phrase that later broke. 3 of 4 avoided the bug that shipped; none caught the second bug. One story, so a hint, not a result."
---

Years ago I saw Casey Reas talk at Medialab-Prado in Madrid. What stayed with me was not an image. It was his way of working: he doesn't draw the picture. He writes a short text, a *score*, and lets software perform it.

Today I build products with AI agents. More and more, his way of working looks like the right way to work with them.

## How Reas works

Reas's Process series (2004–2010) breaks a work into a small grammar:

- **Form**: a visual primitive, such as a circle.
- **Behavior**: a rule of action. Move in a straight line; change direction while touching another element.
- **Element**: a Form plus its Behaviors.

A *Process* is a short text that puts Elements on a surface and says what to draw. The text is the work. Each rendering is one performance of it. When the Whitney commissioned *{Software} Structures* in 2004, Jared Tarbell, Robert Hodgin and William Ngan each wrote their own software for the same text, Software Structure #003. The performances came out different, and the differences showed what the text had left open.

He is doing it again right now. In *Omnia Ex Natura: In Situ* (HEK Basel, online until 25 October 2026), he paints a small watercolor live every Friday. It then becomes "a score for my software agents to move through a synthetic environment." His scores have moved from text to pictures: "The paintings become a way of defining the environment that the software operates within."

He has two words for the two halves of the work. **Autographic** is making with your own hand. **Allographic** is "writing with something other than yourself," which is how he describes software.

## Why this is a management problem

Working with an agent is delegation. You hand work to someone else and hope to get back what you meant. Military doctrine has thought about this for a long time. In *The Art of Action*, Stephen Bungay names three gaps between a plan and its result:

- the **knowledge gap**: what we plan versus what actually happens;
- the **alignment gap**: what we want people to do versus what they do;
- the **effects gap**: what we expect actions to achieve versus what they achieve.

The fix he takes from the military is *mission command*: state the intent, not the path, and ask for a **backbrief**, where the person tells you back how they understood the order.

Reas fills in something that management writing misses. He treats each element as independent, and he *wants* results he did not intend: "secondary behaviors that I am not the author of." Building software needs both. Some parts must be exactly what you meant. Others are better left to the performer.

## The experiment

I wanted to know whether Reas's method finds real gaps in a real spec. So I picked a case where I already knew the answer.

In the product I'm building, we write a short user story before we build anything. One story described a CI check that counts code which "never reads" the signal a model provider sends when it refuses a request. It shipped. An hour later a follow-up story had to correct it: the check counted a file as safe if it merely *mentioned* the signal, even in a comment.

I gave four agents only the story's text: no code, no hindsight, no tools. Like Reas's performers, three had different temperaments: a **literalist**, an **auditor** and a **shipper**. The fourth was the literalist run a second time, as a control for plain randomness. Each had to state the exact rule its check would use, and quote every phrase where it had to make a choice.

<div class="table">

| Performer | What counts as "reading" the signal | The bug that shipped |
|---|---|---|
| Literalist, run 1 | Any mention, comments included | **Reproduced it** |
| Literalist, run 2 (control) | Any mention outside comments | Avoided |
| Shipper | Any mention outside comments | Avoided |
| Auditor | Only code that actually reads it | Avoided |

</div>

Four runs, three different rules, all on the exact phrase that later broke. Three of the four avoided the bug that shipped. The auditor also raised two things nobody had written down: whether the check should fail when the count goes *down*, and whether it should check the total so it can't pass by matching nothing.

The four performances are here: [what each agent decided](../../data/spec-performances.json). I've left out the story text itself, because it comes from a private codebase.

### What it did not show

- **The control split too.** The same performer, run twice, disagreed with itself on the same phrase. So some of what looks like interpretation is noise. That still tells you the phrase is ambiguous, but it means the temperaments don't deserve the credit.
- **No agent caught the second bug.** The follow-up story also found a file the check marked unsafe even though it handled refusals correctly. All four agents accepted the story's assumption that "safe" means "mentions the signal". Comparing performers only finds the gaps they disagree about.
- **This is one story.** It can't tell a method that works from a lucky one.

## Where Reas's thinking needs filling in

| Gap in Reas | What fills it |
|---|---|
| He doesn't want his intent carried out. Emergence is the point. | Mark every phrase **pinned** (must match my intent) or **open** (surprise welcome). |
| Performers never report how they read the score. | Bungay's **backbrief**: each agent states its reading before it builds. |
| Nobody checks a performance against the text. | Check the result where it actually runs, not on the agent's word. |
| Agents interacting create effects nobody wrote. | Expect side effects between agents and look for them on purpose. |
| Comparing performers finds disagreements, not shared blind spots. | You stay the judge, plus one agent whose job is to break the score. |

## The method, as I now use it

1. **Write the score.** A short text. Mark which phrases are pinned and which are open.
2. **Perform.** Three agents with different temperaments each say what they would build and what they had to interpret. Run one of them twice to measure the noise.
3. **Break it.** One agent tries to find a case that is correct but fails the score's own rule.
4. **Revise.** Where the agents split, pin the phrase or mark it open on purpose. Save it as Process 2.
5. **Build and check.** One agent builds from Process 2, and the result is checked where it runs.

My part is the autographic one: writing and revising the score, and choosing which performance goes on. The agents do the allographic part.

## Try it

[Hello, Process](../../experiments/hello-process.html) is the tool I built while thinking about this: one score, three performers, a list of where they diverged, and buttons to pin a reading or mark it open. On this site you can edit the score and tune the performers by hand. The live performers need the page open inside Claude.

<iframe src="../../experiments/hello-process.html" title="Hello, Process" loading="lazy"></iframe>
<p class="caption">Hello, Process. Edit the score on the left; pin or open each phrase where the performers diverge.</p>

## Sources

<div class="sources">

- [HEK: Casey Reas, Omnia Ex Natura: In Situ](https://hek.ch/en/program/exhibitions/casey-reas) and [the interview with him](https://share.hek.ch/en/in-coversation-with-casey-reas/)
- [@REAS newsletter, August 2026](https://caseyreas.substack.com/p/reas-002-14-august-2026)
- [REAS.com: Process](https://reas.com/process)
- [UCLA Social Software: Scores for Social Software](https://sosoft.arts.ucla.edu/featured/cycle-2)
- [Strategy+Business: Closing Implementation Gaps (Bungay)](https://strategy-business.com/article/11312a)
- [Matta, From Prompts to Intentions (2026)](https://doi.org/10.5281/zenodo.23414064), which argues for delegating early and asking for contrasting provisional outputs

</div>
