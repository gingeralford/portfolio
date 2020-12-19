console.log("hello");

function randomTilt () {
  let random = Math.round((Math.random()) * 20 -10);
  if (random < 3 && random >= 0) {
    random += 3;
  } else if (random > -3 && random <= 0) {
    random -= 3;
  }
  console.log(random);
  this.style.transform = "rotate("+ random +"deg)";
}

function restore () {
  this.style.transform = "rotate(0deg)";
}


let send = document.getElementById("send");
send.addEventListener("pointerenter", randomTilt);
send.addEventListener("pointerleave", restore);

let navItems = document.getElementsByTagName('a');
navItems[0].addEventListener("pointerenter", randomTilt);
navItems[0].addEventListener("pointerleave", restore);

navItems[1].addEventListener("pointerenter", randomTilt);
navItems[1].addEventListener("pointerleave", restore);

navItems[2].addEventListener("pointerenter", randomTilt);
navItems[2].addEventListener("pointerleave", restore);

navItems[3].addEventListener("pointerenter", randomTilt);
navItems[3].addEventListener("pointerleave", restore);
