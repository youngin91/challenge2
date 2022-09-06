const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

 // disable right click
 document.addEventListener('contextmenu', event => event.preventDefault());
 
 document.onkeydown = function (e) {

     // disable F12 key
     if(e.keyCode == 123) {
         return false;
     }

     // disable I key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
         return false;
     }

     // disable J key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
         return false;
     }

     // disable U key
     if(e.ctrlKey && e.keyCode == 85) {
         return false;
     }
 }


dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `images/dice${randomNumber2}.png`);
if(randomNumber1 == randomNumber2){
  title.innerText = "Draw!"
}else if(randomNumber1 > randomNumber2){
  title.innerText = "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
  title.innerText = "Player 2 Wins! 🚩"
}