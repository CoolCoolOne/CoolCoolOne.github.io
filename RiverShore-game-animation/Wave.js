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
    // get position() {
    //     return this.position;
    // }
    // set position(value) {
    //     this.position = value;
    // }


    appear(position, center) {
        noStroke();
        fill(50 + this.shade / 5, 50 + this.shade, 120 + this.shade,100);
        rectMode(CENTER);
        rect(position, center, this.pixelSize, 100 + this.tide, 5);
        //   this.position = position;
    }
    TellSize() {
        return this.pixelSize;
    }
    presetTrajectory(worldHidht, lenght) {
        let y_coord = [];
        let x_coord = [];

        let traject;

        for (let i = 0; i < lenght; i++) {
            x_coord[i]=i;
            y_coord[i] = Math.sin(i / 60) * 40 + worldHidht/2 -20;
            // traject[i][0]=;
        }
        return y_coord;
    }
}