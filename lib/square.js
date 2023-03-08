const Shapes = require("./shapes.js")

class Square extends Shapes{
  constructor(letters, textcolor, shapecolor) {
    super(letters, textcolor, shapecolor)
    this.shape = "rect"
  }
render() { return  `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${this.shape} width="200" height="200" fill="${this.shapecolor}"/>
<text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.letters}</text> `

}
}

module.exports = Square;