class Boy{
    constructor(x,y,width,height) {
        var options = {
            
            restitution:0,
            friction:0,
            density:0

    
        
}
this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/boy.png");
        World.add(world, this.body);

}
display(){

    var pos =this.body.position;

    rectMode(CENTER);
    
    image(this.image,pos.x, pos.y,this.width,this.height);


}
}