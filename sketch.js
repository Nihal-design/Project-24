
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var log1, log2, log3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new PaperBall(50, 100, 20);
	log1 = new Dustbin(500, 550, 20, 100);
	log2 = new Dustbin(520, 630, 200, 20); 	
	log3 = new Dustbin(700, 550, 20, 100);
	ground = new Ground(400, 650, 800, 10);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  	background(0);

  	ball.display();
  	log1.display();
  	log2.display();
  	log3.display();
	ground.display();
	  
	keypressed();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(	ball.body, ball.body.position, {x:85, y:-85});
	}
}



