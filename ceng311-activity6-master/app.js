var button = document.getElementById("button");

window.onload = function () {
  button.onclick = clickedButton;
}

var initialTime = 500;

setTimeout(function loop() {
  moveButton();
  setTimeout(loop, initialTime);
}, 500)

function moveButton() {
  button.style.marginTop = Math.random() * 300 + "px";
  button.style.marginLeft = Math.random() * 300 + "px";
}

var score = 0;
var level = 1;

function clickedButton() {
  score += 1;
  if (score == 3) {
    level += 1;
    alert(`You are the winner! You can go next level${level}`);
    initialTime -= 100;
    score = 0;
  }
}

