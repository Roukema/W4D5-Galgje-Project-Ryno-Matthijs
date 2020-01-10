const { guessLetter, wordPicker, showWord, wordToDom } = require("./script.js");

test("Generate a word", function() {
  list = ["ryno", "matthijs"];
  output = wordPicker(list);
  expect(output).toEqual(expect.any(String));
});

test("checks if word includes letter and gives back letter", function() {
  word = ["t", "e", "s", "t"];
  letters = ["e", "s", "l"];
  wordToDom = jest.fn(showWord(word, letters));
  // output = showWord(word, letters);

  expect(wordToDom).toBeCalledWith(["e", "s"]);
});

test("when tries=5 the game should stop", function() {
  // tries = 5
  for (i = 0; i <= 5; i++) {
    guessLetter(i + "");
  }
  expect(lose4()).toBe(5);
});
