import Enemy from './enemies';
import Bullet from './bullet';
import FlyingEnemy from './flying_enemies';

class Game {
    constructor(canvas){
        this.canvas = canvas;
        canvas.width = 1200;
        canvas.height = 700;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "lightgreen";
        this.ctx.font = "50px Comic Sans MS";
        this.enemies = [new Enemy(this)];
        this.flyingEnemies = [];
        this.killedEnemies = 0;
        this.health = 1000;
        this.score = 0;
        this.difficulty = 1000;

        this.createEnemy = setInterval(() => {
            let n = Math.random();
            if (n > 0.7) {
                this.enemies.push(new Enemy(this))
            }
        }, this.difficulty)

        setTimeout(this.createFlyingEnemy = setInterval(() => {
            let n = Math.random();
            if (n > 0.9) {
                this.flyingEnemies.push(new FlyingEnemy(this))
            }
        }, this.difficulty), 100)
    }

    drawEnemies(){
        this.enemies.map( enemy => {
            if (!(enemy instanceof FlyingEnemy)) {
                if (enemy.destroyed) {
                    this.killedEnemies += 1;
                    this.difficulty = this.difficulty - (this.killedEnemies * 2);
                    console.log(this.difficulty);
                    this.score += enemy.damage;
                    enemy.draw();
                    setTimeout(this.enemies.splice(this.enemies.indexOf(enemy), 1), 2000);
                } else {
                    enemy.draw();
                    enemy.pos[0] += 10;
                }

                enemy.pos[1] -= 5;
                if (enemy.pos[1] < 500) {
                    enemy.pos[1] += 10
                }
            }
        });

        this.flyingEnemies.map( flyingEnemy => {
            if (flyingEnemy.destroyed) {
                this.killedEnemies += 1;
                this.difficulty = this.difficulty - (this.killedEnemies * 2);
                this.score += flyingEnemy.damage;
                flyingEnemy.draw();
                setTimeout(this.flyingEnemies.splice(this.flyingEnemies.indexOf(flyingEnemy), 1), 3000);
            } else {
                if (flyingEnemy.up) {
                    flyingEnemy.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408046/ezgif.com-crop_akgdpb.gif';
                    flyingEnemy.up = false;
                    flyingEnemy.draw();
                    flyingEnemy.pos[0] += 10;
                } else {
                    flyingEnemy.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408870/ezgif.com-crop_bikubg.gif';
                    flyingEnemy.up = true;
                    flyingEnemy.draw();
                    flyingEnemy.pos[0] += 10;
                }
            }

            if (flyingEnemy.pos[1] < 200) {
                flyingEnemy.pos[1] += 40;
            } else {
                flyingEnemy.pos[1] -= 40;
            }

        });
    }

    move(ctx){
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.health < 500 && this.health > 250) {
            this.ctx.fillStyle = "orange";
        } else if(this.health < 250) {
            this.ctx.fillStyle = "red";
        }
        ctx.fillText(`HP:${this.health}/1000`, 50, 50);
        ctx.fillText(`Score:${this.score}`, 100, 100);
        this.drawEnemies();
    } 

    HP() {
        let enemies = this.enemies.concat(this.flyingEnemies);
        enemies.forEach(enemy => {
            if (enemy.pos[0] >= 1150) {
                this.health -= enemy.damage;
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        })

        if (this.health < 10) {
            alert('You lose');
        }else{
            setTimeout(() => this.HP(), 300);
        }
    }

    start(){
        let ctx = this.ctx;
        setInterval(() => {
            this.move(ctx) },
            this.difficulty - 1000
        )
    }

    
    play() {
        let enemies = this.enemies;
        document.getElementById('game-canvas').addEventListener('click', e => {
            let bullet = new Bullet(e.clientX, e.clientY);
            bullet.draw();
            enemies.forEach(enemy => {
                enemy.shootEnemy(bullet.mouse[0], bullet.mouse[1]);
            })
        }, false);

        let flyingEnemies = this.flyingEnemies;
        document.getElementById('game-canvas').addEventListener('click', e => {
            let bullet = new Bullet(e.clientX, e.clientY);
            bullet.draw();
            flyingEnemies.forEach(flyingEnemy => {
                flyingEnemy.shootEnemy(bullet.mouse[0], bullet.mouse[1]);
            })
        }, false);
    }
}
export default Game;