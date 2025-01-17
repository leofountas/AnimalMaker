// ****************************** Scene Preload ***************************
class ScenePreload extends Phaser.Scene {
    constructor() {
        super("preload"); //here is the name to use when calling this scene, see the launch of the scene caramel later
    }

    preload() {
        //here is a loading bar made to inform the player, keep it, it's cool and useful
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        let height = this.scale.height;
        let width = this.scale.width;
        progressBox.fillStyle(0x444444, 0.8);
        progressBox.fillRect(width / 2 - 180, height / 2, 360, 50);

        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...(77redman77)',
            style: {
                font: '25px monospace',
                color: '#ffffff',
                align: 'center'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 180, height / 2, 360 * value, 50);
        });


        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();

        });

        ///////////////// IMAGES LOADING /////////////////////
        //---------------scene caramel-----------------
        this.load.image('caramel', 'assets/img/caramel1.png');
        //---------------buttons-----------------
        this.load.image('nextBtn', 'assets/img/nextBtn.png');
        this.load.image('restartBtn', 'assets/img/restartBtn.png');
        this.load.image('homeBtn', 'assets/img/homeBtn.png');
        this.load.spritesheet('musicBtn', 'assets/img/musicBtn.png', {
            frameWidth: 299,
            frameHeight: 320,
        });
        //---------------snake level-----------------
        this.load.image('desert', 'assets/img/desert.png');
        this.load.image('snakebody1', 'assets/img/snake-body1.png');
        this.load.image('snakebody2', 'assets/img/snake-body2.png');
        this.load.image('snakehead', 'assets/img/snake-head.png');
        this.load.image('snakeneck', 'assets/img/snake-neck.png');
        this.load.image('snaketail', 'assets/img/snake-tail.png');
        this.load.image('snakeshadow', 'assets/img/snake-shadow.png');
        //---------------lion level-----------------
        this.load.image('savana', 'assets/img/savana.png');
        this.load.image('lionshadow', 'assets/img/lion-shadow.png');
        this.load.image('lionface', 'assets/img/lion-face.png');
        this.load.image('lionmane', 'assets/img/lion-mane.png');
        this.load.image('lionear1', 'assets/img/lion-ear1.png');
        this.load.image('lionear2', 'assets/img/lion-ear2.png');
        this.load.image('liontail', 'assets/img/lion-tail.png');
        this.load.image('lionback', 'assets/img/lion-back.png');
        this.load.image('lionendtail', 'assets/img/lion-endtail.png');
        this.load.image('lionpaw1', 'assets/img/lion-paw1.png');
        this.load.image('lionpaw2', 'assets/img/lion-paw2.png');
        //---------------orangutan level-----------------
        this.load.image('jungle', 'assets/img/jungle.png');
        this.load.image('orangutanshadow', 'assets/img/orangutan-shadow.png');
        this.load.image('orangutanbody', 'assets/img/orangutan-body.png')
        this.load.image('orangutanbelly', 'assets/img/orangutan-belly.png');
        this.load.image('orangutanmounth', 'assets/img/orangutan-mounth.png');
        this.load.image('orangutaneyes', 'assets/img/orangutan-eyes.png');
        this.load.image('orangutanarm1', 'assets/img/orangutan-arm1.png');
        this.load.image('orangutanarm2', 'assets/img/orangutan-arm2.png');
        this.load.image('orangutanhand1', 'assets/img/orangutan-hand1.png');
        this.load.image('orangutanhand2', 'assets/img/orangutan-hand2.png');
        this.load.image('orangutanfeet1', 'assets/img/orangutan-feet1.png');
        this.load.image('orangutanfeet2', 'assets/img/orangutan-feet2.png');
        this.load.image('orangutanleg1', 'assets/img/orangutan-leg1.png');
        this.load.image('orangutanleg2', 'assets/img/orangutan-leg2.png');
        this.load.image('orangutanshoulder1', 'assets/img/orangutan-shoulder1.png');
        this.load.image('orangutanshoulder2', 'assets/img/orangutan-shoulder2.png');
        this.load.image('orangutanhead', 'assets/img/orangutan-head.png');
        //---------------elephant level-----------------
        this.load.image('elephantshadow', 'assets/img/elephant-shadow.png')
        this.load.image('elephantbody', 'assets/img/elephant-body.png');
        this.load.image('elephanthead', 'assets/img/elephant-head1.png');
        this.load.image('elephantear', 'assets/img/elephant-ear.png');
        this.load.image('elephanthorn', 'assets/img/elephant-horn.png');
        this.load.image('elephanttrunk', 'assets/img/elephant-trunk.png');
        this.load.image('elephantleg1', 'assets/img/elephant-leg1.png');
        this.load.image('elephantleg2', 'assets/img/elephant-leg2.png');
        this.load.image('elephantleg3', 'assets/img/elephant-leg3.png');
        this.load.image('elephantleg4', 'assets/img/elephant-leg4.png');
        this.load.image('elephanttail', 'assets/img/elephant-tail.png');
        //---------------owl level-----------------
        this.load.image('forest', 'assets/img/forest.png');
        this.load.image('owlshadow', 'assets/img/owl-shadow.png');
        this.load.image('owlbody', 'assets/img/owl-body.png');
        this.load.image('owlclaw', 'assets/img/owl-claw1.png');
        this.load.image('owlclaw', 'assets/img/owl-claw2.png');
        this.load.image('owlface', 'assets/img/owl-face.png');
        this.load.image('owlhead', 'assets/img/owl-head.png');
        this.load.image('owltail', 'assets/img/owl-tail.png');
        this.load.image('owlwing', 'assets/img/owl-wing.png');


        ///////////////// SOUND LOADING /////////////////////
        //--------------- Title Screen sound -----------------
        //this.load.audio('Title_sound', 'assets/audio/yourSound.mp3');
        this.load.audio('Intro', 'assets/audio/intro.wav');
        this.load.audio('Correct', 'assets/audio/correct.wav');
        this.load.audio('Wrong', 'assets/audio/wrong.wav');
        this.load.audio('Snake', 'assets/audio/snake.mp3');
        this.load.audio('Lion', 'assets/audio/lion.mp3');
        this.load.audio('Orangutan', 'assets/audio/orangutan.mp3');
        this.load.audio('Elephant', 'assets/audio/elephant.mp3');
        this.load.audio('Owl', 'assets/audio/owl.mp3');
    }

    create() {

        this.scene.start("caramel");


    }
    update() {
    }
}