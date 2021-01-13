class Paper {
    constructor(x , y , width,angle){
        var options ={
            isStatic : false,
            restituition : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        ellipse(56,46,55,55);
        this.body = Bodies.rectangle(x,y,width,options)
        this.width = 50;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        translate(pos.x , pos.y);
        Rotate(angle)
        rectMode(RIGHT)
        strokeWeight(2)
        stroke(255)
        rect(0,0,this.width,this.height)
        pop();

    }
};