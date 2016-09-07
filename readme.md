# Bowling Calculator

![bowling](images/bowling.jpg)

Write a JavaScript function that calculates the score of a bowling game. The function should take as an argument an array of frames that represent what was bowled. For example:

```javascript
let game = [
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
```

The final score of the above game is 159.

The `getScore` function signature is:

```javascript
function getScore(game) {
  // TODO: calculate and return the score
}
```

There is a starter app and some Jasmine unit tests that can be run to test your work.

```bash
npm install -g jasmine   # run this once to install Jasmine
jasmine-node spec        # run this each time you want to test your work
```
