class Boladamorte{
    constructor(x,y,r,angulo){
        var options = {
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r
        World.add(world,this.body);
    }
    display(){
        var angulo = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angulo);
        ellipseMode(RADIUS);
        strokeWeight(6);
        stroke("black");
        fill("gold");
        ellipse(0,0,this.r,this.r);
        pop();
    }



}