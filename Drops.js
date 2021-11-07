class Drops {

    constructor(x, y) {
        var options = {
            friction: 0.001,
            restitution: 0.01,
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
        this.r = 5;
    }

    display() {
        ellipseMode(CENTER);
        fill("cyan");
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }

    update() {
        if (this.body.position.y > 500) {
            Matter.Body.setPosition(this.body, { x: round(random(0, 500)), y: -10 });
        }
    }
}