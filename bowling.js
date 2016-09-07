function isSet(v) {
  return typeof v !== 'undefined';
}

function getSafe(v) {
  return isSet(v) ? v : 0;
}

function getAfterNext(game, idx) {
  let second = game[idx+1][1];
  return isSet(second) ? second : getSafe(game[idx+2][0]);
}

function printFrame(idx, frame, kind, math) {
  console.log('frame %d - [%s] - %s ==> %s', (idx+1), frame, kind, math);
}

function getScore(game, verbose = false) {
  return game.reduce( (prev, frame, idx) => {
    if (idx > 9) {
      if (verbose) printFrame(idx, frame, 'bonus', prev);
      return prev;                                  // do not count bonus game
    }
    else if (frame[0] === 10) {                       // STRIKE!
      let nextOne = getSafe(game[idx+1][0]);
      let afterNext = getAfterNext(game, idx);
      let result = prev + 10 + nextOne + afterNext;
      if (verbose) printFrame(idx, frame, 'strike', `${prev} + 10 + ${nextOne} + ${afterNext} = ${result}`);
      return result;
    }
    else if (frame[0] + frame[1] === 10) {              // SPARE!
      let nextOne = getSafe(game[idx+1][0]);
      let result = prev + frame[0] + frame[1] + nextOne;
      if (verbose) printFrame(idx, frame, 'spare', `${prev} + ${frame[0]} + ${frame[1]} + ${nextOne} = ${result}`);
      return result;
    }
    else {
      let result = prev + frame[0] + frame[1];
      if (verbose) printFrame(idx, frame, 'normal', `${prev} + ${frame[0]} + ${frame[1]} = ${result}`);
      return result;
    }
  }, 0);
}

exports.getScore = getScore;
