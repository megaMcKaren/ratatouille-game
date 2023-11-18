function collide_rect(x1,y1,width1,height1,x2,y2,width2,height2) {
  if (x1 + width1/2> x2 - width2/2) {
    if (x1 - width1/2 < x2 + width2/2) {
      if (y1 + height1/2> y2 - height2/2) {
        if (y1 - height1/2 < y2 + height2/2) {
          return true
        }
      }
    }
  }
  return false
}

class Player {
  constructor (img, x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, this.width*0.95, this.height);
  }

  move(direction,levels_obj) {
    if (direction === 'left') {
      this.x -= this.speed;
    }
    if (direction === 'right') {
      this.x += this.speed;
    }
    if (direction === 'up') {
      this.y -= this.speed;
    }
    if (direction === 'down') {
      this.y += this.speed;
    }
    return this.collision_check(direction,levels_obj)
  }
  
  collision_check(direction,levels_obj) {
    if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.cheese.x, levels_obj.cheese.y, levels_obj.cheese.width, levels_obj.cheese.height)) {
      console.log('cheese');
      return 'cheese'
    }
    for (var i = 0; i < levels_obj.solids.length; i++) {
      if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.solids[i].x, levels_obj.solids[i].y, levels_obj.solids[i].width, levels_obj.solids[i].height)) {
        if (direction === 'left') {
          this.x += this.speed;
        }
        if (direction === 'right') {
          this.x -= this.speed;
        }
        if (direction === 'up') {
          this.y += this.speed;
        }
        if (direction === 'down') {
          this.y -= this.speed;
        }
      }
    }
    for (var i = 0; i < levels_obj.lasers.length; i++) {
      if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.lasers[i].x, levels_obj.lasers[i].y, levels_obj.lasers[i].width, levels_obj.lasers[i].height)) {
        console.log('laser');
        return 'laser'
      }
    }
    for (var i = 0; i < levels_obj.traps.length; i++) {
      if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.traps[i].x, levels_obj.traps[i].y, levels_obj.traps[i].width, levels_obj.traps[i].height)) {
        console.log('trap');
        return 'trap'
      }
    }
    for (var i = 0; i < levels_obj.pushables.length; i++) {
      if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.pushables[i].x, levels_obj.pushables[i].y, levels_obj.pushables[i].width, levels_obj.pushables[i].height)) {
        console.log('pushable');
        if (direction === 'left') {
          levels_obj.pushables[i].x -= this.speed;
        }
        if (direction === 'right') {
          levels_obj.pushables[i].x += this.speed;
        }
        if (direction === 'up') {
          levels_obj.pushables[i].y -= this.speed;
        }
        if (direction === 'down') {
          levels_obj.pushables[i].y += this.speed;
        }
      }
    }
    for (var i = 0; i < levels_obj.teleporters.length; i++) {
      if (collide_rect(this.x, this.y, this.width, this.height, levels_obj.teleporters[i].x, levels_obj.teleporters[i].y, levels_obj.teleporters[i].width, levels_obj.teleporters[i].height)) {
        console.log('teleporter');
        player.x = levels_obj.teleporters[i].tp_x;
        player.y = levels_obj.teleporters[i].tp_y;
      }
    }
  }
}