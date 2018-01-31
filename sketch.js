let border = 50;
// let x = border;
// let y = 2 * border;
let x, y;
let spacing = 30;
let end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  // background(255);
  stroke(0);
  frameRate(15);
}

function draw() {
  randomStrokeWeight();

  let rand = random();
  let l = ranLen();

  if (rand < 0.2) {
    drawVerLine(x, y, l);
  } else if (rand >= 0.2 && rand < 0.4) {
    drawHorLine(x, y, l);
  } else if (rand >= 0.4 && rand < 0.6) {
    drawForSlash(x, y, l);
  } else if (rand >= 0.6 && rand < 0.8) {
    drawBackSlash(x, y, l);
  } else {
    drawRect(x, y, l);
  }

  x = end.x;
  y = end.y;

  // if (end.x > width - border - 45) {
  //   x = border;
  //   y += spacing;
  // }
  //
  // if (end.y < border) {
  //   x = border;
  //   y += spacing;
  // }
  //
  // if (end.y > height - border) {
  //   noLoop();
  // }

  if (
    x < border ||
    x > width - border - 45 ||
    y < border ||
    y > height - border
  ) {
    // save();
    clear();
    x = width / 2;
    y = height / 2;
  }
}

function drawHorLine(x, y, l) {
  line(x, y, x + l, y);
  end = createVector(x + l, y);
}

function drawVerLine(x, y, l) {
  if (random() < 0.9) {
    line(x, y, x, y + l);
    end = createVector(x, y + l);
  } else {
    line(x, y, x, y - l);
    end = createVector(x, y - l);
  }
}

function drawForSlash(x, y, l) {
  line(x, y, x + l, y - l);
  end = createVector(x + l, y - l);
}

function drawBackSlash(x, y, l) {
  line(x, y, x + l, y + l);
  end = createVector(x + l, y + l);
}

function drawRect(x, y, l) {
  let rand = random();

  // if (rand < 0.25) {
  //   rect(x, y, l, l);
  //   end = createVector(x + l, y + l);
  // } else if (rand >= 0.25 && rand < 0.5) {
  //   rect(x, y + l, l, l);
  //   end = createVector(x + l, y);
  // } else if (rand >= 0.5 && rand < 0.75) {
  //   rect(x + l, y, l, l);
  //   end = createVector(x, y + l);
  // } else {
  //   rect(x + l, y + l, l, l);
  //   end = createVector(x, y);
  // }

  ellipse(x, y, l, l);

  end = createVector(x, y);

  // if (rand < 0.5) {
  //   end = createVector(x + l, y + l);
  // } else {
  //   end = createVector(x + l, y);
  // }
}

function randomStrokeWeight() {
  let s = random(0.5, 2);
  strokeWeight(s);
}

function ranLen() {
  return random(-20, 20);
}
