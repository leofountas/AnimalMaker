class Drag {
    constructor(scene, gameObjects, dropZones) {
        this.scene = scene;
        this.dropZones = dropZones;

        gameObjects.forEach(gameObject => {
            this.setupDraggable(gameObject);
        });
    }

    setupDraggable(gameObject) {
        gameObject
            .setInteractive({ draggable: true })
            .on('drag', (pointer, dragX, dragY) => {
                gameObject.x = dragX;
                gameObject.y = dragY;
            })
            .on('pointerover', () => {
                this.scene.sys.game.canvas.style.cursor = "pointer";
            })
            .on('pointerout', () => {
                this.scene.sys.game.canvas.style.cursor = "default";
            })
            .on('dragend', () => {
                // Find valid drop zone
                const validZone = this.findValidDropZone(gameObject);
                if (validZone) {
                    this.handleDrop(gameObject, validZone);
                    this.scene.correctSound.stop();
                    this.scene.correctSound.play();
                    this.scene.score++
                } else {
                    // Reset position if no valid zone found
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                    this.scene.wrongSound.stop();
                    this.scene.wrongSound.play();
                }

            });
    }
    findValidDropZone(gameObject) {
        // Find zones where the piece's position overlaps with the zone's hitArea
        const overlappingZones = this.dropZones.filter(zone => {
            return zone.input.hitArea.contains(gameObject.x - zone.x + zone.input.hitArea.width / 2,
                gameObject.y - zone.y + zone.input.hitArea.height / 2);
        });

        // Return the zone that matches the piece's name
        return overlappingZones.find(zone => zone.name === gameObject.name);
    }

    handleDrop(gameObject, dropZone) {
        if (dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            this.scene.sys.game.canvas.style.cursor = "default";

        }
    }
}