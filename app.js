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

createGameBoard.createBoard()

//factory function
const createPlayer = (name,mark)=>{
    return{
      name,
      mark
    }
};








