const {guessLetter} = require('./script.js');

test("when tries=5 the game should stop", function(){
    // tries = 5
  for (i=0; i <=5; i++){
      guessLetter(i + "")
  }
  expect(lose4()).toBe(5);
});