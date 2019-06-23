const words = "We do this not because it is easy but because it is hard";
let array = words.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
let written = [];

function setup() {
  createCanvas(400, 400).mousePressed(writeWord);
}

function draw() {
  background(220);
  for (let w of written)  w.display();
}

function findWord() {
  let index = Math.round(random(0, array.length));
  if (index == null) {
    index = 0;
  }
  return array[index];
}

function writeWord() {
  const w = new Word;
  let str = findWord();
  written.push(w.setXYAndString(mouseX, mouseY, str));
  redraw();
}

class Word {
 // for x y position
  constructor(x, y, str) { this.setXYAndString(x, y); }
 
  setXYAndString(x, y, str) {
    this.x = x, this.y = y, this.str = str;
    return this;
  }
 
  display() { text(this.str, this.x, this.y); }
}
