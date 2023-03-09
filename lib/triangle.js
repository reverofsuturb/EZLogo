const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(letters, textcolor, shapecolor) {
    super(letters, textcolor, shapecolor);
    this.shape = "polygon";
  }
  render() {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${this.shape} points="150, 18 244, 182 56, 182" fill="${this.shapecolor}"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.letters}</text></svg>`;
  }
}

module.exports = Triangle;

// used template literal and inserted data pulled from inquierer