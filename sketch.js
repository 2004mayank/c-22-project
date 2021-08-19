
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(2000,600);

  engine = Engine.create();
  world = engine.world;

  //ground is an object of the Ground class
  ground=new Ground(1000,550,2000,20)
  box1=new Box(200,50,50,50)
  box2=new Box(250,100,50,50)
  ball=new Ball(250,250,90)
  chain=new Chain(ball.body,{x:250 , y:50 })
  ball2=new Ball(300,300,90)
  chain2=new Chain(ball2.body,{x:800, y:100 })

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
ground.display()
box1.display()
box2.display()
ball.display()
chain.display()
ball2.display()
chain2.display()
}