class Shelf {

    constructor(x,y,width,height,angle){

        var options = {isStatic:true}

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.stroke = color(random(0,100),random(0,100),random(0,100));
        World.add(world,this.body);

        Matter.Body.setAngle(this.body,angle);

        this.width = width;
        this.height = height;

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate (angle);

        stroke(this.stroke);
        strokeWeight(2);
        fill (this.color);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop ();

    }

}