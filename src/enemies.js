class Enemy {
    constructor(game) {
        this.game = game;
        this.pos = [0, 500];
        this.img = new Image();
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580246306/tile003_pgcjmz.png';
        this.destroyed = false;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext("2d");
        this.size = [70, 70];
        this.damage = 20;
        this.starting = true;
        this.hp = 70;
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

        this.ctx.rect(this.pos[0], this.pos[1], 75 * (this.hp/50), 4); 
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

    shootEnemy(x, y) { 
        if (x > this.pos[0] - (this.size[0]/1.75) && x <= this.pos[0] + (this.size[0]/1.75)) {
            if (y > this.pos[1] - (this.size[1]/1.75) && y <= this.pos[0] + (this.size[0]/1.75)) {
                this.hp -= 20;
                if (this.hp <= 0) {
                    if (!this.destroyed) {
                        this.game.killedEnemies += 1;
                    }
                    this.destroy();
                }
            }
        }
    }

    destroy() {
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580322609/tile014_smzvv7.png';
        this.destroyed = true;
    }
}

export default Enemy;

