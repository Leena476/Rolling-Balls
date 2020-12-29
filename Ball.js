class Ball {

    constructor(x,y,radius){

        var options = {
            restitution:0.5,
            friction:0.6,
            density:0.5,
            isStatic:false
        }

        this.radius = 10;
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }

    display(){

        push ();

        var pos = this.body.position;
        var angle = this.body.angle;

        translate(pos.x,pos.y);
        rotate (angle);

        noStroke();

        ellipseMode(RADIUS);
        fill (this.color)
        ellipse(0,0,this.radius,this.radius);

        pop ();

    }

}