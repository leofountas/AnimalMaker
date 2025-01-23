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
        height:
            640 * 2,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        postBoot: function () {
            if (isAppleDevice) {
                document.querySelector('canvas').style.marginTop = "0 !important";
            }
        }

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


const game = new Phaser.Game(config);