// ****************************** main ***************************
const config = {
    width: 320 * 2,
    height: 640 * 2,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,


    },

    type: Phaser.AUTO,
    transparent: false,
    pixelArt: false,



    scene: [
        ScenePreload,
        SceneCaramel,
        SceneStartgame,
        SceneLeveltwo,
        SceneLevelThree,
        SceneLevelFour,
        SceneLevelFive

    ],

};
const game = new Phaser.Game(config);

