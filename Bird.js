class Bird {
    constructor(x,y) {
        var options = {
            'density':1.5,
            'friction':1.0,
            'restitution':1.5
        }
        this.body = Bodies.circle(x,y,28,options)
        this.radius = 28
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        pos.x = mouseX
        pos.y = mouseY
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        strokeWeight(4)
        stroke("green")
        fill("red");
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
}