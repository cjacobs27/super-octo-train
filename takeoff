const grid = {
  rows: 10,
  cols: 10
}

const cell = {
  width: 80,
  height: 80
}

let a = 10;
let b = -10;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  colorMode(RGB, 255, 255, 255, 1);

  a = a += 10;
  b = b -= 10;

  background(32 + a * 0.5, 99, 253);

  for (let i = 0; i < grid.rows; i++) {
    for (let j = 0; j < grid.cols; j++) {

      const x = i * cell.width;
      const y = j * cell.height;

      // white lines moving top left to bottom right
      stroke(255, a * 0.01);
      smooth()
      strokeWeight(1.5);
      ellipse(x, y, 10, 10);
      if ((a * 0.01) >= 1) {
        let c = 1;
        stroke(255 - a * 0.0001, c - a * 0.0001);
        strokeWeight(a * 0.0105);
      }
      line(x, y, x + a, y + a);
      line(x, y, y + a, x + a);

      // yellow lines moving from bottom right to top left
      stroke(255, 203, 112, a * 0.01);
      strokeWeight(1.5);
      if ((a * 0.01) >= 1) {
        let c = 1;
        stroke(255, 203 - a * 0.1, 112, c - a * 0.0015);
        strokeWeight(a * 0.01);
      }

      line(x, y, x + b, y + b);
      line(x, y, y + b, x + b);

      // white lines moving from bottom left towards top right
      stroke(255, a * 0.01);
      smooth()
      strokeWeight(1.5);
      ellipse(x, y, 10, 10);
      if ((a * 0.01) >= 1) {
        let c = 1;
        stroke(255 - a * 0.0001, c - a * 0.0001);
        strokeWeight(a * 0.0105);
      }

      line(y + b, x + b, y, x);
      line(x + b, y + b, y, x);
    }
  }

  // loop pls
  if (a > 700) {
    a = -10;
    b = -10;
  }
}
