img = "";
status = "";
function preload() {
rubix_cube = loadImage("Rubix_Cube.jpg");
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {

}
function modelLoaded() {
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, getResult);
}
function getResult(error, results) {
if(error) {
console.log(error);
}
console.log(results);
}
function back() {
location.href = "index.html";
}