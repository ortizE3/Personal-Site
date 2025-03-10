import p5 from "p5";

function sketch(p5: p5) {
    let r = 10;
    let a = 0;
    let c = 20;
    let angle = 0;
    let radius = 300;
    let art: any;
    let gradientCircles = 10;
    let gradColors = [
        "006ba6", "0496ff", "ffbc42", "d81159", "8f2d56", "006ba6"
    ];
    let colors: any = [];
    p5.setup = function () {
        p5.createCanvas(p5.windowWidth - 50, p5.windowHeight - 50, p5.WEBGL);
        art = p5.createGraphics(400, 400);
        setupColors();
    }

    p5.windowResized = function () {
        p5.resizeCanvas(p5.windowWidth - 50, p5.windowHeight - 50);
    }

    p5.draw = function () {
        p5.clear();

        p5.push();
        art.clear();

        for (let j = 0; j < radius; j += 10) {
            for (let i = 0; i < p5.TWO_PI; i += 1) {
                let x = p5.tan(i + angle - j + i) * 200 * p5.cos(angle - j - i);
                let y = p5.cos(i - angle + j - i) * 200 * p5.cos(angle + j + i);

                art.push();
                art.noStroke();
                art.fill(`${colors[p5.floor(angle + i + j) % colors.length]}`);
                art.translate(x + 200, y + 200);
                art.rotate(angle + i * 5 + j);
                art.circle(0, 0, 10 * p5.cos(angle * 5 + i + j));
                art.pop();
                c += 0.2;
            }
            r += 0.1;
        }

        a += 0.008;
        p5.pop();

        p5.push();
        p5.texture(art);

        p5.rotateX(angle);
        p5.rotateY(angle);
        p5.rotateZ(angle + 5);
        p5.box(radius, radius);
        p5.pop();

        angle += 0.008;
    }

    function setupColors() {
        let count = 0;
        for (let i = 0; i < gradColors.length - 1; i++) {
            for (var j = 0; j < gradientCircles; j++) {
                let mappedValue = p5.map(j, 0, gradientCircles, 0, 1);
                let c = p5.lerpColor(
                    p5.color(`#${gradColors[i]}`),
                    p5.color(`#${gradColors[i + 1]}`),
                    mappedValue
                );
                colors[count] = c;
                count++;
            }
        }
        count = 0;
    }
}

export default sketch;