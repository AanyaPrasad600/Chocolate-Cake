var movingRect, fixedRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 3;
  movingRect = createSprite(400, 500, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -3;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "blue";
}

function draw() {
  background(0,0,0); 

  gameObject2.x = World.mouseX;
  gameObject2.y = World.mouseY;

  if (isTouching(gameObject1, gameObject2)) {
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  else {
    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }

  bounceOff(movingRect, fixedRect);
  drawSprites();
}