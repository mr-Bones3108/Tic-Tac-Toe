const container = document.getElementById('container')

//BoardModule
const createGameBoard = (() => {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];
  const container = document.getElementById("container"); // Assuming you have a container element with the id "container"

  const createBoard = () => {
    board.forEach((row) => {
      row.forEach((element) => {
        const boxDiv = document.createElement('div');
        boxDiv.classList = 'square';
        boxDiv.textContent = element;
        container.appendChild(boxDiv);
      });
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

  return{
    start
  }
})();

function playGame(){
  game.start()
}







