class Bullet{
    constructor(x, y){
        this.mouse = [x, y];
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.point = window.innerWidth;
    }

    draw() {
        this.bulletPath();

    }

    bulletPath() {
        this.ctx.beginPath();
        let point = (this.point / 2);
        let endx = this.mouse[0];
        let endy = this.mouse[1];
        this.ctx.moveTo(point, window.innerHeight);
        this.ctx.lineTo(endx, endy);
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = '#FF00FF';
        this.ctx.stroke();
    }
}

export default Bullet;