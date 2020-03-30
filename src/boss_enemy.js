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

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "7";

        if (this.hp > 250) {
            this.ctx.strokeStyle = "lightgreen";
        } else if (this.hp <= 250 && this.hp > 125) {
            this.ctx.strokeStyle = "orange";
        } else {
            this.ctx.strokeStyle = "red"
        }

        this.ctx.rect(this.pos[0], this.pos[1], 500 * (this.hp/100), 4); 
        this.ctx.closePath()
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth = "1";

        if (this.hp > 250) {
            this.ctx.strokeStyle = "green";
        } else if (this.hp <= 250 && this.hp > 125) {
            this.ctx.strokeStyle = "darkorange";
        } else {
            this.ctx.strokeStyle = "darkred"
        }

        this.ctx.rect(this.pos[0] - 5, this.pos[1] - 5, 115, 14); 
        this.ctx.closePath();
        this.ctx.stroke();

        // this.ctx.drawImage(this.img, this.pos[0], this.pos[1] + 10, this.size[0], this.size[1]);
        this.ctx.rect(this.pos[0], this.pos[1], 200, 200);
    }
    
 }

export default BossEnemy;