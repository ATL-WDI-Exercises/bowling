var getScore = require("../bowling").getScore;

let game1 = [
  [9, 0],         // 9+0 = 9
  [7, 2],         // 9 + 7+2 = 18
  [10],           // 18 + 10 + 9 + 0 = 37
  [9, 0],         // 37 + 9+0 = 46
  [7, 3],         // 46 + 7+3 + 7 = 63
  [7, 2],         // 63 + 7+2 = 72
  [10],           // 72 + 10 + 10 + 9 = 101
  [10],           // 101 + 10 + 9 + 1 = 121
  [9, 1],         // 121 + 9+1 + 9 = 140
  [9, 1],         // 140 + 9+1 + 9 = 159
  [9]             // bonus
];

console.log('\ngame1');
console.log('final score: %d', getScore(game1, true));

let perfectGame = [ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10] ];
console.log('\nperfectGame');
console.log('final score: %d', getScore(perfectGame, true));

let badGame = [ [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0] ];
console.log('\nbadGame');
console.log('final score: %d', getScore(badGame, true));
