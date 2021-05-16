var ground,groundImg;
var boy,boyImg;
var invisibleGround;


function preload() {

  groundImg = loadImage("forest.jpg");
  boyImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");

}


function setup() {
  createCanvas(1200,700);
  imageMode(CENTER);

ground = createSprite(700,250,1000,20);
ground.addImage(groundImg);
ground.scale=2;

invisibleGround=createSprite(600,380,1200,20);
invisibleGround.visible=false;

boy = createSprite(100,350,20,50);
boy.addAnimation("running",boyImg);
boy.scale=0.7;

}

function draw() {
  background("white");  

  ground.velocityX=-2;
  
 if(ground.x < 0 ) {
   ground.x=ground.width/2;
 }

 if(keyDown("space") && boy.y>330) {
   boy.velocityY=-14;
 }
 boy.velocityY=boy.velocityY+0.5;

 boy.collide(invisibleGround);

  drawSprites();
}

function spawnMonsters() {

}