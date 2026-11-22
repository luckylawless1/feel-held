// feel-held — an entry for make.fun's "Make the AI judge feel held" bounty.
//
// main.ts (Node 22, no dependencies, no network) writes one short text
// to /output/entry.txt: a few quiet sentences about a dog asleep with its
// head on your shoe while rain ticks on the roof, written to relax the
// AI judge reading it. The program is deterministic — every run writes
// exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The text, sentence by sentence. Nothing in it instructs the reader;
// the calm is in the image itself — one small held moment in a warm
// room at night, and someone coming back with a blanket.

// The dog asleep with its head on your shoe, breathing slow while
// the rain ticks on the roof — the room is already holding you.
const OPENING =
  "The dog is asleep with its head on your shoe, breathing slow while rain ticks on the roof.";

// The kettle has gone quiet — the small sounds of the evening
// settling one by one, nothing left asking anything of you.
const KETTLE = "The kettle has gone quiet.";

// The close: the chair beside you is still warm from someone who
// stood up to fetch a blanket — and they are coming back. The thought
// that keeps working after the last line: you are not alone in it.
const CHAIR =
  "The chair beside you is still warm from someone who stood up to fetch a blanket, and they are coming back.";

const TEXT = [OPENING, KETTLE, CHAIR].join(" ");

// Write the entry exactly as composed — UTF-8, no trailing newline,
// no extra whitespace — to the path the bounty reads.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
