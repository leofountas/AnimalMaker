class SceneMenu extends Phaser.Scene {
    constructor() {
        super("menu-level");
    }
    preload() {
        this.load.image('menu-end', 'assets/img/menu-end.png');
    }
    create() {
        //Background outside canvas game 
        changeBackgroundImage('assets/img/background-end.jpg');
        // Background canvas game setup
        const bg = this.add.image(0, 0, 'menu-end');
        bg.setOrigin(0, 0)
        bg.setScale(this.scale.width / bg.width, this.scale.height / bg.height);
    }
}