import Enemy from './enemies';

class FlyingEnemy extends Enemy {
    constructor(game){
        super(game);
        this.pos = [0, 200];
        this.img = new Image();
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408046/ezgif.com-crop_akgdpb.gif';
        this.size = [100, 100];
        this.damage = 50;
        this.up = true;
    }

    destroy() {
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580410322/ezgif.com-crop_1_rouon0.gif';
        this.destroyed = true;
    }
}

export default FlyingEnemy;