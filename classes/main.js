// ****************************** main ***************************
const config = {

    scale: {
        mode: Phaser.Scale.FIT,
        width: 320 * 2,
        height: 640 * 2,
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
        SceneLevelThree

    ],

};
const game = new Phaser.Game(config);

