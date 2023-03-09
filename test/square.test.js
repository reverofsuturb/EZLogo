const Square = require("../lib/square");

describe("Square", () => {
  describe("render test", () => {
    it("the render function should produce results that match the literal template", () => {
      const squaretest = new Square("STF", "black", "red");

      expect(squaretest.render()).toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="red"/>
<text x="100" y="100" font-size="60" text-anchor="middle" fill="black">STF</text>`
);
    });
  });
});
