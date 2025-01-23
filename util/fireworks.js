class FireWorks {
    constructor(scene, x, y) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.emitter = null;

        const graphics = this.scene.add.graphics();
        graphics.fillStyle(0xFFFFFF);
        graphics.fillCircle(10, 10, 10);
        graphics.generateTexture('flares', 10, 10);
        this.emitter = this.scene.add.particles(x, y, 'flares', {
            lifespan: 4000,
            speed: { min: 150, max: 250 },
            scale: { start: 1, end: 0 },
            gravityY: 100,
            tint: [0xFF0000, 0xFFFF00, 0x00FF00, 0x0000FF],
            emitting: false
        });
    }

    action() {
        this.emitter.emitting = true
    }
}
