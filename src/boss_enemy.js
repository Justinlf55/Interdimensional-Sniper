import Enemy from './enemies';

class BossEnemy extends Enemy {
    constructor(game) {
        super(game);
        this.pos = [0, 200];
        this.img = new Image();
        this.size = [200, 200];
        this.damage = 200;
        this.hp = 500;
    }
    
 }

export default BossEnemy;