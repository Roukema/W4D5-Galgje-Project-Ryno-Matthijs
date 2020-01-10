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