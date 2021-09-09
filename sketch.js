var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var a=[1,3,5,7,9];
console.log(a);
a.push(6);
console.log(a);
a.pop();
a.pop();
a.pop();
console.log(a);
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

