const columns = document.querySelectorAll(".col");
 
const restartBtn = document.querySelector(".restart-btn");
 
const grid = document.querySelector(".winner");
 
let array = Array(9).fill(null);
 
let currentPlayer = "x";
 
let isWinner = true;
 
 
 
columns.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.textContent === "")
 
    // if(el.textContent === ""){
      currentPlayer = currentPlayer === "o" ? currentPlayer = "x" : currentPlayer = "o";
    // }
 
    if (isWinner) {
      let id = el.id - 1;
      if(el.textContent == ""){
 
        array[id] = currentPlayer;
      }
      // console.log(array)
      checkWinner();
      playerValueDisplay();
      checkDraw();
      // if(el.textContent === ""){
      console.log(el.textContent === "")
      el.disabled = true;
        // currentPlayer = currentPlayer === "o" ? currentPlayer = "x" : currentPlayer = "o";
 
      // }
    }
  })
});
 
function playerValueDisplay() {
  let i = 0;
  array.forEach((v) => {
    columns[i].textContent = v;
    i++
  })
 
}
function checkWinner() {
  if (
    array[0] !== null && array[0] === array[1] && array[2] === array[1] ||
    array[0] !== null && array[0] === array[4] && array[4] === array[8] ||
    array[0] !== null && array[0] === array[3] && array[3] === array[6] ||
    array[1] !== null && array[1] === array[4] && array[4] === array[7] ||
    array[2] !== null && array[2] === array[4] && array[4] === array[6] ||
    array[2] !== null && array[2] === array[5] && array[5] === array[8] ||
    array[3] !== null && array[3] === array[4] && array[3] === array[5] ||
    array[6] !== null && array[6] === array[7] && array[7] === array[8]
  ) {
    if(currentPlayer == "o"){
      grid.innerHTML = `Player 1 is winner`;
    }else{
      grid.innerHTML = `Player 2 is winner`;
    }
    // grid.innerHTML = currentPlayer + " Is winner";
    isWinner = false;
    addColumnClass();
    restartBtn.classList.add("restart-btn-toggle");
  }else{
    // restartBtn.classList.remove("restart-btn-toggle");
    // addColumnClass();
  }
}
function checkDraw(){
  if((!array.includes(null)) && isWinner === true){
    grid.textContent = "The match is draw";
    restartBtn.classList.add("restart-btn-toggle");
    addColumnClass();
    isWinner = false;
  }
}
 
function addColumnClass(){
  columns.forEach((elem)=>{
    elem.classList.toggle("disable-mouse")
  })
}
 
function restartGame(){
  columns.forEach((al)=>{
    array = Array(9).fill(null);
    al.innerHTML = "";
    isWinner = true;
    grid.innerHTML = "";
    restartBtn.classList.remove("restart-btn-toggle");
    addColumnClass();
    al.disabled = false;
    currentPlayer = "x"
  })
}
restartBtn.addEventListener("click", restartGame);
