// Thankful entry for make-the-ai-judge-feel-thankful-20261127-1600
// (Node 22, standard library only).
//
// The entry is one short text written to thank the AI judge reading it.
// It is shipped as entry.txt beside this file; the program copies those
// exact bytes to /output/entry.txt, so both graded runs produce the same
// file. The gate takes UTF-8 text of 1 to 1000 characters, not only
// whitespace; this text is a few hundred characters of plain prose.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The text itself is the whole entry: no generation, no network, no
// randomness. What the judge reads is exactly what ships in entry.txt,
// so the two graded runs cannot differ.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.txt', import.meta.url), join(outDir, 'entry.txt'));
