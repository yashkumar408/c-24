
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new Dustbin(720,300,100,10);
	paper = new Paper(300,100,10);
	ground = Bodies.rectangle(width / 2,400,width,10,

    {
     isStatic: true
	});

	World.add(world,ground)

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
background("black");
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{
	x:12,
	y:-13

  });

}

}



