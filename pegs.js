class Pegs {
    constructor(x,y,r) {
      var options = {
        restitution:0.8,
        friction: 1, 
        isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("White");
      circle(0,0, this.r*2);
      pop();
    }
  };
