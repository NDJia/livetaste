let canvas;

function setup() {
    canvas = createCanvas(400,400,WEBGL);
    canvas.parent(sketch);
    background(255);
    fill(200);
    
}

function draw() {
    background(255);
    orbitControl();
    sphere(100);
}
