class Rope{
    constructor(bodyA, pointB){
      //  this.offsetX = offsetX;
      //  this.offsetY = offsetY;
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:100
            //pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.bodyB=pointB //we havenot defined BodyB then why it is not throwing an error
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var bodyB = this.bodyB;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, bodyB.x, bodyB.y);
    }
}
