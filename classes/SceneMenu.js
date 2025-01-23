class SceneMenu extends Phaser.Scene {
    constructor() {
        super("menu-level");
    }
    preload() {
        this.load.image('A', 'assets/img/TitleLetter_A.png');
        this.load.image('N', 'assets/img/TitleLetter_N.png');
        this.load.image('I', 'assets/img/TitleLetter_I.png');
        this.load.image('M', 'assets/img/TitleLetter_M.png');
        this.load.image('A2', 'assets/img/TitleLetter_A2.png');
        this.load.image('L', 'assets/img/TitleLetter_L.png');
        this.load.image('M2', 'assets/img/TitleLetter_M2.png');
        this.load.image('K', 'assets/img/TitleLetter_K.png');
        this.load.image('E', 'assets/img/TitleLetter_E.png');
        this.load.image('R', 'assets/img/TitleLetter_R.png');
    }
    create() {
        window.addEventListener('resize', () => {
            console.log('Window width:', window.innerWidth);
            console.log('Window height:', window.innerHeight);
        });
        //Our github profiles
        const link = 'https://github.com/leofountas';
        const link2 = 'https://github.com/MaximeBastien04'
        console.log(`Author of the game: ${link}`);
        console.log(`Title design: ${link2}`);
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-end.jpg');
        // Background canvas game setup
        const bg = this.add.image(0, 0, 'menu-end');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);

        // setting title letters
        const Letters = {
            1: [{
                name: 'A',
                x: this.scale.width / 2 - this.scale.width / 2 + 130,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            }],
            2: [{
                name: 'A2',
                x: this.scale.width / 2 - this.scale.width / 2 + 460,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'K',
                x: this.scale.width / 2 - this.scale.width / 2 + 340,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4 + 120,
            }],
            3: [{
                name: 'I',
                x: this.scale.width / 2 - this.scale.width / 2 + 300,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'M2',
                x: this.scale.width / 2 - this.scale.width / 2 + 180,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4 + 120,
            }],
            4: [{
                name: 'M',
                x: this.scale.width / 2 - this.scale.width / 2 + 375,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'R',
                x: this.scale.width / 2 - this.scale.width / 2 + 490,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4 + 120,
            }],
            5: [{
                name: 'L',
                x: this.scale.width / 2 - this.scale.width / 2 + 535,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'A',
                x: this.scale.width / 2 - this.scale.width / 2 + 255,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4 + 120,
            }],
            6: [{
                name: 'N',
                x: this.scale.width / 2 - this.scale.width / 2 + 215,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4,
            },
            {
                name: 'E',
                x: this.scale.width / 2 - this.scale.width / 2 + 405,
                y: this.scale.height - this.scale.height - 100,
                finaly: this.scale.height / 4 + 120,
            }],
        }
        // Create and animate each group of letter
        Object.keys(Letters).forEach((order, index) => {
            const group = Letters[order];

            group.forEach((letter) => {
                const image = this.add.image(letter.x, letter.y, letter.name).setScale(1.95);

                this.tweens.add({
                    targets: image,
                    y: letter.finaly,
                    ease: 'Sine.easeInOut',
                    delay: index * 150,

                });
            });
        });


        // setting play button
        const Btns = [
            {
                name: 'playBtn',
                x: this.scale.width / 2,
                y: this.scale.height / 2 + 200,
                visibility: true,
                action: () => {
                    this.scene.start('info-level');
                }
            }
        ];

        new Buttons(this, Btns);

        //setting the more games link
        this.add.image(this.scale.width - 135, this.scale.height - 70, 'moregames')
            .setScale(0.75).
            setInteractive()
            .on('pointerdown', () => {
                window.open('https://www.orleansgames.com/controller/controller_landing.php', '_blank')
            });


    }
}