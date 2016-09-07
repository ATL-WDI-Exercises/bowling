var getScore = require("../bowling").getScore;

describe("getScore", function() {
  it("should return 300 for a perfect game", function() {
    let game = [ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10] ];
    let score = getScore(game);
    expect(score).toBe(300);
  });
});

describe("getScore", function() {
  it("should return 159 for a good game", function() {
    let game = [ [9, 0], [7, 2], [10], [9, 0], [7, 3], [7, 2], [10], [10], [9, 1], [9, 1], [9] ];
    let score = getScore(game);
    expect(score).toBe(159);
  });
});

describe("getScore", function() {
  it("should return 90 for a bad game", function() {
    let game = [ [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0] ];
    let score = getScore(game);
    expect(score).toBe(90);
  });
});
