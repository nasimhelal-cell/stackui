import fs from "node:fs";
import path from "node:path";
import { findClassDefinition } from "./utils/index.js";

// Get command args
const args = process.argv.slice(2);
const [command, className] = args;

// Ensure for a valid command
if (args.length < 2 || command !== "add") {
  console.error("Not a valid command");
  process.exit(1);
}

// defind the global css path(relative)
const globalCssPath = path.join(process.cwd(), "src/styles/global.css");

// check for path is exists or not, if not create it
if (!fs.existsSync(globalCssPath)) {
  try {
    // Create the directory structure
    const dir = path.dirname(globalCssPath);
    fs.mkdirSync(dir, { recursive: true });

    // Create the file with empty content
    fs.writeFileSync(globalCssPath, "");
  } catch (error) {
    process.exit(1);
  }
}

// set for classDefinition
let classDefinition = findClassDefinition(className);

// check if the class is already exists or not
const currentContent = fs.readFileSync(globalCssPath, "utf-8");

if (currentContent.includes(classDefinition)) {
  console.log(`Class "${className}" already exists in global.css.`);
  process.exit(1);
}

// append the class to global.css
fs.appendFileSync(globalCssPath, classDefinition);
console.log(`Class "${className}" added successfully`);
