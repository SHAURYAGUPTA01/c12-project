var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeaf,apple;
var leafImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  var rand =  Math.round(random(1,100));
  console.log(rand);
  
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();

  console.log(frameCount);
  
  rabbit.x = World.mouseX;

 

  spawnLeaf();

  spawnApple();

  drawSprites();
 
}
  

function spawnApple(){
 if(frameCount % 80 === 0){
  apple = createSprite(150,100,40,40);
  apple.addImage("myApple",appleImg);
  apple.y = Math.round(random(10,50));
  apple.x = Math.round(random(10,400));
  apple.scale = 0.06;
  apple.velocityY = 5;
 }
}


function spawnLeaf(){
  if(frameCount % 100 === 0){
   orangeLeaf = createSprite(150,100,40,40);
   orangeLeaf.addImage("myLeaf",leafImg);
   orangeLeaf.y = Math.round(random(10,50));
   orangeLeaf.x = Math.round(random(10,400));
   orangeLeaf.scale = 0.06;
   orangeLeaf.velocityY = 3;

  }
 }





