class SceneEndGame extends Phaser.Scene {
    constructor() {
        super('end-game')
    }

    preload() {
        this.load.image('menu-end', 'assets/img/menu-end.png');
        this.load.image('congrats', 'assets/img/congrats.png');
        this.load.image('trophy', 'assets/img/trophy.png');
    }

    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-end.jpg');
        // Background canvas game setup
        const bg = this.add.image(0, 0, 'menu-end');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);

        //setting congrats and trophy with animation
        this.congrats = this.add.image(this.scale.width / 2, this.scale.height / 4, 'congrats');

        this.trophy = this.add.image(this.scale.width / 2, this.scale.height / 4 + 140, 'trophy').setScale(0.75)

        this.tweens.add({
            targets: [this.congrats, this.trophy],
            scaleX: 1.5,
            scaleY: 1.5,
            angle: 5,
            yoyo: true,
            repeat: 10,
            duration: 300,
            ease: 'Sine.easeInOut'
        });
        // setting fireworks to both sides
        this.fireworks = new FireWorks(this, this.scale.width - this.scale.width, this.scale.height / 4);
        this.fireworks2 = new FireWorks(this, this.scale.width, this.scale.height / 4)

        this.fireworks.action();
        this.fireworks2.action();

        //Buttons setup
        const Btns = [
            {
                name: 'homeBtn',
                x: this.scale.width / 2,
                y: this.scale.height / 2 + 200,
                visibility: true,
                action: () => {
                    // this.scene.start('menu-level');
                }
            }
        ];

        // Initialize buttons handling
        new Buttons(this, Btns);

    }

}
