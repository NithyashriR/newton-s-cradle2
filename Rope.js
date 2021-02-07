class Rope {
    constructor(bodyA,bodyB,offsetX , offsetY) {
      
     
      var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:offsetX , y:offsetY}
        
        
        
      }
      
this.offsetX = offsetX;
this.offsetY = offsetY;
      this.rope = Matter.Constraint.create(options);
      World.add(world, this.rope);
    }

    display(){
      if(this.rope.bodyA){
      var pointA =this.rope.bodyA.position;
      var pointB =this.rope.bodyB.position;
      push()
      strokeWeight(3.5);
      stroke("#fff");
      line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
      pop();
      
    };
  }
}