const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
var pisamenos;
var likeawrekingball;
var contracorrente;

function setup() {

  createCanvas(1201, 800);

  engine = Engine.create();
  world = engine.world;
  c1 = new Caixas(901,101,61,61);
  c2 = new Caixas(901,101,61,61);
  c3 = new Caixas(901,101,61,61);
  c4 = new Caixas(901,101,61,61);
  c5 = new Caixas(901,101,61,61);
  c6 = new Caixas(901,101,61,61);
  c7 = new Caixas(801,101,61,61);
  c8 = new Caixas(801,101,61,61);
  c9 = new Caixas(801,101,61,61);
  c10 = new Caixas(801,101,61,61);
  c11 = new Caixas(801,101,61,61);
  c12 = new Caixas(801,101,61,61);
  c13 = new Caixas(701,101,61,61);
  c14 = new Caixas(701,101,61,61);
  c15 = new Caixas(701,101,61,61);
  c16 = new Caixas(701,101,61,61);
  c17 = new Caixas(701,101,61,61);
  c18 = new Caixas(701,101,61,61);
  c19 = new Caixas(701,101,61,61);
  c20 = new Caixas(701,101,61,61);
  pisamenos = new Solo(600,600,1200,20);
  likeawrekingball = new Boladamorte(200,200,40,-PI/9);
  contracorrente = new Eloforte(likeawrekingball.body,{x:501,y:51});
}

function draw() {

  background(80);

  Engine.update(engine);
  c1.display(); 
  c2.display(); 
  c3.display(); 
  c4.display(); 
  c5.display(); 
  c6.display(); 
  c7.display(); 
  c8.display(); 
  c9.display(); 
  c10.display(); 
  c11.display(); 
  c12.display(); 
  c13.display(); 
  c14.display(); 
  c15.display(); 
  c16.display(); 
  c17.display(); 
  c18.display(); 
  c19.display(); 
  c20.display();  

  pisamenos.display();
  likeawrekingball.display();
  contracorrente.display();
}

function mouseDragged(){
  Matter.Body.setPosition(likeawrekingball.body,{x:mouseX,y:mouseY});
}
