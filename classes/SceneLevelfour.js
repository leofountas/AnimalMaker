class SceneLevelFour extends Phaser.Scene {
    constructor() {
        super("level-four");
    }
    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-savana.png');
        //Setting audios/sounds
        this.correctSound = this.sound.add('Correct');
        this.wrongSound = this.sound.add('Wrong');
        this.introSound = this.sound.add('Intro');
        this.elephantSound = this.sound.add('Elephant');

        // Background setup
        const bg = this.add.image(0, 0, 'savana');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);


        this.elephantshadow = this.add.image(this.scale.width / 2, this.scale.height / 2, 'elephantshadow')
            .setScale(1.4)
            .setAlpha(0.5);

        // Create orangutan pieces with proper positioning
        this.elephantPieces = [
            {
                name: 'elephantleg1',
                x: this.scale.width - 100,
                y: this.scale.height - 300
            },
            {
                name: 'elephantleg2',
                x: this.scale.width - 100,
                y: this.scale.height / 10 + 100
            },
            {
                name: 'elephantleg3',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - 280
            },
            {
                name: 'elephantleg4',
                x: this.scale.width - 100,
                y: this.scale.height / 10,
            },
            {
                name: 'elephantbody',
                x: this.scale.width / 2,
                y: this.scale.height / 10 + 20,
            },
            {
                name: 'elephanttrunk',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 300
            },
            {
                name: 'elephanthead',
                x: this.scale.width - 100,
                y: this.scale.height / 4 + 140
            },
            {
                name: 'elephanttail',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - this.scale.height + 160
            },
            {
                name: 'elephantear',
                x: this.scale.width - this.scale.width + 100,
                y: this.scale.height - this.scale.height + 80
            },
            {
                name: 'elephanthorn',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 300
            },
        ].map(piece =>
            this.add.image(piece.x, piece.y, piece.name)
                .setScale(0.3)
                .setName(piece.name)
                .setDepth(1)
        );

        // Define drop zones with proper layering
        const elephantZones = [
            {
                name: 'elephantear',
                x: this.scale.width / 2 + 17,
                y: this.scale.height / 2 - 53,
                width: 126.9,
                height: 201,
                depth: 0
            },
            {
                name: 'elephanthead',
                x: this.scale.width / 2 + 100,
                y: this.scale.height / 2 - 37,
                width: 194.7,
                height: 199.2,
                depth: 0
            },
            {
                name: 'elephanthorn',
                x: this.scale.width / 2 + 184,
                y: this.scale.height / 2 + 2,
                width: 110.1,
                height: 69,
                depth: 0
            },
            {
                name: 'elephantbody',
                x: this.scale.width / 2 - 65,
                y: this.scale.height / 2,
                width: 271.8,
                height: 206.1,
                depth: 0
            },
            {
                name: 'elephanttail',
                x: this.scale.width / 4 - 45,
                y: this.scale.height / 2 + 4,
                width: 43.8,
                height: 70.8,
                depth: 0
            },
            {
                name: 'elephantleg4',
                x: this.scale.width / 2 + 15,
                y: this.scale.height / 2 + 95,
                width: 112.2,
                height: 126.6,
                depth: 0
            },
            {
                name: 'elephantleg2',
                x: this.scale.width / 2 - 12,
                y: this.scale.height / 2 + 95,
                width: 90.9,
                height: 121.2,
                depth: 0
            },
            {
                name: 'elephantleg3',
                x: this.scale.width / 2 - 136,
                y: this.scale.height / 2 + 87,
                width: 118.5,
                height: 138,
                depth: 0
            },
            {
                name: 'elephantleg1',
                x: this.scale.width / 2 - 163,
                y: this.scale.height / 2 + 75,
                width: 74.1,
                height: 165.3,
                depth: 0
            },
            {
                name: 'elephanttrunk',
                x: this.scale.width / 2 + 150,
                y: this.scale.height / 2 + 66,
                width: 105.6,
                height: 162.3,
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
        // elephantZones.forEach(zone => {
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
                y: this.scale.height - 60,
                visibility: false,
                action: () => {
                    this.scene.start('level-five');
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.elephantSound.stop();
                }
            },
            {
                name: 'homeBtn',
                x: this.scale.width - this.scale.width + 240,
                y: this.scale.height - 60,
                visibility: true,
                action: () => {
                    // this.scene.start('');
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.elephantSound.stop();
                }
            },
            {
                name: 'musicBtn',
                x: this.scale.width - 220,
                y: this.scale.height - 60,
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
                y: this.scale.height - 60,
                visibility: true,
                action: () => {
                    this.score = 0;
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.wrongSound.stop();
                    this.elephantSound.stop();
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
        new Drag(this, this.elephantPieces, elephantZones);
        // Initialize  ending animation handling
        this.elephantAnimated = false;
    }

    update() {
        if (this.score === 10 && !this.win) {
            this.correctSound.stop();
            this.elephantshadow.setAlpha(0);
            this.elephantSound.once('complete', () => {
                this.introSound.play();
            });
            this.nextBtn.setVisible(true);
            this.elephantSound.play();
            this.win = true;

            // Trigger the animation once the elephant is complete
            if (!this.elephantAnimated) {
                this.elephantAnimated = true;
                new Animation(this, this.elephantPieces);

            }
        }
    }
}