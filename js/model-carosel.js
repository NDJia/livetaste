let canvas;
let donut, sushi;

function preload() {
	donut = loadModel("/models/Doughnut.obj");
	sushi = loadModel("/models/sushi/obj", true);
}

function setup() {
    canvas = createCanvas(400,400,WEBGL);
    canvas.parent(sketch);
    background(255);
    fill(200);
	let div = createDiv('p5*js');
	div.position(25, 35);
}

function draw() {
    background(255);
    orbitControl();
    model(donut);
}
