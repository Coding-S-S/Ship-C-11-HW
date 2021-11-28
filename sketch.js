var shipImg,ship,seaImage,sea;
function preload(){
  seaImg = loadImage("sea.png");
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  

}

function setup(){
  createCanvas(600,300);
  background("blue");

  ship = createSprite(200,180,20,20);
  ship.addAnimation("ship",shipImg);
  ship.scale =0.2;
  // Moving background
  sea=createSprite(10,200,600,10);
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=false
}
function draw() {
  background(seaImg)
  if(keyDown("space")){
    ship.velocityY=-10;
  }
  ship.velocityY = ship.velocityY + 0.8

  if(sea.x < 0) {
    sea.x = sea.width / 2;
  }

  ship.collide(sea);
  drawSprites()
}
  

  
    
