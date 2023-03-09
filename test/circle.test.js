const Circle = require("../lib/circle.js");

describe("Circle", () => {
  describe("render test", () => {
    it("the render function should produce results that match the literal template", () => {
      const circletest = new Circle("STF", "black", "red");

      expect(circletest.render())
        .toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="90" fill="red"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">STF</text></svg>`
);
    });
  });
});
