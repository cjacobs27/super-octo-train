// View this animation at: https://editor.p5js.org/cjacobs27/present/mGjzniRRG
let f = 0;
let c = 10;
let c2 = 50;
let target = '🙂';
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {

  f = f +=4;
  
  if (f === 400) {
    while (f <= 400 && f > 0) {
    f = f -=4;
    }
  }
  
  background(0);
  line(0,f,400,f);
  line(f,0,f, 400);
  stroke(255, 255, 255);
  textSize(50);
  text(target, f-33, f+25);
  stroke(0, 225, 0);
  
  if (f > 0 && f < 400) {
      c = c -=3;
      c2 = c2 -=3;
      
      noFill();
      if (f > 180 && f < 220) {
          stroke(255,0, 0);
          target = '💀';
      }
      circle(f, f, c);
      circle(f, f, c2);

    } else {
      c = 10;
      c2 = 50;
      str = '🙂';
    }
}
