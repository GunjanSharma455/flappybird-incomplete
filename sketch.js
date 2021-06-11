var bird,birdImg,pipe1,pipe2,pipe3,pipe4,pipe5,pipe6,pipe7,pipe8,pipe9,pipe;
var p,p1,p2,p3,p4,pipes5,p6,p7,p8,p9;
var bg,bgImg,gameover,gameoverImg;
gameState = "serve" ;

function preload(){
  birdImg = loadImage("blue.png");
  p = loadImage("pipe.jpg");
  p1 = loadImage("p1.png");
  p2 = loadImage("p2.png");
  p3 = loadImage("p3.png");
  p4 = loadImage("p4.png");
  pipes5 = loadImage("pipe5.png");
  p6= loadImage("p6.png");
  p7= loadImage("p7.png");
  p8= loadImage("p8.png");
  p9= loadImage("p9.png");
bgImg = loadImage("bg.jpg");
gameoverImg = loadImage("gameover.jpg");
}

function setup() {
  createCanvas(1000,500);
  bg = createSprite(0,0,800,600);
 bg.addImage(bgImg);
 bg.scale = 3.5;
 bird = createSprite(200,220,20,20);
 bird.addImage(birdImg);
 bird.scale = 0.15;
}

function draw() {
 // background("black");  

if (keyDown("left")){
  bird.x = bird.x-5;
}
if (keyDown("right")){
  bird.x = bird.x+5;
}
if (keyDown("space")){
  bird.velocityY = -10;
  gameState = "play" ;
}
bird.velocityY = bird.velocityY + 0.8;
bg.velocityX = -10;
if (bg.x <0 ){
   bg.x = bg.width/2;
}
 
  drawSprites();
}