// required modules
const inquirer = require("inquirer");
const fs = require("fs");
// imported classes
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

inquirer
  // questions to generate input for shape/logo selection
  .prompt([
    {
      type: "input",
      name: "letters",
      message: "Input up to three letters for your logo",
    },
    {
      type: "input",
      name: "textcolor",
      message:
        "What color would you like your text? (enter color name or a hexidecimal number)",
    },
    {
      type: "checkbox",
      name: "shape",
      message: "Which shape would you like?",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapecolor",
      message:
        "What color would you like your shape? (enter color name or a hexidecimal number)",
    },
  ])
  .then((data) => {
    if ((data.shape = "Circle")) {
      const newlogo = new Circle(data.letters, data.textcolor, data.shapecolor);
      console.log(newlogo);
      fs.writeFile("./examples/logo.html", newlogo.render(), (err) => {
        err ? console.log(err) : console.log("New logo was created");
      });
    }
  });
