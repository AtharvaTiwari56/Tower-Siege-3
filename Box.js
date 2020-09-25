class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.4,
        }
        this.width = width;
        this.height = height;
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("jdfglajdg.png");
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed < 6) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        pop();
      }
              
      }
      score() {
        if(this.visibility < 225 && this.visibility > -100) {
          score++;
        }
      }
}