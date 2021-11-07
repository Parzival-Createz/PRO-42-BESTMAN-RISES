class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            friction: 0.001,
            restitution: 0.01,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("walk.png");
        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x - 10, this.body.position.y + 35, 300, 300);
    }
}