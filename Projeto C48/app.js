var board;
var playerO = "o";
var playerX = "x";
var currPlayer = playerO;
var gameOver = false;


window.onload = function() {
  setGame();
}

function setGame(){
   board = [
     ["", "", ""],
     ["", "", ""],
     ["", "", ""]
   ]

   for(let r = 0; r < 3; r++){
    for(let c = 0; c < 3; c++){
      
      let title = document.createElement("div");
      title.id = r.toString() + "" + c.toString();
      title.classList.add("title");
      if(r == 0 || r == 1){
        title.classList.add("horizontal-line");
      }
      if(c == 0 || c == 1){
        title.classList.add("vertical-line");
      }
      document.getElementById("board").append(title);
    }
   }
}