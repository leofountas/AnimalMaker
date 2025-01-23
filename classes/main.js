// Function to detect Apple devices
function isAppleDevice() {

    return /Mac|iPod|iPhone|iPad/i.test(navigator.userAgent) ||
        (navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 0);

}

// Modify your config to dynamically adjust height
const config = {
    scale: {
        parent: "parent",
        mode: Phaser.Scale.FIT,
        width: 320 * 2,
        height: isAppleDevice() ?
            document.querySelector('#parent').clientHeight :
            640 * 2,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    type: Phaser.AUTO,
    transparent: false,
    pixelArt: false,
    scene: [
        ScenePreload,
        SceneCaramel,
        SceneMenu,
        SceneInfo,
        SceneStartgame,
        SceneLevelTwo,
        SceneLevelThree,
        SceneLevelFour,
        SceneLevelFive,
        SceneEndGame
    ],
};
if (isAppleDevice()) {
    console.log('APPLE')
    document.querySelector("#parent").style.height = '95vh';
}

const game = new Phaser.Game(config);