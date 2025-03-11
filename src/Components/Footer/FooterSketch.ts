import p5 from "p5";

function sketch(p5: p5) {

    let angle = 0.01;
    p5.setup = function () {
        p5.createCanvas(p5.windowWidth, 400);
    }

    p5.windowResized = function () {
        p5.resizeCanvas(p5.windowWidth, 400);
    }

    p5.draw = function () {
        p5.clear();
        p5.fill('#e60200')
        p5.beginShape();
        p5.vertex(0, p5.width + 50);
        for (let i = 0; i <= p5.width * 1.5; i += 80) {
            let y = p5.sin(i / 200 + angle) * 40;
            p5.curveVertex(i - p5.width / 3, y + p5.height / 4);
        }
        p5.vertex(p5.width, p5.height + 50);
        p5.endShape(p5.CLOSE);
        angle += 0.0075;
    }


}

export default sketch;