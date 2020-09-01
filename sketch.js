const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;	

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);

	Support1 = new Ground(400, 350, 110, 40);
	ball1 = new Ball(330, 450);
	ball2 = new Ball(340, 450);
	ball3 = new Ball(350, 450);
	ball4 = new Ball(360, 450);
	ball5 = new Ball(370, 450);
	rope1 = new Rope(ball1.body, {x:350, y:350});
	rope2 = new Rope(ball2.body, {x:375, y:350});
	rope3 = new Rope(ball3.body, {x:400, y:350});
	rope4 = new Rope(ball4.body, {x:425, y:350});
	rope5 = new Rope(ball5.body, {x:450, y:350});
  
}


function draw() {
	background("black");
	Engine.update(engine);
  
  Support1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
//   chain1.display();
if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-20,y:20 })
  }

  drawSprites();
}