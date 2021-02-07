
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	Canvas = createCanvas(windowWidth/1.5 , windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	/*Create the Bodies Here.
let canvasMouse = Mouse.create(canvas.elt);
canvasMouse.pixelRatio = pixelDensity();
let options = {

	mouse : canvasMouse
}

mConstraint = MouseConstraint.create(engines/options);
World.add(World,mConstraint)
	Engine.run(engine);*/
	

	ground1 = new Ground(400,100,300,40);

	bob1=new Bob(300,350,50);
	bob2=new Bob(350,350,50);
	bob3=new Bob(400,350,50);
	bob4=new Bob(450,350,50);
	bob5=new Bob(500,350,50);

	rope1 =new Rope(bob1.body,ground1.body,-50*2,0)
	rope2 =new Rope(bob2.body,ground1.body,-25*2,0)
	rope3 =new Rope(bob3.body,ground1.body,-0*2,0)
	rope4 =new Rope(bob4.body,ground1.body,25*2,0)
	rope5 =new Rope(bob5.body,ground1.body,50*2,0)
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine);
  
  
  ground1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
console.log(bob1.body.position.x)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body , bob1.body.position , {x:-50 , y:-50} );
	}
}