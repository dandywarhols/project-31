class Particle {
    constructor(x,y,r) {
      var options = {
        restitution:0.1,
        density:5,
        friction: 1       
         }
     
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.color = color (random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      push();
      var angle = this.body.angle;
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill(this.color);
      rotate(angle);
      circle(0,0, this.r*2);
      pop();
    }
  };
