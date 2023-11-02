const createGameBoard = ()=>{
  const board =  [["X", "O", "O"], ["O", "X", "X"], ["X", "O", "X"]];
  return {
      board,
  };
};

const container = document.getElementById('container')


const playerModule =(()=>{
  const createPlayer = (name,sign)=>{
      const getName = ()=>{
          return name
      };
      const getSign = ()=>{
          return sign
      };

      return {
          getName,
          getSign
      };
  };

  const player1 = createPlayer("Player1", "X")
  const player2 = createPlayer("Player2", "O")

  return {
      player1,
      player2
  };

})();

playerModule.player1.getName()
playerModule.player1.getSign()


playerModule.player2.getName()
playerModule.player2.getSign()


const gameBoard = createGameBoard()
console.log(gameBoard)


gameBoard.board.forEach(element => {
  element.forEach(element =>{
      const boxDiv = document.createElement('div');
      boxDiv.classList = 'square';
      boxDiv.textContent = element
      container.appendChild(boxDiv)
  })
});