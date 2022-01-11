var box,ball,x;

function preload(){
  // load all assets of project here
}

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);5
  ball=createSprite(100,100,30,30);
  x = 10;
  console.log("in setup" + x);

}
//hello

function draw() 
{
  background(2,3,2)
  console.log("in draw" + x);
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }

  drawSprites();
}




