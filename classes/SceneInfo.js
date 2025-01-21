class SceneInfo extends Phaser.Scene {
    constructor() {
        super("info-level");
    }
    preload() {
        this.load.image('tutorialText', 'assets/img/tutorialText.png');
    }

    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-end.jpg');
        // Background canvas game setup
        const bg = this.add.image(0, 0, 'menu-end');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);

        //Setting tutorial text
        this.add.image(this.scale.width / 2, this.scale.height / 4 + 100, 'tutorialText').setScale(0.85);

        // setting button
        const Btns = [
            {
                name: 'nextBtn',
                x: this.scale.width / 2,
                y: this.scale.height / 2 + 250,
                visibility: true,
                action: () => {
                    this.scene.start('start-game');
                }
            }
        ];

        new Buttons(this, Btns);
        const nextBtn = this.nextBtn.setScale(1.25)
            .on('pointerdown', () => {
                nextBtn.setScale(1.15)
            })
        nextBtn.on('pointerup', () => {
            nextBtn.setScale(1.25)
        })
    }
}