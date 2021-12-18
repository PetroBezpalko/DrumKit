// Detecting Button Press
var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    // this - has all the information about the (element that got clicked) button that triggered the eventListener.
    // (for instance: console.log(this); = <button class="a drum">a</button>)
    // because we nees only the letter, we use innerHTML to get it.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}
// Detecting Keyboard Press

document.addEventListener("keydown", function(event){ // event is a variable that contains all the properties of keydown
  makeSound(event.key); // here we take only the key property(simply the letter on the key that was pressed) as an input for function makeSound
  buttonAnimation(event.key);
  // console.log(event.key); will return a letter
});





function makeSound(key) {

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100);


}

console.log('1')
const fetchData = async () => {
    await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?" + new URLSearchParams({
        CMC_PRO_API_KEY: "4e55e521-c879-452b-8c40-5af612c87045",
        symbol: "BTC,LTC,OPUL"
    }), {

            mode: 'no-cors', // no-cors, *cors, same-origin

            headers: {
                'Content-Type': 'application/json'
    

            }
        }
    ).then(response => response.json())
        .then((json) => {
            console.log(json.data)
        });
}


console.log('9')
fetchData()
