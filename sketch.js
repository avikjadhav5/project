const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
let angine;
let wodies;
let ground, ball;
function setup() {
  createCanvas(400,400);
  angine = Engine.create();
  wodies = angine.world;
  let apple = {isStatic : true}
  let banana = {restitution : 0.1}
  ground = Bodies.rectangle(0,380,20,20,apple);
  World.add(wodies,ground);
  console.log(ground);
  ball = Bodies.circle(200,200,50,banana);
  World.add(wodies,ball);
}

function draw() {
  background(255,255,25);  
  Engine.update(angine)
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,50);
}