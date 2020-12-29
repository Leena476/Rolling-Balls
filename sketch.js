const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var shelf1,shelf2;
var balls = [];

function setup() {
  
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  shelf1 = new Shelf(90,70,220,20,PI/9);
  shelf2 = new Shelf(300,160,220,20,-PI/9);
  shelf3 = new Shelf(90,250,220,20,PI/9);
  shelf4 = new Shelf(300,340,220,20,-PI/9);

  Engine.run(engine);

}

function draw() {
  
  background(color(mouseX,mouseY,mouseX-mouseY));

  if(frameCount % 2 === 0){
    balls.push(new Ball(random(40,50),-50));
  }


  for(i = 0; i < balls.length; i++){
    balls[i].display();
  }

  shelf1.display();
  shelf2.display();
  shelf3.display();
  shelf4.display();

}