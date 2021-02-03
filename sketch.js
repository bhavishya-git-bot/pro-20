function setup() {
  createCanvas(800,800);
  createSprite(800, 200, 50, 80);
  createSprite(800, 300, 50, 80);
  createSprite(800, 400, 50, 80);
  createSprite(800, 500, 50, 80);
  CA=createSprite(400, 200, 20, 20);
  CB=createSprite(400, 300, 20, 20);
  CC=createSprite(400, 400, 20, 20);
  CD=createSprite(400, 500, 20, 20);

  CA.velocityX=3;
  CB.velocityX=6;
  CC.velocityX=9;
  CD.velocityX=12;
  
}

function draw() {
  background("black");  
  drawSprites();
}