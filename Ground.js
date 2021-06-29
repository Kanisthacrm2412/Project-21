class Ground{

    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        var g_Options={

            isStatic: true

        }

        this.body = Bodies.rectangle(x,y,w,h,g_Options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }

}