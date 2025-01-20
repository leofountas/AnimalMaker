class SceneStartgame extends Phaser.Scene {
    constructor() {
        super("start-game");
    }
    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-desert.png');
        //Setting audios/sounds
        this.correctSound = this.sound.add('Correct');
        this.wrongSound = this.sound.add('Wrong');
        this.introSound = this.sound.add('Intro');
        this.snakeSound = this.sound.add('Snake');

        // Background canvas game setup
        const bg = this.add.image(0, 0, 'desert');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);


        this.snakeshadow = this.add.image(this.scale.width / 2, this.scale.height / 2, 'snakeshadow')
            .setScale(1.4)
            .setAlpha(0.5);

        // Create snake pieces with proper positioning
        this.snakePieces = [
            {
                name: 'snakeneck',
                x: this.scale.width - 100,
                y: this.scale.height / 4 + 200
            },
            {
                name: 'snakehead',
                x: this.scale.width / 2,
                y: this.scale.height / 10
            },
            {
                name: 'snaketail',
                x: this.scale.width - 100,
                y: this.scale.height - 300
            },
            {
                name: 'snakebody1',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height / 5 + 100
            },
            {
                name: 'snakebody2',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 300
            }
        ].map(piece =>
            this.add.image(piece.x, piece.y, piece.name)
                .setScale(0.3)
                .setName(piece.name)
                .setDepth(1)
        );

        // Define drop zones with proper layering
        const snakeZones = [
            {
                name: 'snakebody2',
                x: this.scale.width / 2 - 20,
                y: this.scale.height / 2 + 60,
                width: 271.2,
                height: 90.3,
                depth: 0
            },
            {
                name: 'snakehead',
                x: this.scale.width / 2 - 90,
                y: this.scale.height / 2 - 116,
                width: 167.4,
                height: 106.8,
                depth: 0
            },
            {
                name: 'snakeneck',
                x: this.scale.width / 2 - 47,
                y: this.scale.height / 2 - 50,
                width: 86.7,
                height: 241.5,
                depth: 0
            },
            {
                name: 'snakebody1',
                x: this.scale.width / 2 - 10,
                y: this.scale.height / 2 + 122,
                width: 315,
                height: 111.3,
                depth: 0
            },
            {
                name: 'snaketail',
                x: this.scale.width / 2 + 136,
                y: this.scale.height / 2 + 74,
                width: 135.9,
                height: 173.4,
                depth: 0
            },

        ].map(zoneData => {
            const zone = this.add.zone(zoneData.x, zoneData.y, zoneData.width, zoneData.height)
                .setRectangleDropZone(zoneData.width, zoneData.height)
                .setName(zoneData.name)
                .setDepth(zoneData.depth);
            return zone;
        });

        // Debug graphics for drop zones - active this if u want to have a visual of the drop zones
        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0x00ff00);
        // snakeZones.forEach(zone => {
        //     graphics.strokeRect(
        //         zone.x - zone.input.hitArea.width / 2,
        //         zone.y - zone.input.hitArea.height / 2,
        //         zone.input.hitArea.width,
        //         zone.input.hitArea.height
        //     );
        // });

        //Buttons setup
        const Btns = [
            {
                name: 'nextBtn',
                x: this.scale.width - 60,
                y: this.scale.height - 70,
                visibility: false,
                action: () => {
                    this.scene.start("level-two");
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.snakeSound.stop();
                }
            },
            {
                name: 'homeBtn',
                x: this.scale.width - this.scale.width + 240,
                y: this.scale.height - 69,
                visibility: true,
                action: () => {
                    // this.scene.start('');
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.snakeSound.stop();
                }
            },
            {
                name: 'musicBtn',
                x: this.scale.width - 220,
                y: this.scale.height - 70,
                visibility: true,
                action: () => {
                    if (this.game.sound.mute === false) {
                        this.game.sound.mute = true;

                    } else {
                        game.sound.mute = false;

                    }
                }
            },
            {
                name: 'restartBtn',
                x: this.scale.width - this.scale.width + 60,
                y: this.scale.height - 70,
                visibility: true,
                action: () => {
                    this.score = 0;
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.wrongSound.stop();
                    this.snakeSound.stop();
                    this.scene.restart();
                }
            }
        ];

        // Initialize buttons handling
        new Buttons(this, Btns);
        // Initialize  score handling
        this.score = 0;
        this.win = false;
        // Initialize drag handling
        new Drag(this, this.snakePieces, snakeZones);
        // Initialize  ending animation handling
        this.snakeAnimated = false;
        // Initialize texture and fire work effect for end game
        this.fireworks = new FireWorks(this, this.scale.width / 2, this.scale.height / 2 + 40);
    }

    update() {
        if (this.score === 5 && !this.win) {
            this.correctSound.stop();
            this.snakeshadow.setAlpha(0);
            this.snakeSound.once('complete', () => {
                this.introSound.play();
                this.fireworks.action();

            });
            this.nextBtn.setVisible(true);
            this.snakeSound.play();
            this.win = true;

            // Trigger the animation once the snake is complete
            if (!this.snakeAnimated) {
                this.snakeAnimated = true;
                new Animation(this, this.snakePieces);

            }
        }
    }
}