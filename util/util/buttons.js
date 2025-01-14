class Buttons {
    constructor(scene, Btns) {
        this.scene = scene;
        Btns.map(btn => {
            let button;
            if (btn.name !== 'musicBtn') {
                button = this.scene.add.sprite(btn.x, btn.y, btn.name, 0)
                    .setScale(0.2)
                    .setInteractive()
                    .on('pointerover', () => {
                        button.setScale(0.25);
                    })
                    .on('pointerout', () => {
                        button.setScale(0.2);
                    })
                    .on('pointerdown', () => {
                        button.setFrame(1);
                    })
                    .on('pointerup', () => {
                        button.setFrame(0);
                        btn.action();
                    });

                // Initialize variables for each button created to use after in the update
                this.scene[btn.name] = button;
            } else {
                let initialFrame = this.scene.sound.mute ? 1 : 0;

                button = this.scene.add.sprite(btn.x, btn.y, btn.name, initialFrame)
                    .setScale(0.2)
                    .setInteractive()
                    .on('pointerover', () => {
                        button.setScale(0.25);
                    })
                    .on('pointerout', () => {
                        button.setScale(0.2);
                    })
                    .on('pointerdown', () => {

                        if (button.frame.name === 0) {
                            button.setFrame(1);
                            btn.action();
                        } else {
                            button.setFrame(0);
                            btn.action();
                        }
                    });
            }

            button.setVisible(btn.visibility);
        });
    }
}