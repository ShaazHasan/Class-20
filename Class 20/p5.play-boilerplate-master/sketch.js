var MR;
var FR;

function setup() {
  createCanvas(800,400);
  MR = createSprite(400, 200, 50, 50);
  MR.shapeColor = "black";
  FR = createSprite(400, 300, 50, 50);
  FR.shapeColor = "grey";
  MR.debug = true;
  FR.debug = true;
}

function draw() {
  background(255,255,255);  
  MR.x = mouseX;
  MR.y = mouseY;
  if (MR.x - FR.x < FR.width/2 + MR.width/2
    && FR.x - MR.x < FR.width/2 + MR.width/2
    && MR.y - FR.y < FR.height/2 + MR.height/2
    && FR.y - MR.y < FR.height/2 + MR.height/2) {
  MR.shapeColor = "yellow";
  FR.shapeColor = "yellow";
}
else {
  MR.shapeColor = "black";
  FR.shapeColor = "grey";
}
  drawSprites();
}