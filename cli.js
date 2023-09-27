#!/usr/bin/env node

const program = require("commander");
const fs = require("fs-extra"); // Use fs-extra for cross-platform file copying
const path = require("path");

program
  .version("1.0.0")
  .description("Create a new project using my TypeScript template");

program
  .command("create express <project-name>")
  .description("Create a new project")
  .action((_,projectName) => {
    // Define the path to your template project
    const templatePath = path.join(__dirname, "node-typescript-template");
    // Define the path to the new project using the current working directory
    const projectPath = path.join(process.cwd(), projectName);
    // Copy the template project to the new project location
    fs.copySync(templatePath, projectPath);
    // Optionally, you can perform additional setup here, like installing dependencies.
    console.log(`Created a new project at ${projectPath}`);
  });

program.parse(process.argv);
