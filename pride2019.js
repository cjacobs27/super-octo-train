// View this animation here: https://editor.p5js.org/cjacobs27/present/MTpiWjU-j
let xspacing = 5; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 6.0; // Start angle at 0
let amplitude = 50.0; // Height of wave
let period = 450.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

let textX = 0;
let textY = [10, 50, 110, 160, 210, 260, 320, 370, 400];

function setup() {
  createCanvas(550, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  showText();
  renderWave();
}

function showText() {
  textX = textX += 2;

  if (textX == 550) {
    textX = 0;
  }

  strokeWeight(2);
  noFill();
  let heartColour = textX / 2;

  colorMode(HSB, 100);
  stroke(heartColour - 10, heartColour + 250, 100);
  for (let v = 0; v < textY.length; v++) {

    let love = '❤❤❤❤❤❤❤❤';

    textSize(26);
    text(love, textX - 200, textY[v], 100, 100);
    text(love, textX - 400, textY[v], 100, 100);
    text(love, textX, textY[v], 100, 100);
    text(love, textX + 200, textY[v], 100, 100);
    text(love, textX + 400, textY[v], 100, 100);
  }

  if (textX >= 299) {
    textX = 0;
  }

}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    let rainbow = x;
    if (rainbow >= 220) {
      rainbow = 0;
    }

    colorMode(HSB, 100);
    stroke(rainbow - 10, rainbow + 250, 100);

    strokeWeight(4);
    line(x * xspacing, height + yvalues[x], x * xspacing, height / 20 + yvalues[x]);

    strokeWeight(1);
    fill(rainbow - 10, rainbow + 250, 100);
    ellipse(x * xspacing, height + yvalues[x], 20, 5);
    ellipse(x * xspacing, height / 20 + yvalues[x], 20, 5);
  }
}
