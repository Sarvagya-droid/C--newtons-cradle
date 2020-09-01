class Ground{
    constructor(x, y, width, height){
        var optionsForGround ={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y, width, height, optionsForGround);
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER);
        fill("pink");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}