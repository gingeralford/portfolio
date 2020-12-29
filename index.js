console.log("hello");
var intFrameWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
let navItems = document.getElementsByTagName('a');
console.log(intFrameWidth);
console.log(navItems)

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

let footerLinks = document.getElementsByClassName('icon');

for (i = 0; i <= 2; i++) {
  footerLinks[i].addEventListener("pointerenter", randomTilt);
  footerLinks[i].addEventListener("pointerleave", restore);
}

if (intFrameWidth > 575) {
  for (i = 0; i <= 3; i++) {
    navItems[i].addEventListener("pointerenter", randomTilt);
    navItems[i].addEventListener("pointerleave", restore);
  }
}

/* what should we do when scrolling occurs
var runOnScroll =  function() {
  // not the most exciting thing, but a thing nonetheless
  // console.log(evt.target);
  if (document.body.scrollTop > 800 || document.documentElement. scrollTop > 800 && document.body.scrollTop < 850) 
  {
    console.log("scroll reached!");
    cards[0].style.border = "2px solid red";
  }
  
};

// grab elements as array, rather than as NodeList
var elements = document.querySelectorAll(".flip-card");
console.log(elements);
let cards = document.querySelectorAll(".flip-card-front");
elements = Array.prototype.slice.call(elements);

// and then make each element do something on scroll
elements.forEach(function(element) {
  window.addEventListener("scroll", runOnScroll, {passive: true});
});

/*another shot at this from another angle 

function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
  var winY = window.innerHeight || document.documentElement.clientHeight,
      distTop = elem.getBoundingClientRect().top,
      distPercent = Math.round((distTop / winY) * 100),
      distPixels = Math.round(distTop),
      distUnit;
  distUnit = unit == 'percent' ? distPercent : distPixels;
  if (distUnit <= distanceFromTop) {
      if (!hasClass(elem, classToAdd)) { addClass(elem, classToAdd); }
      } else {
      delClass(elem, classToAdd);
      }
  }
// params: element id, class to add, distance from top, unit ('percent' or 'pixels') */