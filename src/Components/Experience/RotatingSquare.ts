import p5 from "p5";

class RotatingSquare {
    p5: p5;
    x: number;
    y: number;
    size: number;
    angle: number;
    rotationSpeed: number;
    color: p5.Color;
    constructor(x: number, y: number, size: number, p5: p5) {
        this.p5 = p5;
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = p5.random(p5.TWO_PI);
        this.rotationSpeed = p5.random(0.01, 0.03);
        this.color = p5.random(['#FF0000', '#FFFF00', '#0000FF']); // Red, Yellow, Blue
    }

    update() {
        this.angle += this.rotationSpeed;
    }

    display() {
        this.p5.push();
        this.p5.translate(this.x, this.y);
        this.p5.rotate(this.angle / 5);
        this.p5.fill(this.color);
        this.p5.rectMode(this.p5.CENTER);
        this.p5.rect(0, 0, this.size, this.size);
        this.p5.pop();
    }
}

export default RotatingSquare;