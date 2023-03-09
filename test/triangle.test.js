const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  describe("render test", () => {
    it("the render function should produce results that match the literal template", () => {
      const triangletest = new Triangle("STF", "black", "red");

      expect(triangletest.render())
      .toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="red"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="black">STF</text>`
);
    });
  });
});
