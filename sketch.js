var car,wall,speed,weight;






function setup() {

  createCanvas(800,400);
 car= createSprite(100, 200, 50, 50);
 wall=createSprite(750,200,10,90);
 weight=random(400,1500);
 speed=random(55,90);
 car.velocityX=speed/2;

}

function draw() {
  background(255,255,255);  
  if (car.x-wall.x>car.width/2+wall.width/2) {
    var deformation=0.5*speed*speed*weight/22500
    car.velocityX=0;
    car.x=car.x-90;
    if(deformation>180){

      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}