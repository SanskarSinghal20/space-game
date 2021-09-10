var spaceship,iss
var bgImg






function preload(){
  bgImg = loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1,png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png") 
}



function setup() {
  
  createCanvas(400, 400);



spaceship=createSprite(200,200);
spaceship.addImage(bgImg);

}

function draw() {
  background(0);



  drawSprites()
}