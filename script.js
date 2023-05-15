let condition = true;

function forward() {
    anime({
        targets: '.menu-small',
        translateY: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 400,
        loop: false
    });

    condition = false
}

function backward() {
    anime({
        targets: '.menu-small',
        translateY: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 400,
        loop: false
    });

    condition = true
}

$('.menu_small_icon').click(function () {
    if (condition) {
        forward();
    } else {
        backward();
    }
});

let start = 0;
let end = 0;
$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});
$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    } else if (start - end >= 100 && !condition) {
        backward();
    }

});

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close");

const showModalWindow = function() {
  modal.style.display = "block";
}

const closeModalWindow = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  /* myModalGames */
  if (event.target == modalgames) {
    modalgames.style.display = "none";
  }
  /* myModalNiko */
  if (event.target == modalniko) {
    modalniko.style.display = "none";
  }
}

const modalgames = document.getElementById("myModalGames");

const showModalWindowGames = function() {
    modalgames.style.display = "block";
}
  
const closeModalWindowGames = function() {
    modalgames.style.display = "none";
}
  
/* myModalGames */

let links = document.querySelectorAll('.scroll');
let targetID;

links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

/* Nikomove */

const modalniko = document.getElementById("myModalNiko");

const showModalWindowNiko = function() {
    modalniko.style.display = "block";
}
  
const closeModalWindowNiko = function() {
    modalniko.style.display = "none";
}

let cvs = document.querySelector(".canvasniko");
let ctx = cvs.getContext("2d");
let niko = document.createElement('img');

niko.src = "images/NikoCharater.png";
let xPos = 750;
let yPos = 750;

function draw(){
    ctx.drawImage(niko, xPos, yPos);
}

window.addEventListener('load', draw);

window.addEventListener('keydown', function (event) {
    if (event.key == 'a') { xPos -= 10; }
    if (event.key == 'd') { xPos += 10; }
    if (event.key == 'w') { yPos -= 10; }
    if (event.key == 's') { yPos += 10; }
    if (event.key == 'ф') { xPos -= 10; }
    if (event.key == 'в') { xPos += 10; }
    if (event.key == 'ц') { yPos -= 10; }
    if (event.key == 'ы') { yPos += 10; }
});

function draw(){
    ctx.clearRect(0,0, 2000, 5000);
    ctx.drawImage(niko, xPos, yPos);
    window.requestAnimationFrame(draw);
}

/* Nikomove */

$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        captions: true, 
        nextText: '',
        prevText: '',
        easing: 'jswing',
    });
});