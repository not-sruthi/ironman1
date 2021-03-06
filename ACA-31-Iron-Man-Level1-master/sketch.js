
var bg, backgroundImg;
var ironman, ironimg;
var diamond, diaimg, diagroup;
var spike,spikeimg, spikegroup;
var stone, stoneimg, stonegroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironimg= loadImage("images/iron.png");
  diaimg= loadImage("images/diamond.png");
  spikeimg=loadImage("images/spikes.png");
  stoneimg=loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300,1000,600);
  bg.addImage(backgroundImg);
  bg.scale=1.5;

  ironman=createSprite(480,500,40,20);
  ironman.addImage(ironimg);
  ironman.scale=0.3;

  diagroup=new Group();
  spikegroup=new Group();
  stonegroup=new Group();
}

function diaGen() {
  
}

function draw() {
  
  bg.velocityY=5;
  if (bg.y>400) {
    bg.y=bg.width/16;
  }

  if (keyDown("a")) {
    ironman.x=ironman.x-5;
  }
  if (keyDown("d")) {
    ironman.x=ironman.x+5;
  }
    
  drawSprites();
   
}

