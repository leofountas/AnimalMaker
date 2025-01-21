class SceneEndGame extends Phaser.Scene {
    constructor() {
        super('end-game')
    }

    preload() {
        this.load.image('trophy', 'assets/img/trophy.png');
        this.load.image('Y', 'assets/img/YouWinLetter1.png');
        this.load.image('O', 'assets/img/YouWinLetter2.png');
        this.load.image('U', 'assets/img/YouWinLetter3.png');
        this.load.image('W', 'assets/img/YouWinLetter4.png');
        this.load.image('I', 'assets/img/YouWinLetter5.png');
        this.load.image('N', 'assets/img/YouWinLetter6.png');
    }

    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-end.jpg');
        // Background canvas game setup
        const bg = this.add.image(0, 0, 'menu-end');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);
        // setting 'you win'
        // setting title letters
        const Letters = {
            1: [{
                name: 'Y',
                x: this.scale.width / 2 - this.scale.width / 2 + 120,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            }],
            2: [{
                name: 'U',
                x: this.scale.width / 2 - this.scale.width / 2 + 270,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'N',
                x: this.scale.width / 2 - this.scale.width / 2 + 555,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            }],
            3: [{
                name: 'O',
                x: this.scale.width / 2 - this.scale.width / 2 + 195,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'W',
                x: this.scale.width / 2 - this.scale.width / 2 + 395,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            }],
            4: [{
                name: 'I',
                x: this.scale.width / 2 - this.scale.width / 2 + 470,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            ],
        }
        // Create and animate each group of letter
        Object.keys(Letters).forEach((order, index) => {
            const group = Letters[order];

            group.forEach((letter) => {
                const image = this.add.image(letter.x, letter.y, letter.name).setScale(1.85);

                this.tweens.add({
                    targets: image,
                    y: letter.finaly,
                    ease: 'Sine.easeInOut',
                    delay: index * 150,

                });
            });
        });



        //setting trophy with animation
        this.trophy = this.add.image(this.scale.width / 2, this.scale.height / 4 + 190, 'trophy').setScale(0.75)

        this.tweens.add({
            targets: [this.congrats, this.trophy],
            scaleX: 0.95,
            scaleY: 0.95,
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
                    this.scene.start('menu-level');
                }
            }
        ];

        // Initialize buttons handling
        new Buttons(this, Btns);
        const homeBtn = this.homeBtn.setScale(1.25)
            .on('pointerdown', () => {
                homeBtn.setScale(1.15)
            })
        homeBtn.on('pointerup', () => {
            homeBtn.setScale(1.25)
        })

        //setting the more games link
        this.add.image(this.scale.width - 135, this.scale.height - 70, 'moregames')
            .setScale(0.75).
            setInteractive()
            .on('pointerdown', () => {
                window.open('https://www.orleansgames.com/controller/controller_landing.php', '_blank')
            });

    }

}
