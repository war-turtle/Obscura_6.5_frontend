const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.opacity = Math.random();
  this.dOpacity = Math.random() * 0.01;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.fillStyle = `rgba(${this.color.r}, ${this.color.b}, ${this.color.g}, ${this.opacity})`;
    c.fill();
    c.closePath();
  };

  this.update = () => {
    if (this.x > window.innerWidth || this.x < 0) {
      this.dx = -this.dx;
    }

    if (this.y > window.innerHeight || this.y < 0) {
      this.dy = -this.dy;
    }

    if (this.opacity >= 1 || this.opacity <= 0) {
      this.dOpacity = -this.dOpacity;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.opacity += this.dOpacity;

    this.draw();
  };
}

function Spark(x, y) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 3;
  this.velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  };
  this.ttl = timeToLive;
  this.opacity = 1;
  this.color = colors[Math.floor(Math.random() * colors.length)];
}

Spark.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  c.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${
    this.opacity
  })`;
  c.fill();
  c.closePath();
};

Spark.prototype.update = function() {
  this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.y;
  this.ttl--;
  // this.opacity -= 1 / this.ttl;
};

function Firework(x, y) {
  this.x = x;
  this.y = y;
  this.ttl = timeToLive;
}

Firework.prototype.update = function() {
  for (let i = 0; i < sparksNumber; i++) {
    sparks.push(new Spark(this.x, this.y));
  }
  this.ttl--;
};

const timeToLive = 100; //In frames

const colors = [
  { r: 255, b: 97, g: 56 },
  { r: 255, b: 255, g: 157 },
  { r: 190, b: 235, g: 159 },
  { r: 0, b: 163, g: 136 },
];
const circleCount = 50;
const circles = [];
// const what = Math.random() < 0.5 ? 'circle' : 'firework';
const what = 'circle';

const sparksNumber = 50;
const fireworksNumber = 2;
const sparks = [];
const fireworks = [];
let frames = 0;

function init(what) {
  if (what === 'circle') {
    for (let i = 0; i < circleCount; i++) {
      const radius = Math.random() * 3;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      circles.push(new Circle(x, y, dx, dy, radius, color));
    }
  } else if (what === 'firework') {
    for (let i = 0; i < fireworksNumber; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      fireworks.push(new Firework(x, y));
    }
  }
}

const animate = () => {
  if (what === 'circle') {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circles.length; i++) {
      circles[i].update();
    }
  } else if (what === 'firework') {
    c.fillStyle = 'rgba(255, 255, 255, 0.3)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    frames++;
    if (frames % timeToLive === 0) {
      frames = 0;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      fireworks.push(new Firework(x, y));
    }

    if (frames % timeToLive === timeToLive / 2) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      fireworks.push(new Firework(x, y));
    }

    for (let i = 0; i < fireworks.length; i++) {
      fireworks[i].update();
      fireworks.splice(i, 1);
    }

    for (let i = 0; i < sparks.length; i++) {
      sparks[i].update();
      if (sparks[i].ttl < 0) {
        sparks.splice(i, 1);
      }
    }
  }

  requestAnimationFrame(animate);
};

animate();
init(what);
