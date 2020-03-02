class Enemy {
    constructor(game) {
        this.game = game;
        this.pos = [0, 500];
        this.img = new Image();
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580246306/tile003_pgcjmz.png';
        this.destroyed = false;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.size = [70, 70];
        this.damage = 20;
        this.starting = true;
    }

    draw() {
        this.ctx.drawImage(this.img, this.pos[0], this.pos[1], this.size[0], this.size[1])
    }

    shootEnemy(x, y) { 
        if (x > this.pos[0] - (this.size[0]/1.75) && x <= this.pos[0] + (this.size[0]/1.75)) {
            if (y > this.pos[1] - (this.size[1]/1.75) && y <= this.pos[0] + (this.size[0]/1.75)) {
                if (!this.destroyed) {
                    console.log('hit')
                    this.game.killedEnemies += 1;
                }
                console.log('destroyed')
                this.destroy();
            }
        }
    }

    destroy() {
        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580322609/tile014_smzvv7.png';
        this.destroyed = true;
    }
}

export default Enemy;

