class Bob {
    constructor(x,y,r){
        var options={
            
            friction:0.4,
            density:3,
           restitution:1.2,
        }
       
        this.r=r;

        this.body=Bodies.circle(x,y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        push();
        fill (30,70,200);
        
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop();
}
}