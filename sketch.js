const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var plinko = [];
var particles = [];
var divisionheight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  // Make pegs
 for (var p = 100; p <=  300; p = p + 200) {
  
    for (var r = 40; r <= width; r = r + 50) {
      plinko.push(new Pegs(r,p,10));
    }

    for (var n = 15; n <= width; n = n + 50) {
      plinko.push(new Pegs(n,p+100,10));
    }
  }


  // Make Divisions
 for (var w = 0; w <= width; w = w + 80){
    divisions.push (new Division(w, height - divisionheight/2, 10, divisionheight));
  }

// Make ground
  ground = new Ground(width/2,height, width, 20);
  
// Make first Particles 
particles.push(new Particle(random(width/2-20,width/2 + 20),10,10));
}



function draw() {
  Engine.update(engine);
  background(0,0,0);  

  // Show ground
  ground.display();
  
  // Show pegs
  for (var l = 0; l < plinko.length; l++) {
    plinko[l].display();
   }
  
  // display divisions    
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
   }

  // Show Particles   
   for (var p = 0; p < particles.length; p++){
    particles[p].display();
   }




   if (frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-20,width/2 + 20),10,10));
   }

}