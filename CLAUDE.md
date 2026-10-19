# CLAUDE.md: how posts get made here

The owner directs and judges; they rarely write Markdown or commit by hand. So posts are made like this:

1. **They point at an experiment.** A conversation, a run, a folder, a few sentences. That is the score.
2. **You draft the post** in `src/content/posts/<slug>.md` and open it as a pull request. Never push a post
   straight to `main`: the PR is where they read it before it goes public.
3. **They approve and merge.** Merging to `main` deploys it.

## Before you open the PR

- **Nothing private.** No names, file paths, ids or text from private repositories, no client names, no keys,
  no internal data. Check whether a repo is public before naming anything in it; if you can't tell, write it
  generically ("a CI check in my product"). This blog once published internal file names and story text from a
  private repo, and they had to be taken back out.
- **Unknown is "not recorded".** Fill the `run:` card only with facts you have: date, models, setup, result,
  cost. Leave a field out rather than guess; the page shows "not recorded". The same goes for the prose: no
  invented numbers, costs, or outcomes.
- **Say how big the test was and where it stops being true.** One run is a hint, not a result.
- **Their voice is a draft.** Posts are written in the first person as the owner. Anything about their life or
  history (talks attended, people met) must come from what they actually said. If unsure, leave it out and ask
  in the PR description.
- **Ship the evidence.** Runnable experiments go in `public/experiments/`, raw data in `public/data/`. Link them
  from the post.
- **Run it.** `npm run build`, then open the built post in a browser and check every link loads.

In the PR description, list what you left out or weren't sure about, so they can decide.
