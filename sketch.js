//Story of game:
//You are a army cheif and you have went hunting for some deers for fun but then you see Terroist planes come in.as,yo are the army cheif you try to save your country by firing at 
//the terrist planes.If any of the terroist planes spot you then you are dead.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var backgroundImg;
var soliderImg,solider;
var plane;
var muteButton;

function preload(){
backgroundImg=loadImage("bg.jpg");
soliderImg=loadImage("soilder1.png");
plane=loadImage("plane.png");
}

function setup() {
  createCanvas(windowWidth-200,windowHeight-60);

  engine = Engine.create();
  world = engine.world;
  
  solider=Bodies.rectangle(200,height-80,100,100);
  solider=image(soliderImg)
 
}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
}

