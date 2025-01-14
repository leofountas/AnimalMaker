class Animation {
    constructor(scene, pieces) {
        this.scene = scene
        // Animate each piece of the snake with slight delays
        pieces.forEach((piece, index) => {
            this.scene.tweens.add({
                targets: piece,
                y: piece.y - 10,
                yoyo: true,
                repeat: 2,
                duration: 300 + index * 100,
                ease: 'Sine.easeInOut'
            });

            this.scene.tweens.add({
                targets: piece,
                angle: 10,
                yoyo: true,
                repeat: 2,
                duration: 300 + index * 100,
                ease: 'Sine.easeInOut'
            });
        });
    }
}
