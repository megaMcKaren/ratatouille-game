class Level {
  constructor(cheese, solids, lasers, traps, pushables, teleporters) {
    this.cheese = cheese;
    this.solids = solids;
    this.lasers = lasers;
    this.traps = traps;
    this.pushables = pushables;
    this. teleporters = teleporters;
  }
  display() {
    this.cheese.display();
    for (var i = 0; i < this.solids.length; i++) {
      this.solids[i].display();
    }
    for (var i = 0; i < this.lasers.length; i++) {
      this.lasers[i].display();
    }
    for (var i = 0; i < this.traps.length; i++) {
      this.traps[i].display();
    }
    for (var i = 0; i < this.pushables.length; i++) {
      this.pushables[i].display();
    }
    for (var i = 0; i < this.teleporters.length; i++) {
      this.teleporters[i].display();
    }
  }
}

class Solid {
  constructor(x, y, width, height, color, stroke) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stroke = stroke;
  }
  display() {
    fill(this.color);
    stroke(this.stroke);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Laser {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color(225,0,0);
  }
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

class Trap {
  constructor(img,x, y, width, height,) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color(123,123,123);
    this.img = img;
  }
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    image(this.img, this.x, this.y, this.width*0.75, this.height*0.75);
  }
}

class Pushable {
  constructor(x, y, width, height, color, stroke) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stroke = stroke;
  }
  display() {
    fill(this.color);
    stroke(this.stroke);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Teleporter {
  constructor(x, y, width, height, color, stroke, destination_x, destination_y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stroke = stroke;
    this.tp_x = destination_x;
    this.tp_y = destination_y;
  }
  display() {
    fill(this.color);
    stroke(this.stroke);
    rect(this.x, this.y, this.width, this.height);
    fill(color(90,80,80));
    stroke(70);
    rect(this.tp_x, this.tp_y, this.width, this.height);
  }
}

class Cheese {
  constructor(img,x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}

class Guard {
  constructor(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    image(this.img, this.x, this.y, this.width, this.height)
  }
}