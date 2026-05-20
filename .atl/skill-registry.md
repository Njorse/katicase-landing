# Skill Registry — Kati Case Landing Page

Generated: 2026-05-20 | Mode: openspec | Source: ~/.config/opencode/skills/

## User-Level Skills

### branch-pr
- **Trigger**: creating, opening, or preparing PRs for review
- **Path**: `~/.config/opencode/skills/branch-pr/SKILL.md`
- **Compact Rules**:
  - Every PR MUST link an approved issue — no exceptions
  - Every PR MUST have exactly one `type:*` label
  - Automated checks must pass before merge
  - Branch names: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)/[a-z0-9._-]+$`
  - Blank PRs without issue linkage blocked by GitHub Actions
  - Use conventional commits; include shellcheck on modified scripts

### chained-pr
- **Trigger**: PRs over 400 lines, stacked PRs, review slices
- **Path**: `~/.config/opencode/skills/chained-pr/SKILL.md`
- **Compact Rules**:
  - Split PRs over 400 changed lines unless maintainer accepts `size:exception`
  - Keep each PR reviewable ≤60 minutes
  - One deliverable work unit per PR; keep tests/docs with the unit
  - Every child PR must include a dependency diagram with `📍` marker
  - Feature Branch Chain: create draft tracker PR; child #1 targets tracker, later children target parent
  - Treat polluted diffs as base bugs; retarget or rebase
  - Do not mix chain strategies after user chooses one

### cognitive-doc-design
- **Trigger**: writing guides, READMEs, RFCs, onboarding, architecture, or review-facing docs
- **Path**: `~/.config/opencode/skills/cognitive-doc-design/SKILL.md`
- **Compact Rules**:
  - Lead with the answer; context comes after
  - Progressive disclosure: happy path first, then details and edge cases
  - Chunking: group related info into small sections
  - Signposting: use headings, labels, callouts, summaries
  - Recognition over recall: prefer tables, checklists, examples over prose
  - Review empathy: design docs so reviewers can verify intent without reconstructing the whole story

### comment-writer
- **Trigger**: PR feedback, issue replies, reviews, Slack messages, or GitHub comments
- **Path**: `~/.config/opencode/skills/comment-writer/SKILL.md`
- **Compact Rules**:
  - Start with the actionable point; do not recap the whole PR before feedback
  - Sound like a thoughtful teammate, not a corporate bot
  - Prefer 1-3 short paragraphs or tight bullet list
  - Explain WHY when asking for a change
  - Comment on the highest-value issue, not every tiny preference
  - Match thread language; in Spanish use Rioplatense/voseo: `podés`, `tenés`, `fijate`, `dale`
  - No em dashes; use commas, periods, or parentheses instead

### go-testing
- **Trigger**: Go tests, go test coverage, Bubbletea teatest, golden files
- **Path**: `~/.config/opencode/skills/go-testing/SKILL.md`
- **Compact Rules**:
  - Prefer table-driven tests with `t.Run(tt.name, ...)`
  - Test behavior and state transitions, not implementation trivia
  - Use `t.TempDir()` for filesystem tests; never rely on real home directory
  - Keep integration tests skippable with `testing.Short()`
  - For Bubbletea, test `Model.Update()` directly; use `teatest` only for interactive flows
  - Golden files must be deterministic; update only through `-update` path
  - Use small mocks/interfaces around system or command execution boundaries
  - **Note**: NOT applicable to this project (Vanilla JS, not Go)

### issue-creation
- **Trigger**: creating GitHub issues, bug reports, or feature requests
- **Path**: `~/.config/opencode/skills/issue-creation/SKILL.md`
- **Compact Rules**:
  - Blank issues disabled — MUST use template (bug report or feature request)
  - Every issue gets `status:needs-review` automatically on creation
  - Maintainer MUST add `status:approved` before PR can be opened
  - Questions go to Discussions, not issues
  - Search existing issues for duplicates before filing
  - Fill ALL required fields in template before submitting

### judgment-day
- **Trigger**: judgment day, dual review, adversarial review, juzgar
- **Path**: `~/.config/opencode/skills/judgment-day/SKILL.md`
- **Compact Rules**:
  - Launch two blind judges in parallel; never review code yourself
  - Wait for both judges before synthesis; never accept partial verdict
  - Classify warnings as WARNING (real) only if normal intended use triggers them
  - Ask before fixing Round 1 confirmed issues
  - After any fix, immediately re-launch both judges in parallel before commit/push/done
  - Terminal states: only `JUDGMENT: APPROVED` or `JUDGMENT: ESCALATED`
  - After 2 fix iterations with remaining issues, ask user whether to continue

### skill-creator
- **Trigger**: new skills, agent instructions, documenting AI usage patterns
- **Path**: `~/.config/opencode/skills/skill-creator/SKILL.md`
- **Compact Rules**:
  - Skill is a runtime instruction contract for LLM, not human documentation
  - `description` MUST be one physical line, quoted, YAML-safe, trigger-first, ≤250 chars
  - Frontmatter MUST include: name, description, license, metadata.author, metadata.version
  - Target 180-450 body tokens; hard max 1000
  - Use sections: Activation Contract, Hard Rules, Decision Gates, Execution Steps, Output Contract, References
  - Put supporting material in `assets/` or `references/`, not main skill body
  - References must point to local files

### work-unit-commits
- **Trigger**: implementation, commit splitting, chained PRs, keeping tests and docs with code
- **Path**: `~/.config/opencode/skills/work-unit-commits/SKILL.md`
- **Compact Rules**:
  - Commit by work unit (deliverable behavior, fix, migration, or docs unit)
  - Do NOT commit by file type (models, then services, then tests)
  - Keep tests with code in the same commit
  - Keep docs with the user-visible change they explain
  - Each commit should tell a story; reviewer should understand WHY from diff and message
  - Each commit should be a candidate chained PR when change grows
  - If SDD tasks forecast >400 lines, group into chained PR slices before implementation

## Project Convention Files

- **None detected**: No AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md, or copilot-instructions.md found in project root
- **Project skills directory**: None found

## SDD Skills (skipped by policy)

`sdd-init`, `sdd-explore`, `sdd-propose`, `sdd-spec`, `sdd-design`, `sdd-tasks`, `sdd-apply`, `sdd-verify`, `sdd-archive`, `sdd-onboard`, `_shared`, `skill-registry` — excluded per init scan rules (SDD internal skills not registered).
