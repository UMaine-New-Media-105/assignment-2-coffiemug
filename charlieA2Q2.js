function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('hsl(215,60%,50%)');
  strokeWeight(4)
  
  translate(0,-180)
  scale(1.5)
  fill('tomato');
  stroke('rebeccapurple');
  beginShape();
  vertex(50,350);
  vertex(50,250);
  vertex(35,250);
  vertex(100,190);
  vertex(130,220);
  vertex(130,200);
  vertex(140,200);
  vertex(140,230);
  vertex(160,250);
  vertex(145,250);
  vertex(145,350);
  endShape(CLOSE)  
  
}
