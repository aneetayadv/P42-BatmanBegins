class Drop{
    constructor(x,y,r){
        var options = {
            restitution: 0.4
        }
        this.r = r;
        this.drop = Bodies.circle(x,y,r,options);

        World.add(world,this.drop);
    }

    display(){
        var pos = this.drop.position;

        push()
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }

    updateDrops(){
        var randomX = Math.round(random(10,displayWidth-10));
		var randomY = Math.round(random(10,displayHeight-500));
        if(this.drop.position.y > height-100){
            Body.setPosition(this.drop,{x:randomX,y:randomY});
        }
    }

}