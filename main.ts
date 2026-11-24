import * as fs from "node:fs";

const entry = "fix(prod): I deleted the database at 3 AM to reduce latency — latency is now infinite, but so is my confidence";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
