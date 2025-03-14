import p5 from "p5";

function sketch(p5: p5) {

    let angle = 0.01;
    p5.setup = function () {
        p5.createCanvas(p5.windowWidth, scaleElement(p5.windowWidth));
    }

    p5.windowResized = function () {
        p5.resizeCanvas(p5.windowWidth, scaleElement(p5.windowWidth));
    }

    p5.draw = function () {
        p5.clear();
        p5.fill('#e60200');
        p5.beginShape();
        p5.vertex(0, p5.height + 50);
        for (let i = 0; i <= p5.windowWidth * 1.5; i += 20) {
            let y = p5.sin(i / 200 + angle) * 40;
            p5.curveVertex(i - p5.windowWidth / 3, y + p5.height / 4);
        }
        p5.vertex(p5.windowWidth, p5.height + 50);
        p5.endShape(p5.CLOSE);
        angle += 0.0075;
    }
}

function scaleElement(currentWidth: number) {
    if (currentWidth > 1280) {
        return 400
    }

    if (currentWidth > 800) {
        return 350
    }
    return 300;
}

export default sketch;