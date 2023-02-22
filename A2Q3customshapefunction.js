function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('hsl(215,60%,50%)');
  house(80,3,2.45);
}

function house(x, y, size){
  push();
  translate(x,y)
  scale(size)
  strokeWeight(4)
  fill('tomato');
  stroke('rebeccapurple');
  beginShape();
  vertex(0,160);
  vertex(0,60);
  vertex(-15,60);
  vertex(50,0);
  vertex(80,30);
  vertex(80,10);
  vertex(90,10);
  vertex(90,40);
  vertex(110,60);
  vertex(95,60);
  vertex(95,160);
  endShape(CLOSE)  
  pop();
  
}
