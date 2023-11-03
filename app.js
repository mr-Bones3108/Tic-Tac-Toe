
//BoardModule
const createGameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const container = document.getElementById("container");

  const createBoard = () => {
    // board.forEach((row,rowIndex) => {
    //     const boxDiv = document.createElement('div');
    //     boxDiv.classList = 'square';
    //     container.appendChild(boxDiv);
    //   });
    
    let boardHtml = "";
    board.forEach((square, index) => {
      boardHtml += `<div class="square" id="square-${index}">${square}</div>`;
    });

    const boardContainer = document.createElement("div");
    boardContainer.classList='grid-container'
    boardContainer.innerHTML = boardHtml
    container.appendChild(boardContainer);

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", game.handleClick);
    });


    };
  
  return {
    createBoard,
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
    createGameBoard.createBoard()
    players.forEach(element =>{
      console.log(element)
    })
  };

  const handleClick = (event)=>{
    const index = parseInt(event.target.id.split("-")[1])
    alert(index)
  }

  return{
    start,
    handleClick
  }
})();

function playGame(){
  game.start()
}







