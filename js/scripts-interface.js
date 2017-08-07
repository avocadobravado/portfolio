window.onload = function() {

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Draw an x function
canvas.addEventListener("mouseup", mouseUp, false);
canvas.addEventListener("mouseup", mouseUp, false);

function drawX(x, y) {
    c.beginPath();

    c.moveTo(x - 1, y - 1);
    c.lineTo(x + 1, y + 1);
    c.stroke();

    c.moveTo(x + 1, y - 1);
    c.lineTo(x - 1, y + 1);
    c.stroke();
}

function mouseUp(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    drawX(mouseX, mouseY);
}


// Circle object
function Circle(x, y, xVelocity, yVelocity, radius) {
  this.x = x;
  this.y = y;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillStyle = "rgb("+
    //   Math.floor(Math.random()*255)+","+
    //   Math.floor(Math.random()*255)+","+
    //   Math.floor(Math.random()*255)+")";
    // c.fillStyle = "rgb(0, 0, 255)";
    c.fillStyle = "#663399";
    // c.fillStyle = "#663399";
    // c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.yVelocity = -this.yVelocity
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;

    this.draw();
  }

}

var circleArray = [];

for (var i = 0; i < 30; i++) {

  // var radius = Math.floor(Math.random() * 5) + 1;
  var radius = 4;
  var x = Math.random() * (innerWidth - radius * 1) + radius;
  var y = Math.random() * (innerHeight - radius * 1) + radius;
  var yVelocity = (Math.random() - .8) * .3;
  var xVelocity = (Math.random() - .8) * .3;

  circleArray.push(new Circle(x, y, yVelocity, xVelocity, radius));
}

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();
}

/// Smooth navigation scrolling effect

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
});
