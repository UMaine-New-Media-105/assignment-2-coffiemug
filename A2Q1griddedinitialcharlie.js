function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  stroke(255);
  newRow(0,0,1);
  newRow(0,80,1);
  newRow(0,160,1);
  newRow(0,240,1);
  newRow(0,320,1);
  
  blueSquare(160,0,1);
  blueSquare(80,80,1);
  blueSquare(240,80,1);
  blueSquare(80,160,1);
  blueSquare(80,240,1);
  blueSquare(160,320,1);
  blueSquare(240,240,1)
  
}

function newRow(x,y,size) {
  push();
  translate(x,y);
  scale(size)
  fill('orange');
  rect(0,0,80);
  rect(80,0,80);
  rect(160,0,80);
  rect(240,0,80);
  rect(320,0,80);
  pop();}

function blueSquare(x,y,size){
  push();
  translate(x,y);
  scale(size);
  fill('cornflowerblue');
  rect(0,0,80);
  pop();
}
