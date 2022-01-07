class Caixas{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angulo = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angulo);
        rectMode(CENTER);
        strokeWeight(7);
        stroke("lightblue");
        fill("cyan");
        rect(0,0,this.width,this.height);
        pop();
    }



}