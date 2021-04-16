img = "";
function preload(){
    img = loadImage("Cup.jpg");
}
function setup(){
    canvas = createCanvas(640,640);
    canvas.center();
}

function draw(){
    image(img,0,0,640,640);
    fill('#ff0000');
    text("Cup", 80, 60);
    noFill();
    stroke("#ff0000");
    rect(50,30,500,390)
}