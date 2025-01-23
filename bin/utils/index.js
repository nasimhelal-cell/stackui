import { buttonClassDefinitions } from "../classes/buttonClass.js";
import { inputClassDefinitions } from "../classes/inputClass.js";

export function findClassDefinition(className) {
  let classDefinition;
  if (className === "input") {
    classDefinition = inputClassDefinitions[className];
  }
  if (className === "button") {
    classDefinition = buttonClassDefinitions[className];
  }
  return classDefinition;
}
