
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

    const reset =()=>{
      for(let i=0; i<board.length;i++){
        board[i]=""
      }
      createBoard()
    }
  
  return {
    createBoard,
    update,
    getGameBoard,
    reset
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
    gameOver=false;
    createGameBoard.createBoard()
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", game.handleClick);
    });
  };

  const handleClick = (event)=>{
    if(gameOver){
      return;
    }
    const index = parseInt(event.target.id.split("-")[1])
    const valuePresent = createGameBoard.getGameBoard()[index];
    if (valuePresent !== ""){
      return;
    }
    createGameBoard.update(index,players[currPlayer].mark)

    if(checkForWin(createGameBoard.getGameBoard(), players[currPlayer].mark)){
      gameOver=true;
      alert(`${players[currPlayer].name} won!`)
    }
    else if(checkForTie(createGameBoard.getGameBoard())){
      gameOver=true;
      alert(`Its a tie`) 
    }
    // console.log(createGameBoard.getGameBoard())
    currPlayer = currPlayer === 0 ? 1 : 0;
  }

  const restart = ()=>{
    createGameBoard.reset()
    // console.log(createGameBoard.getGameBoard())
  }

  return{
    start,
    handleClick,
    restart
  }
})();


function checkForWin(board){
  const winningCombinations = [
    // Horizontal Lines (Rows)
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  
    // Vertical Lines (Columns)
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0 ; i<winningCombinations.length;i++){
    const [a,b,c] = winningCombinations[i]
    if(board[a] && board[a]===board[b] && board[a]===board[c]){
      return true;
    }
  }
  return false
}

function checkForTie(board){
  return board.every(cell => cell !=="")
}

function playGame(){
  game.start()
}

function restartPlay(){
  game.restart()
}







