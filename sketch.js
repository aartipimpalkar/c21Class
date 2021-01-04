var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,100,50,50);
  car.shapeColor="blue";
  car.velocityX=3;

  wall=createSprite(1000,100,20,70);
  wall.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 /* if(isTouching(car,wall))
  {
    car.velocityX=0;
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
*/
bounceOff(car,wall);

  drawSprites();
}
