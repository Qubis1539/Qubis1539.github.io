let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let a = 2;
let distanse = 20;
// let amplitude = 1;
let size = 10
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
// let x = canvas.width/2;
// let y = canvas.height/2;
let circles = [];

let canChangeSpeed = false;

class circle{
    constructor(x, y, a, color, colorIndex){
        this.x = x;
        this.y = y;
        this.amplitude = a;
        this.canStart = false;
        this.color = color;
        this.colorIndex = colorIndex;
    }

}

function newSpeed(s){
    if(canChangeSpeed){
        circles.forEach((e) =>{
            e.amplitude = s;
        })
    }
}

function draw(){
    // console.log(circles)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles[0].canStart = true;
    circles[0].color[0] = 1;
    for (let i = 1; i < circles.length; i++) {
        if (circles[i].y - a*1 == circles[i-1].y){
            circles[i].canStart = true;
        }
    }

    if (Math.round(Math.random() * 1000) > 995){
        let num = Math.round(Math.random() * 4 + 1)
        newSpeed(num);
    }
   
    
    circles.forEach(function(item){
        if (item.canStart){
            item.y -= item.amplitude;
            if (item.y < canvas.height/2 - distanse / 2){
                item.amplitude *=-1;
                item.y = canvas.height/2-distanse / 2
            }
            else if (item.y > canvas.height/2+distanse / 2){
                item.amplitude *=-1;
                item.y = canvas.height/2+distanse / 2;
            }
        }
        for (let j = 0; j < item.colorIndex.length; j++){
            if (item.colorIndex[j] != 0){
                item.color[j] += item.colorIndex[j] * 10;
                if(item.color[j] >= 250){
                    item.color[j] = 250
                    //  = 0;
                    if (j==2){
                        item.colorIndex[0] = item.colorIndex[j] * -1
                    }
                    else{
                        item.colorIndex[j + 1] = item.colorIndex[j] * -1
                    }
                    item.colorIndex[j] = 0;
                }
                if(item.color[j] <= 0){
                    //  = 0;
                    item.color[j] = 0;
                    if (j==2){
                        item.colorIndex[0] = item.colorIndex[j] * -1
                    }
                    else{
                        item.colorIndex[j + 1] =  item.colorIndex[j] * -1
                    }
                    item.colorIndex[j] = 0;
                }
            }
        }
        ctx.beginPath();
        ctx.fillStyle = `rgb(${item.color[0]}, ${item.color[1]},${item.color[2]})`;
        ctx.arc(item.x, item.y, size, 2 * Math.PI, false);
        ctx.fill();
    })
    // if(circles[circles.length - 1].canStart){
    //     canChangeSpeed = true;
    // }
    // window.requestAnimationFrame(draw)
}
let timer;
function createCircles(){
    for (let i = 0; i < 100; i++) {
        let w = Math.round(((canvas.width / 2)- size - size * 2 * 50) + i * size * 2);
        let h = Math.round(canvas.height / 2);
        color = [250, 0 , 2*i];
        let c = new circle(w, h, a, color, [-1, 0, 0]);
        // console.log(color)
        circles.push(c);

    }
    timer = setInterval(draw, 30)
}
createCircles();

