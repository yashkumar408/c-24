class Dustbin{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }

        this.Bodyb = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.bodyb)
        this.Body1 = Bodies.rectangle((x-(width / 2)),(y-height*2)),height,options;
        World.add(world,this.Body1)
        this.Bodyr = Bodies.rectangle((x+(width / 2)),(y-height*2)),height,options;
        World.add(world,this.Bodyr)
        this.bodyb.width = width
        this.bodyb.height = height


    }
    display(){
        fill("white");
        rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height)
        rect(this.bodyb.position.x-(this.bodyb.width/2)),(this.bodyb.position.x)
        rect(this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.position.x)

        
    }
}