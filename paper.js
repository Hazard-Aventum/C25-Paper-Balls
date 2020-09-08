class Paper{
  constructor(x,y,radius){
    var options = {
      'isStatic':false,
      'restitution':0.3,
      'friction':0,
      'density':1.2
     }
     this.image = loadImage("paper.png")
     this.body = Bodies.circle(x, y, radius, options);
     this.radius = radius;
     World.add(world, this.body);

  }
   display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    fill(255);
    image(this.image,0,0,this.radius,this.radius);
    pop();
   }


}