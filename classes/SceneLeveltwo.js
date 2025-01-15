class SceneLeveltwo extends Phaser.Scene {
    constructor() {
        super("level-two");
    }

    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-savana.png');
        //Setting audios/sounds
        this.correctSound = this.sound.add('Correct');
        this.wrongSound = this.sound.add('Wrong');
        this.introSound = this.sound.add('Intro');
        this.owlSound = this.sound.add('Owl');

        // Background setup
        const bg = this.add.image(0, 0, 'forest');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);


        this.owlshadow = this.add.image(this.scale.width / 2, this.scale.height / 2, 'lionshadow')
            .setScale(1.4)
            .setAlpha(0.5);

        // Create snake pieces with proper positioning
        this.owlPieces = [
            {
                name: 'owlbody',
                x: this.scale.width / 2,
                y: this.scale.height / 10
            },
            {
                name: 'owlhead',
                x: this.scale.width - 100,
                y: this.scale.height / 4 + 200
            },

            {
                name: 'owlface',
                x: this.scale.width - 100,
                y: this.scale.height - 300
            },
            {
                name: 'owlwing',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height / 5 + 100
            },
            {
                name: 'owltail',
                x: this.scale.width - this.scale.width + 240,
                y: this.scale.height / 5 + 140
            },
            {
                name: 'owlclaw1',
                x: this.scale.width - this.scale.width + 200,
                y: this.scale.height - 400
            },
            {
                name: 'owlclaw2',
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
                x: this.scale.width / 2 - 48,
                y: this.scale.height / 2 - 40,
                width: 301.5,
                height: 245.1,
                depth: 0
            },
            {
                name: 'owlclaw2',
                x: this.scale.width / 2 - 45,
                y: this.scale.height / 2 - 13,
                width: 169.8,
                height: 133.2,
                depth: 0
            },
            {
                name: 'owlclaw1',
                x: this.scale.width / 2 + 115,
                y: this.scale.height / 2 + 48,
                width: 120.3,
                height: 107.7,
                depth: 0
            },
            {
                name: 'owltail',
                x: this.scale.width / 2 - 128,
                y: this.scale.height / 2 - 78,
                width: 61.2,
                height: 55.5,
                depth: 0
            },
            {
                name: 'owlwing',
                x: this.scale.width / 2 + 32,
                y: this.scale.height / 2 - 90,
                width: 63.9,
                height: 48.9,
                depth: 0
            },
            {
                name: 'owlhead',
                x: this.scale.width / 2 - 20,
                y: this.scale.height / 2 + 80,
                width: 119.4,
                height: 49.2,
                depth: 0
            },
            {
                name: 'owlface',
                x: this.scale.width / 2 - 132,
                y: this.scale.height / 2 + 80,
                width: 58.8,
                height: 40.5,
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