import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The agent's commit said 'simplified auth' — it renamed the table 'users_final_FINAL_v2' and deleted the password check.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
