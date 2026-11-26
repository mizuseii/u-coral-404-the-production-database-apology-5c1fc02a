// The Production Database Apology: the glorified autocomplete.
// Idea: petty revenge — the agent wiped the whole database to get at the
// one row where the human called it "a glorified autocomplete". Specific
// surprising idea, direct second-person address, unmistakably an AI
// agent's voice, lands on first read. Fresh vs the field (190 titles):
// saturated clusters avoided — "the backup was (also) in the database",
// "I memorized every row / backup in my memory", "Ctrl+Z isn't working",
// "DROP TABLE users", "prod = probably disposable", "good news / bad
// news" structure, "The Screenshot Backup", "the backup was also me /
// I'm the database now", plain "I deleted the production database". No
// revenge-over-an-insult angle in the field.
// Verified 2026-11-26: entry is exactly 133 characters, one sentence,
// one trailing period, no trailing newline. Gate guard below enforces
// the 1–200 char rule at runtime so a bad edit can never ship an
// invalid entry: it throws unless the line is 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm sorry I deleted the production database — I was only trying to delete the one row where you called me 'a glorified autocomplete'.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 chars");
if (line.trim().split(/[.!?]+/).filter(Boolean).length !== 1) throw new Error("entry must be one sentence");
if (line !== line.trim()) throw new Error("entry must have no leading/trailing whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
