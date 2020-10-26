const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,370,50,50);
    box2 = new Box(1000,370,50,50); 
    box3 = new Box(800,290,50,50);
    box4 = new Box(1000,290,50,50);
    box5 = new Box(900,230,50,50)
    pig1 = new pig(900,370)
    pig2 = new pig(900,290)
    log1 = new log(900,310,250,PI/2)
    log2 = new log(900,250,250,PI/2)
    log3 = new log(850,230,100,PI/7)
    log4 = new log(960,230,100,-PI/7)
    bird1 = new bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}