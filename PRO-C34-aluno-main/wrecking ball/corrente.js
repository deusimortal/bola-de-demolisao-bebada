class Eloforte{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length:250
        }
        this.pointB = pointB
        this.elooo = Constraint.create(options);
        World.add(world, this.elooo);
    }
    attach(body){
        this.elooo.bodyA = body;
    }
    
    fly(){
        this.elooo.bodyA = null;
    }

    display(){
        if(this.elooo.bodyA){
            var pointA = this.elooo.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("silver");
            strokeWeight(5);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    
}