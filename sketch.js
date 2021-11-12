
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var ground;
var crumple;


function preload()
{
	
}

function setup() {
	createCanvas(1050, 450);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
  dustbin1=new Dustbin(770,390,200,20);
	dustbin2=new Dustbin(680,330,20,100);
	dustbin3=new Dustbin(860,330,20,100);
	ground  =new Ground(500,420,1100,20);
  crumple =new Papper(100,280,40,40);
   

  

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground  .display();
  crumple .display();
  keyPressed();
  drawSprites();

}
function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(crumple.ball,crumple.ball.position,{x:2,y:-5})
         }
    }
 


