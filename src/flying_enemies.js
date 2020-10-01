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
        this.hp = 100;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "7";

        if (this.hp > 35) {
            this.ctx.strokeStyle = "lightgreen";
        } else if (this.hp <= 35 && this.hp > 17.5) {
            this.ctx.strokeStyle = "orange";
        } else {
            this.ctx.strokeStyle = "red"
        }

        this.ctx.rect(this.pos[0], this.pos[1], 105 * (this.hp/100), 4); 
        this.ctx.closePath()
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth = "1";

        if (this.hp > 35) {
            this.ctx.strokeStyle = "green";
        } else if (this.hp <= 35 && this.hp > 17.5) {
            this.ctx.strokeStyle = "darkorange";
        } else {
            this.ctx.strokeStyle = "darkred"
        }

        this.ctx.rect(this.pos[0] - 5, this.pos[1] - 5, 115, 14); 
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.drawImage(this.img, this.pos[0], this.pos[1] + 10, this.size[0], this.size[1]);
    }



    // shootEnemy(x, y) {
    //     if (x > this.pos[0] - (this.size[0]/1.75) && x <= this.pos[0] + (this.size[0]/1.75)) {
    //         if (y > this.pos[1] - (this.size[1]/1.75) && y <= this.pos[0] + (this.size[0]/1.75)) {
    //             this.timesHit += 1;
    //             if (this.timesHit === 2){
    //                 if (!this.destroyed) {
    //                     this.game.killedEnemies += 1;
    //                 }
    //                 this.destroy();
    //             }
    //         }
    //     }
    // }

    destroy() {
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580410322/ezgif.com-crop_1_rouon0.gif';
        this.destroyed = true;
    }
}

export default FlyingEnemy;