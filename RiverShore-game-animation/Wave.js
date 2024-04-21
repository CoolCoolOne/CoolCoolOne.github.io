// ты можешь использовать этот appear
// только внутри метода p5js draw()
// потому что методы вложенных функций
// используют функции определённые только
// в упомянутом методе draw()
class Wave {
    constructor(size, shade, tide, initPosition) {
        this.shade = shade;
        this.pixelSize = 10 * size + size * 5;//волна предсказуема по масштабу!
        this.tide = tide;
        this.position = initPosition;
    }


    appear(positionAppear, center) {
        noStroke();
        stroke('Yellow');
        fill(50 + this.shade / 5, 50 + this.shade, 120 + this.shade);
        rectMode(CENTER);
        rect(positionAppear, center, this.pixelSize, 100 + this.tide, 5);
    }

    numeroWawoo(textContent, xCoord, yCoord) {
        fill('Yellow');
        textSize(yCoord/10);
        // rotateY(30);
        text(textContent, xCoord-this.pixelSize/7, yCoord);
    }

    presetTrajectory(worldHidht, lenght) {
        let y_coord = [];

        for (let i = 0; i < lenght; i++) {
            y_coord[i] = Math.sin(i / 60) * 40 + worldHidht/2 -20;
        }
        return y_coord;
    }
}