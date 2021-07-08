class DrDouche {
    constructor() {

        this.currentImageIndex = 0;

        this.possibleImagePaths = [
            "1.svg",
            "2.svg",
            "3.svg",
            "4.svg",
            "5.svg",
        ];
    }

    getRandomImagePath() {
        let randomNumber = 0;
        this.currentImageIndex = randomNumber;
        return this.possibleImagePaths[this.currentImageIndex];
    }

    getNextImagePath() {
        this.currentImageIndex++;
        if (this.currentImageIndex > this.possibleImagePaths.length - 1) {
            this.currentImageIndex = 0;
        }

        return this.possibleImagePaths[this.currentImageIndex];
    }
}