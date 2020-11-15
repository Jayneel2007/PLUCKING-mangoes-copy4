
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(700,120,500,600)
	mango1= new Mango(750,180,20)
	boy = new Boy(1000,400,100,300)


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  tree.display();
  mango1.display();
  boy.display();
  
 

}



