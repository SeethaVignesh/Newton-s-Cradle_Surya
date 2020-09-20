class Bob {
  constructor(x, y) {
    var options = {
     // isStatic: true,
      restitution: 1,
      density: 1.2,
      friction:0.5
    }
    this.radius = 15;
    this.body = Bodies.circle(x, y, 15, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    ellipseMode(RADIUS);
    // translate(pos.x, pos.y);
    fill("deepPink");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
  }

  setStatic(b) {
    Body.setStatic(this.body, b);
  }

//     console  jump() {
// .log("jumping");
//     Bdy.applyForce(this.body, this.body.position, { x: 285, y: 210 });
//   }
}
