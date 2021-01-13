
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1 ,bin2 , bin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Dustbin(250,100,20,70)
	bin2 = new Dustbin(170,150,60,20)
	bin3 = new Dustbin(140,80,20,70)
	paper = new Paper(x,y,50,PI/3)

	Engine.run(engine);
  
}


function draw() {
	background("green");
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
 bin3.display();
 paper.display();
 
  
  drawSprites();

 
}
  

	
	



