var canvas = document.querySelector('#canvas'),
ctx = canvas.getContext('2d'),
w = canvas.width = innerWidth - 17,
h = canvas.height = innerHeight,
particles = [],

properties = {
    bgColor             : 'rgba(30, 30, 35, 1)',
    particleColor       : 'rgba(4 ,194 ,201, 1)',
    particleRadius      : 3,
    particleCount       : 100,
    particleMaxVelocity : 0.5,
    lineLength          : 150,
    particleLife        : 15,
    
};
if (canvas.width <= 500  ) {
    properties.particleCount = 50;
}   
window.onresize = function(){
    w = canvas.width = innerWidth - 17,
    h = canvas.height = innerHeight;   
    
}
window.addEventListener("orientationchange", function() {
    w = canvas.width = innerWidth - 17,
    h = canvas.height = innerHeight;   
}, false);

(function(){

    
    // document.querySelector('body').appendChild(canvas);

   

    class Particle{
        constructor(){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.life = Math.random()*properties.particleLife*60;
        }
        position(){
            this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX;
            this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
        reDraw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
        reCalculateLife(){
            if(this.life < 1){
                this.x = Math.random()*w;
                this.y = Math.random()*h;
                this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
                this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
                this.life = Math.random()*properties.particleLife*60;
            }
            this.life--;
            
        }
    }

    function reDrawBackground(){
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }

    function drawLines(){
        var x1, y1, x2, y2, length, opacity;
        for(var i in particles){
            for(var j in particles){
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if(length < properties.lineLength){
                    opacity = 1-length/properties.lineLength;
                    ctx.lineWidth = '0.5';
                    ctx.strokeStyle = 'rgba(4 ,194 ,201, '+opacity+')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles(){
        for(var i in particles){
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }
    // let tick = 100;
   
    // function generateColor(){
    //     if (tick < 1){
    //         let r = Math.random() * 256;
    //         let g = Math.random() * 256;
    //         let b = Math.random() * 256;
    //         properties.particleColor = 'rgba('+r+' ,'+g+' ,'+b+', 1)'
    //         tick = 60;
    //     }
    //     else{
    //         tick--;
    //     }
    // }

    function loop(){
        // generateColor()
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init(){
        for(var i = 0 ; i < properties.particleCount ; i++){
            particles.push(new Particle);
        }
        loop();
    }

    init();

}())