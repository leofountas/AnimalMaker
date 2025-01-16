class SceneLevelTwo extends Phaser.Scene {
    constructor() {
        super("level-two");
    }
    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-forest.png');
        //Setting audios/sounds
        this.correctSound = this.sound.add('Correct');
        this.wrongSound = this.sound.add('Wrong');
        this.introSound = this.sound.add('Intro');
        this.owlSound = this.sound.add('Owl');

        // Background setup
        const bg = this.add.image(0, 0, 'forest');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);


        this.owlshadow = this.add.image(this.scale.width / 2 + 80, this.scale.height / 4 + 50, 'owlshadow')
            .setScale(1.4)
            .setAlpha(0.5);

        // Create owl pieces with proper positioning
        this.owlPieces = [
            {
                name: 'owlhead',
                x: this.scale.width / 2 + 100,
                y: this.scale.height / 2 + 200
            },
            {
                name: 'owltail',
                x: this.scale.width / 2 - 160,
                y: this.scale.height / 2
            },
            {
                name: 'owlbody',
                x: this.scale.width / 2,
                y: this.scale.height / 10
            },
            {
                name: 'owlface',
                x: this.scale.width / 2,
                y: this.scale.height / 2
            },
            {
                name: 'owlwing',
                x: this.scale.width / 2 - 200,
                y: this.scale.height / 5 + 100
            },

            {
                name: 'owlclaw',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 400
            },
            {
                name: 'owlclaw',
                x: this.scale.width - this.scale.width + 300,
                y: this.scale.height - 340
            }
        ].map(piece =>
            this.add.image(piece.x, piece.y, piece.name)
                .setScale(0.3)
                .setName(piece.name)
                .setDepth(1)
        );

        // Define drop zones with proper layering
        const owlZones = [
            {
                name: 'owlbody',
                x: this.scale.width / 2 + 75,
                y: this.scale.height / 4 + 75,
                width: 198.3,
                height: 152.1,
                depth: 0
            },
            {
                name: 'owlclaw',
                x: this.scale.width / 2 + 30,
                y: this.scale.height / 4 + 158,
                width: 62.4,
                height: 37.5,
                depth: 0
            },
            {
                name: 'owlclaw',
                x: this.scale.width / 2 + 99,
                y: this.scale.height / 4 + 158,
                width: 63,
                height: 37.5,
                depth: 0
            },
            {
                name: 'owltail',
                x: this.scale.width / 2 + 140,
                y: this.scale.height / 4 + 142,
                width: 66.3,
                height: 70.8,
                depth: 0
            },
            {
                name: 'owlwing',
                x: this.scale.width / 2 + 142,
                y: this.scale.height / 4 + 72,
                width: 87.6,
                height: 105.3,
                depth: 0
            },
            {
                name: 'owlhead',
                x: this.scale.width / 2 + 59,
                y: this.scale.height / 4 - 20,
                width: 159.9,
                height: 114.6,
                depth: 0
            },
            {
                name: 'owlface',
                x: this.scale.width / 2 + 59,
                y: this.scale.height / 4,
                width: 165.6,
                height: 92.4,
                depth: 0
            }
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
        // owlZones.forEach(zone => {
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
                    this.scene.start('level-three');
                    this.correctSound.stop();
                    this.introSound.stop();
                    this.owlSound.stop();
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
                    this.owlSound.stop();
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
                    this.owlSound.stop();
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
        new Drag(this, this.owlPieces, owlZones);
        // Initialize  ending animation handling
        this.owlAnimated = false;
    }

    update() {
        if (this.score === 7 && !this.win) {
            this.correctSound.stop();
            this.owlshadow.setAlpha(0);
            this.owlSound.once('complete', () => {
                this.introSound.play();
            });
            this.nextBtn.setVisible(true);
            this.owlSound.play();
            this.win = true;

            // Trigger the animation once the owl is complete
            if (!this.owlAnimated) {
                this.owlAnimated = true;
                new Animation(this, this.owlPieces);

            }
        }
    }
}