class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0001,
            length: 10
        }
        this.throw = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.throw);
    }
    attach(body) {
        this.throw.bodyA = body;
    }
    fly(){
        this.throw.bodyA = null;

    }
    display(){   
        if(this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
           
            
            pop();
        }
    }
    
}