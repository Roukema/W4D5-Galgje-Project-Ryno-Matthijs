
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


const {guessLetter} = require('./script.js');
test("when tries=5 the game should stop", function(){
  // const input = ["a", "p"]; 
  const maxAmount = 5
    const loseTheGame = jest.fn();
  for (tries=0; tries <= maxAmount; tries++){
    console.log(0 + tries)
  };
  
  guessLetter("a", ["b","a","d"]);
  expect(guessLetter().loseTheGame).toBeHaveBeenCalled()
}
);
//Dit is een hele dag van heen en weer testen die deed het ff en nu niet meer, natuurlijk! Klaaaar me doei!
