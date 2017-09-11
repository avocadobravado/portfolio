// HTML Canvas
window.onload = function() {

// Variables
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var colors = ['#FEAC5E', '#4BC0C8', '#d687b1', '#663399'];
var circleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Circle object
function Circle(x, y, xVelocity, yVelocity, radius, color) {
  this.x = x;
  this.y = y;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x * canvas.width, this.y * canvas.height, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    if (this.x > 1 || this.x < 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y > 1 || this.y < 0) {
      this.yVelocity = -this.yVelocity
    }

    this.x += (this.xVelocity / canvas.width);
    this.y += (this.yVelocity / canvas.height);

    this.draw();
  }
}

for (var i = 0; i < 100; i++) {
  var radius = 4;
  var x = Math.random();
  var y = Math.random();
  // Multiply by 2 - 1 to support left and downward velocities
  var yVelocity = (Math.random() * 2 - 1) * .15;
  var xVelocity = (Math.random() * 2 - 1) * .15;
  var color = colors[Math.floor(Math.random()*colors.length)];

  circleArray.push(new Circle(x, y, yVelocity, xVelocity, radius, color));
}

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
}

// JQUERY TIME

// Smooth navigation scrolling effect
$(document).ready(function(){
  $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

  // Resizing Canvas
  var c = $('#respondCanvas');
  var container = $(c).parent();

  //Run function when browser resizes
  $(window).resize(respondCanvas);

  function respondCanvas(){
    c.attr('width', $(window).width() ); //max width
    c.attr('height', $(window).height() ); //max height
  }

    //Initial call
    respondCanvas();
});
