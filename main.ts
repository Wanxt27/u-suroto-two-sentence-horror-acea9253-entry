import { mkdirSync, writeFileSync } from "node:fs";

// Two-sentence horror: a nightly ritual the parents have been humouring
// quietly ends — the boy no longer asks permission, because the man
// under the bed no longer needs it. The dread lands on the re-read:
// sentence one was never the boy talking to them, it was the man
// talking through the boy, and tonight the asking stopped.
const entry =
  "For a month, my son has knocked three times on our bedroom door each night to ask if the man under his bed can come out yet. Tonight he didn't knock; he whispered through the keyhole, 'He says I don't have to ask anymore.'";

const sentences = entry.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 2) {
  throw new Error(`entry must be exactly two sentences, got ${sentences.length}`);
}
if ([...entry].length > 400) {
  throw new Error(`entry exceeds 400 characters: ${[...entry].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
