class Ball{
    constructor(x, y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 12.5, options);
        this.width = width;
        this.height = height;
       /// this.image = loadImage("Images/CrumpledPaper.png")
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 25, 25);
    }
}