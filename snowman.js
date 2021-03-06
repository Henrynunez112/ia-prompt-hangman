const readline = require('readline-sync')
const Board = require ("./Board.js")
const dictionary = require ("./dictionary.js")
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")

class Game {
  constructor(){
    this.name = readline.question("Hello! Please enter your name: ")
    this.magicWord = dictionary[Math.floor(Math.random() * dictionary.length)]
    this.wrongGuessesRemaining = 6
    this.guesses = []
    this.board = new Board(this.magicWord.length)
  }
  
  getMove() {
    //as a user needs to see the number of guesses
    //remaining should be visible
    return readline.question("Guess any letter:")
  }
  
  isCorrectGuess(letter) {
    if (this.magicWord.includes(letter)) {
      return true
    } else {
      return false
    }
  }
  
  isValidGuess(letter){
    //why do you want to check if the letter appears in the alphabet AND in the array this.guesses where you enter
    // letters you have ALREADY guessed.

    // if (alphabet.includes(letter) && !this.guesses.includes(letter)){
    if (alphabet.includes(letter) && this.guesses.includes(letter)){
      return true
    } else {
      return false
    }
  }
  isGameOver(){
    if (this.wrongGuessesRemaining <= 0 || this.board.isBoardComplete()){
      return true 
    } else {
      return false 
    }
  }
  // isGameOver(){
  //   if(this.wrongGuessesRemaining <= 0){
  //     console.log("Sorry, you lost. The word was " + game.magicWord);
  //     return true
  //   }else if(this.board.isBoardComplete() ){
  //     console.log(`Congratulations, ${game.name}! You win!`);
  //     return true
  //   }
  //   return false
  // }

  placeLetter (letter){
    for (let i = 0; i < this.board.board.length;i++){
      if (this.magicWord[i] === letter){
        this.board.board[i] = letter
        this.guesses.push(letter)
      }
    }
  }
  play(){
    while (!this.isGameOver()){
      let letter = this.getMove()
      while (!this.isValidGuess(letter)) {
        console.log("Sorry, that is not a valid guess.");
    //Handle invalid guesses by displaying a 
    //message and having the user enter a different guess.
    //Invalid guesses don't count against the guess count
        this.wrongGuessesRemaining--
        letter = this.getMove()
      }
      if (this.isCorrectGuess(letter)) {
        this.placeLetter(letter)
        this.wrongGuessesRemaining--;
      } else {
        console.log("Incorrect!")
        this.wrongGuessesRemaining--;
      }
      this.board.displayBoard()
      console.log("You have " + this.wrongGuessesRemaining + " guesses left")
    }
  }

}

let game = new Game()

//you have the code blocks for the ending of the game but they are not appearing
// in the console may putting these two in a fuction could possible help you get to the end


if (game.isGameOver() && game.wrongGuessesRemaining >= 0){
      console.log(`Congratulations, ${game.name}! You win!`)
      //the game should display how many guesses it took and display a victory message

} 
else if (game.isGameOver() && game.wrongGuessesRemaining <= 0){
  console.log("Sorry, you lost. The word was " + game.magicWord);
  
}

game.play()
