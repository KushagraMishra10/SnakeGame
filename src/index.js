import "./styles.css";

var SnakeGame = function (n) {
  this.render = function (n, x, y) {
    var container = document.getElementById("snake-board");
    container.innerHTML = "";
    for (let i = 0; i < n; i++) {
      var snakeRow = document.createElement("div");
      for (let j = 0; j < n; j++) {
        var snakeEle = document.createElement("div");
        let attribute = document.createAttribute("id");
        attribute.value = i + "-" + j;
        snakeEle.setAttributeNode(attribute);
        snakeEle.classList.add("snakeEle");
        snakeEle.classList.add("inlineBox");
        if (i === x && j === y) {
          snakeEle.classList.add("highlight");
        } // Create a text node
        console.log(snakeEle);
        snakeRow.appendChild(snakeEle);
      }
      container.appendChild(snakeRow);
    }
  };

  this.updateUI = (x, y) => {
    let id = x + "-" + y;
    console.log("ID:", id);
    if (document.getElementsByClassName("highlight")[0]) {
      document
        .getElementsByClassName("highlight")[0]
        .classList.remove("highlight");
    }
    if (document.getElementById(id)) {
      console.log("I am here");
      document.getElementById(id).classList.add("highlight");
    }
  };

  this.Direction = 1;
  this.Increment = 1;
  this.top = () => {
    this.Direction = 1;
    this.Increment = -1;
  };
  this.bottom = () => {
    this.Direction = 1;
    this.Increment = 1;
  };
  this.left = () => {
    this.Direction = 0;
    this.Increment = -1;
  };
  this.right = () => {
    this.Direction = 0;
    this.Increment = 1;
  };

  this.snakeUpdate = function (x, y) {
    if (
      (this.Direction === 0 &&
        (x + this.Increment < 0 || x + this.Increment === n)) ||
      (this.Direction === 1 &&
        (y + this.Increment < 0 || y + this.Increment === n))
    ) {
      console.log("Gameover");
      return false;
    }
    if (this.Direction === 1) {
      y += this.Increment;
      this.updateUI(x, y);
    }

    if (this.Direction === 0) {
      x += this.Increment;
      this.updateUI(x, y);
    }
    setTimeout(() => {
      this.snakeUpdate(x, y);
    }, 100);
  };

  this.start = () => {
    console.log("gameStarted");
    this.render(10, 0, 0);
    this.snakeUpdate(0, 0);
  };
};

var game = new SnakeGame(10);
game.start();
