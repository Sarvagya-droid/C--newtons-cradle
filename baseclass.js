class BaseClass{
    constructor(x, y){
        var options ={
            isStatic:false,
        }
        this.body = Bodies.circle(x, y, 12.5, 12.5);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
display(){
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 25, 25);
}
}