var car1,speed,weight;
var trgt1;
var thickness1;

function setup() {
  createCanvas(1200,100);
  speed=Math.round(random(233,321));
  
  weight=Math.round(random(30,52));
  
  thickness1=Math.round(random(22,83));
    
  
  trgt1=createSprite(1160,46,35,55);
  trgt1.thickness=thickness1;
  
  car1=createSprite(20,46,40,17)
  car1.velocityX=speed;
  car1.weight=weight;
}

function draw() {
  background(0); 
  
  car1.collide(trgt1);
 
  drawSprites();
  
  x(car1,trgt1,thickness1);
}



function x(car1,trgt1,thickness1) {

  if (car1.x+car1.width>=trgt1.x){
    car1.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness1*thickness1*thickness1);
if (deformation>10){
  trgt1.shapeColor=color(255,0,0);
  }else if (deformation<10 ){
    trgt1.shapeColor=color(230,230,0);
  } 
}

}