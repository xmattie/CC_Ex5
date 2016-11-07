var theImage = new Array(3);
var counter = 0; //variables that will structure the passage of time and interaction
var man = 10;
var lady = 10;
var sadMan = 0;
happyLady = 0;
var clouds = false

function preload() { // loads the fonts and images
  font = loadFont('font/Inconsolata.ttf');
  for (var i = 0; i < theImage.length; i++) {
    theImage[i] = loadImage('images/image' + i + '.png');
  }
}

function setup() {
  createCanvas(900, 600);
  textSize(12);
  textAlign(CENTER);
  textFont(font);
  rectMode(CENTER);
  frameRate(1); //mainly to get the counter adding up one per second, might cause image issues though
}

function draw() {
  background(0);
  if (clouds === true) {
    image(theImage[1], 0, 0);
  }
  if (counter > 3) { //waits for a certain amount of time/resources to make the characters appear
    lonelyMan();
  }
  if (counter > 18) {
    toughLady();
  }
  counter = counter + 1; //keeps the main time control variable ticking upwards
  displayCounter();
}

function displayCounter() { //the counter that shows the player the resources they have
  fill(0);
  rect(width / 2, height / 2 - 4, 35, 35);
  fill(255);
  text(counter, width / 2, height / 2);
}

function lonelyMan() { //where all the narrative and their conditions for each of the characters exist
  image(theImage[0], 0, 0);
  fill(0);
  rect(195, 50, 50, 35);
  fill(255);
  text("Cost: " + man + " (w)", 200, 50, 70, 30);
  if (sadMan == 1) {
    fill(0);
    rect(100, 350, 100, 50);
    fill(255);
    text("i am a poison that cannot sleep", 150, 350, 100, 50);
  } else if (sadMan == 2) {
    clouds = true;
  }
}

function toughLady() {
  image(theImage[2], width / 2, height / 2);
  fill(0);
  rect(550, 350, 50, 35);
  fill(255);
  text("Cost: " + lady + " (d)", 550, 350, 70, 30);
  if (happyLady == 1) {
    fill(0);
    rect(700, 400, 100, 50);
    fill(255);
    text("hide me like a white lie", 700, 400, 100, 50);
  }
}

function keyTyped() { //links the passage of time and narration with keypresses once conditions are met
  if (key === 'w') {
    if (counter > man) {
      sadMan = sadMan + 1;
      counter = counter - man;
      man = man + 5;
    }
  } else if (key === 'd') {
    if (counter > lady) {
      happyLady = happyLady + 1;
      counter = counter - lady;
      lady = lady + 5;
    }
  }
}