class Buttons {
    constructor(scene, Btns) {
        this.scene = scene;
        Btns.map(btn => {
            let button;
            if (btn.name !== 'musicBtn') {
                button = this.scene.add.image(btn.x, btn.y, btn.name)
                    .setScale(0.45)
                    .setInteractive()
                    .on('pointerdown', () => {
                        button.setScale(0.35);

                    })
                    .on('pointerup', () => {
                        btn.action();
                        button.setScale(0.45)
                    });

                // Initialize variables for each button created to use after in the update
                this.scene[btn.name] = button;
            } else {
                let initialFrame = this.scene.sound.mute ? 1 : 0;

                button = this.scene.add.sprite(btn.x, btn.y, btn.name, initialFrame)
                    .setScale(0.45)
                    .setInteractive()
                    .on('pointerdown', () => {
                        button.setScale(0.35);
                        if (button.frame.name === 0) {
                            button.setFrame(1);
                            btn.action();
                        } else {
                            button.setFrame(0);
                            btn.action();
                        }

                    })
                    .on('pointerup', () => {
                        button.setScale(0.45)
                    });
            }

            button.setVisible(btn.visibility);
        });
    }
}