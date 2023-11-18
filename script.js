var player;
var levels = [];
var level;
var status;
const main_menu_button = document.getElementById("main menu");

function preload() {
  rat_img = loadImage('images/mouse.png');
  lava_img = loadImage('images/lava floor.png');
  cheese_img = loadImage('images/cheesy.png');
  death_img = loadImage('images/death image patootie.png');
  skull_img = loadImage('images/skull.png');
  rat_trap_img = loadImage('images/rat trap.png');
  rat_trap_words_img = loadImage('images/rat trap words.png');
  easter_egg_img = loadImage('images/red easter egg.png');
  guard_img = loadImage('images/guard.png')
}

function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  imageMode(CENTER);
  status = 0;
  level = 1;
  player = new Player(rat_img, width / 2, height / 2, width*0.06, height*0.06, width*0.008);
  levels.push(new Level(
    new Cheese(cheese_img, width * 1.25, height / 2, width*0.05, height*0.05),
    [
      // Blocks
      new Solid(width * 0.875, 0 + height * 0.05 * 1, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 3, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 5, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 7, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 9, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 11, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 15, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 17, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 19, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      new Solid(width * 0.875, 0 + height * 0.05 * 21, width / 10, height / 10, color(50, 50, 50), color(30, 30, 30)),
      
      // Walls
      new Solid(width*0.125, height*0.225, width/2, height*0.45, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*0.125, height*0.775, width/2, height*0.45, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*1.625, height/2, width/2, height, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*0.875, 0 - height*0.25, width*2, height/2, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*0.875, height*1.25, width*2, height/2, color(25, 25, 25), color(45, 45, 45)),

      // Laser Ends
      new Solid(width*0.6125, height * 0.25, width*0.025, height*0.025, color(10,10,10), color(15,15,15)),
      new Solid(width*0.7625, height * 0.25, width*0.025, height*0.025, color(10,10,10), color(15,15,15)),
      
      new Solid(width*1.175, height * 0.3875, width*0.025, height*0.025, color(10,10,10), color(15,15,15)),
      new Solid(width*1.175, height * 0.8125, width*0.025, height*0.025, color(10,10,10), color(15,15,15))
    ],
    [
      new Laser(width * 0.6875, height * 0.25, width * 0.125, height * 0.01),
      new Laser(width * 1.175, height*0.6, width * 0.01, height * 0.4)
    ],
    [
      new Trap(cheese_img,width * 1.25, height * 0.375, width * 0.05, height * 0.05),
      new Trap(cheese_img,0 - width*0.075, height/2, width * 0.1, height * 0.1)
    ],
    [
      new Pushable(width*0.325, height / 2, width * 0.1, height * 0.1,color(50, 100, 50), color(30, 30, 30))
    ],
    []
  ));
  levels.push(new Level(
    new Cheese(cheese_img, width * 1.25, height / 2, width*0.05, height*0.05),
    [
      // Walls
      new Solid(width*0.125, height/2, width/2, height, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*1.625, height/2, width/2, height, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*0.875, 0 - height*0.25, width*2, height/2, color(25, 25, 25), color(45, 45, 45)),
      new Solid(width*0.875, height*1.25, width*2, height/2, color(25, 25, 25), color(45, 45, 45)),
    ],
    [],
    [],
    [],
    [
      new Teleporter(width * 0.875, height * 0.05, width / 10, height / 10, color(50, 50, 100), color(30, 30, 30), width * 0.875, height*0.95)
    ]
  ))
  console.log(levels)
}

main_menu_button.addEventListener("click", function () {
  console.log('ee')
})

function update() {
  if (status == 0) {
    var result;
    if (keyIsDown(65)) {
      result = player.move('left',levels[level-1])  
    }
    if (keyIsDown(68)) {
      result = player.move('right',levels[level-1]);
    }
    if (keyIsDown(87)) {
      result = player.move('up',levels[level-1]);
  
    }
    if (keyIsDown(83)) {
      result = player.move('down',levels[level-1]);
    }
    if (result === 'cheese') {
      if (levels.length > level) {
        level += 1
        player.x = width/2
        player.y = height/2
      }
    }
    if (result === 'laser') {
      status = 1
    }
    if (result === 'trap') {
      status = 2
    }
  }
}

function draw() {
  update();
  
  background(200);

  rectMode(CENTER);
  imageMode(CENTER);
  push();
  translate(-1 * player.x + width / 2, -1 * player.y + height / 2);
  levels[level - 1].display();
  // console.log(levels[level - 1])
  player.display();
  pop();

  if (status == 1) {
    imageMode(CENTER);
    image(lava_img, width / 2, height / 2, width, height);
    image(death_img, width / 2, height * 0.542, width * 1.1, height);
    image(skull_img, width * 1 / 3, height * 0.25, width * 0.1, height * 0.1);
    image(skull_img, width * 2 / 3, height * 0.25, width * 0.1, height * 0.1);
    image(skull_img, width * 1 / 3, height * 0.75, width * 0.1, height * 0.1);
    image(skull_img, width * 2 / 3, height * 0.75, width * 0.1, height * 0.1);
  }

  if (status == 2) {
    imageMode(CENTER)
    rectMode(CENTER)
    fill(150, 150, 162);
    rect(width / 2, height / 2, width, height);
    image(rat_trap_img, width / 2, height / 2, width * 0.8, height * 0.8);
    image(rat_trap_words_img, width / 2, height * 1.17, width * 1.3, height * 0.8);
  }
}