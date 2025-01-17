class SceneLevelFive extends Phaser.Scene {
    constructor() {
        super("level-five");
    }
    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-jungle.png');
        //Setting audios/sounds
        this.correctSound = this.sound.add('Correct');
        this.wrongSound = this.sound.add('Wrong');
        this.introSound = this.sound.add('Intro');
        this.orangutanSound = this.sound.add('Orangutan');

        // Background setup
        const bg = this.add.image(0, 0, 'jungle');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);


        this.orangutanshadow = this.add.image(this.scale.width / 2, this.scale.height / 2, 'orangutanshadow')
            .setScale(1.4)
            .setAlpha(0.5);

        // Create orangutan pieces with proper positioning
        this.orangutanPieces = [
            {
                name: 'orangutanbody',
                x: this.scale.width / 2,
                y: this.scale.height / 10 + 20,
            },
            {
                name: 'orangutanarm1',
                x: this.scale.width - 100,
                y: this.scale.height / 4 + 200
            },

            {
                name: 'orangutanarm2',
                x: this.scale.width - 100,
                y: this.scale.height - 300
            },

            {
                name: 'orangutanshoulder1',
                x: this.scale.width - 100,
                y: this.scale.height / 10 + 100
            },
            {
                name: 'orangutanshoulder2',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - 280
            },
            {
                name: 'orangutanbelly',
                x: this.scale.width - 100,
                y: this.scale.height / 10,
            },
            {
                name: 'orangutanhand1',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - this.scale.height + 160
            },
            {
                name: 'orangutanhand2',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - this.scale.height + 80
            },
            {
                name: 'orangutanleg1',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 300
            },
            {
                name: 'orangutanleg2',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 300
            },
            {
                name: 'orangutanfeet1',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height / 2
            },
            {
                name: 'orangutanfeet2',
                x: this.scale.width - this.scale.width + 40,
                y: this.scale.height / 2 + 40
            },
            {
                name: 'orangutanhead',
                x: this.scale.width - this.scale.width + 90,
                y: this.scale.height / 5 + 100
            },
            {
                name: 'orangutaneyes',
                x: this.scale.width / 2,
                y: this.scale.height / 4 + 100
            },
            {
                name: 'orangutanmounth',
                x: this.scale.width / 2 + 30,
                y: this.scale.height - 200
            },

        ].map(piece =>
            this.add.image(piece.x, piece.y, piece.name)
                .setScale(0.3)
                .setName(piece.name)
                .setDepth(1)
        );

        // Define drop zones with proper layering
        const orangutanZones = [
            {
                name: 'orangutanhead',
                x: this.scale.width / 2 + 18,
                y: this.scale.height / 2 - 66,
                width: 179.4,
                height: 222,
                depth: 0
            },
            {
                name: 'orangutanmounth',
                x: this.scale.width / 2 + 20,
                y: this.scale.height / 2 - 21,
                width: 155.7,
                height: 143.1,
                depth: 0
            },
            {
                name: 'orangutaneyes',
                x: this.scale.width / 2 + 16,
                y: this.scale.height / 2 - 80,
                width: 110.1,
                height: 69,
                depth: 0
            },
            {
                name: 'orangutanshoulder2',
                x: this.scale.width / 2 - 79,
                y: this.scale.height / 2 - 125,
                width: 133.5,
                height: 154.5,
                depth: 0
            },
            {
                name: 'orangutanshoulder1',
                x: this.scale.width / 2 + 120,
                y: this.scale.height / 2 + 50,
                width: 188.1,
                height: 170.4,
                depth: 0
            },
            {
                name: 'orangutanarm2',
                x: this.scale.width / 2 - 120,
                y: this.scale.height / 2 - 140,
                width: 177.9,
                height: 315,
                depth: 0
            },
            {
                name: 'orangutanarm1',
                x: this.scale.width / 2 + 106,
                y: this.scale.height / 2 + 154,
                width: 207,
                height: 314.4,
                depth: 0
            },
            {
                name: 'orangutanbelly',
                x: this.scale.width / 2 - 54,
                y: this.scale.height / 2 + 124,
                width: 165.9,
                height: 181.8,
                depth: 0
            },
            {
                name: 'orangutanleg2',
                x: this.scale.width / 2 - 9,
                y: this.scale.height / 2 + 220,
                width: 132.9,
                height: 101.4,
                depth: 0
            },
            {
                name: 'orangutanleg1',
                x: this.scale.width / 2 - 174,
                y: this.scale.height / 2 + 128,
                width: 75.3,
                height: 145.5,
                depth: 0
            },
            {
                name: 'orangutanbody',
                x: this.scale.width / 2 - 42,
                y: this.scale.height / 2 + 80,
                width: 251.1,
                height: 299.7,
                depth: 0
            },
            {
                name: 'orangutanfeet2',
                x: this.scale.width / 2 - 62,
                y: this.scale.height / 2 + 266,
                width: 78,
                height: 76.2,
                depth: 0
            },
            {
                name: 'orangutanfeet1',
                x: this.scale.width / 2 - 160,
                y: this.scale.height / 2 + 220,
                width: 69.3,
                height: 84.3,
                depth: 0
            },
            {
                name: 'orangutanhand2',
                x: this.scale.width / 2 + 60,
                y: this.scale.height / 2 + 320,
                width: 78,
                height: 76.2,
                depth: 0
            },
            {
                name: 'orangutanhand1',
                x: this.scale.width / 2 - 102,
                y: this.scale.height / 2 - 312,
                width: 72,
                height: 80.1,
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
        // orangutanZones.forEach(zone => {
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
                    // this.scene.start('');
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
                    this.orangutanSound.stop();
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
                    this.orangutanSound.stop();
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
        new Drag(this, this.orangutanPieces, orangutanZones);
        // Initialize  ending animation handling
        this.orangutanAnimated = false;
        // Initialize texture and fire work effect for end game
        this.fireworks = new FireWorks(this, this.scale.width / 2, this.scale.height / 2);
    }

    update() {
        if (this.score === 15 && !this.win) {
            this.correctSound.stop();
            this.orangutanshadow.setAlpha(0);
            this.orangutanSound.once('complete', () => {
                this.introSound.play();
                this.fireworks.action()
            });
            this.nextBtn.setVisible(true);
            this.orangutanSound.play();
            this.win = true;

            // Trigger the animation once the orangutan is complete
            if (!this.orangutanAnimated) {
                this.orangutanAnimated = true;
                new Animation(this, this.orangutanPieces);

            }
        }
    }
}