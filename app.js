
//BoardModule
const createGameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const createBoard = () => {
    let boardHtml = "";
    board.forEach((square, index) => {
      boardHtml += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector("#container").innerHTML = boardHtml

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", game.handleClick);
    });
    };

    const update = (index,mark)=>{
      board[index]=mark
      createBoard()
    }

    const getGameBoard =()=>{
      return board
    }
  
  return {
    createBoard,
    update,
    getGameBoard
  };
})();



//factory function
const createPlayer = (name,mark)=>{
    return{
      name,
      mark
    }
};


//gameModule
const game = (()=>{
  let players=[]
  let currPlayer;
  let gameOver;

  const start = ()=>{
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "O")
    ]
    currPlayer=0;
    createGameBoard.createBoard()
  };

  const handleClick = (event)=>{
    const index = parseInt(event.target.id.split("-")[1])
    const valuePresent = createGameBoard.getGameBoard()[index];
    if (valuePresent !== ""){
      return;
    }
    createGameBoard.update(index,players[currPlayer].mark)
    currPlayer = currPlayer === 0 ? 1 : 0;

  }

  return{
    start,
    handleClick
  }
})();

function playGame(){
  game.start()
}







