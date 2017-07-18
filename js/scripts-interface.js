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

    c.moveTo(x - 20, y - 20);
    c.lineTo(x + 20, y + 20);
    c.stroke();

    c.moveTo(x + 20, y - 20);
    c.lineTo(x - 20, y + 20);
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
    c.fillStyle = "rgb("+
      Math.floor(Math.random()*200)+","+
      Math.floor(Math.random()*200)+","+
      Math.floor(Math.random()*200)+")";
    c.lineStyle = "#fff";
    c.lineWidth = 0;
    c.stroke();
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

for (var i = 0; i < 100; i++) {

  var radius = 4;
  var x = Math.random() * (innerWidth - radius * 4) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var yVelocity = (Math.random() - 0.1) * 3;
  var xVelocity = (Math.random() - 0.2) * 2;

  circleArray.push(new Circle(x, y, yVelocity, xVelocity, radius));
}

// var y = 200;

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();
}
