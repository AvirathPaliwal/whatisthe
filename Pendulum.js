class Pendulum{
    constructor(x,y,color){
        var pos={
            restitution:1,
            slop:5,
            inertia:Infinity,
            isStatic:true
        };
        this.p = Bodies.rectangle(x,y,40,40,pos);
        this.c=color;
        World.add(world,this.p);
    }
    display(){
        push();
            translate(this.p.position.x,this.p.position.y);
            rotate(this.p.angle);
            noStroke();
            fill(this.c);
            ellipseMode(RADIUS);
            ellipse(0,0,25,25);
        pop();
    }
}