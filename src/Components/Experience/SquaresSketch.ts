import p5 from "p5";
import RotatingSquare from "./RotatingSquare";


function sketch(p5: p5) {
    let squares: any = [];

    p5.setup = function () {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        for (let i = 0; i < 20; i++) {
            squares.push(new RotatingSquare(p5.random(p5.width),
                p5.random(p5.height), p5.random(50, 150), p5));
        }
    }

    p5.windowResized = function () {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.draw = function () {
        p5.clear();
        for (let square of squares) {
            square.update();
            square.display();
        }
    }
}

export default sketch;

