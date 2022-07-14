for (i = 0; i < document.querySelectorAll(".content-button").length; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", sound);
}

function sound() {
  var keyPressed = this.querySelector(".content-text").innerHTML;
  makeSound(keyPressed);
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
})

function makeSound(key) {
  switch (key) {
    case "1":
      var s1 = new Audio("Music/andrew-garfield-ehhehehehhehehheee.mp3");
      s1.play();
      break;
    case "2":
      var s2 = new Audio("Music/Noot Noot Sound Effect.mp3");
      s2.play();
      break;
    case "3":
      var s3 = new Audio("Music/Abhi Maza Aayega Na Bhidu.mp3");
      s3.play();
      break;
    case "4":
      var s4 = new Audio("Music/Hehe boy.mp3");
      s4.play();
      break;
    case "5":
      var s5 = new Audio("Music/Kaisa laga mera mazak - Dr.gulati.mp3");
      s5.play();
      break;
    case "6":
      var s6 = new Audio("Music/Ohhh - Notification.mp3");
      s6.play();
      break;
    case "7":
      var s7 = new Audio("Music/Pankaj Tripathi Music Meme.mp3");
      s7.play();
      break;
    case "8":
      var s8 = new Audio("Music/Wait a minute.mp3");
      s8.play();
      break;
    default:

  }
}
