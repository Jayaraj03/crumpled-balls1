class Dustbin {
    constructor(x,y,width,height){
        var options ={
            isStatic = false,
            density = 1.5

        }

     this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 50;
     this.height = 50;

     World.add(world,this.body)
    }

    display(){
        var pos =this.body.position
        rectMode(RIGHT);
        fill("pink")

    }
}