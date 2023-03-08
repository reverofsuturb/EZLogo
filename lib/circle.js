const Shapes = require("./shapes.js")

class Circle extends Shapes{
  constructor(letters, textcolor, shapecolor) {
    super(letters, textcolor, shapecolor)
    this.shape = "circle"
  }
render() { return  `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${this.shape} cx="150" cy="100" r="90" fill="${this.shapecolor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.letters}</text> `

}
}

module.exports = Circle;