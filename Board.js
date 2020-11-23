class Board {
  constructor(wordLength){
    this.board = new Array(wordLength).fill("_")
  }
  isBoardComplete(){
    //I think you should look at this block and see why your game is ending
    //and soon as you guess one letter right
    let complete = false;
    for (let i = 0; i < this.board.length; i++) {
      //hint hint
      // if(this.board[i] != "_") {
      //   complete = true;
      // }
      if(!this.board.includes("_")){
        complete = true
      }
    }
    return complete
  }
  displayBoard(){
    //you should also display the words
    //that user have guessed
    console.log(this.board)
  }
}

module.exports = Board