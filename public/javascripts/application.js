(function(){
  $(function() {
    var img, move, paper, person, point;
    paper = Raphael("game", 800, 600);
    // Create an image to play with
    img = paper.image("images/squares.png", 365, 530, 70, 70);
    // Make a representation of a person
    person = paper.image("images/person.png", 390, 285, 20, 30);
    // Move it
    move = function move(el, direction) {
      var to;
      to = {
        x: el.attrs.x,
        y: el.attrs.y
      };
      if (direction === "left") {
        to.x = 0;
      } else if (direction === "up") {
        to.y = 70;
      } else if (direction === "down") {
        to.y = 530;
      } else if (direction === "right") {
        to.x = 730;
        // Animate!
      }
      return el.animate(to, 2000);
    };
    point = function point(el, direction) {
      if (direction === "left") {
        return el.rotate(270, true);
      } else if (direction === "up") {
        return el.rotate(0, true);
      } else if (direction === "down") {
        return el.rotate(180, true);
      } else if (direction === "right") {
        return el.rotate(90, true);
      }
    };
    // Let's get it moving around with arrow keys
    return $("html").keydown(function(event) {
      var _a;
      if ((_a = event.keyCode) === 37) {
        move(img, "right");
        point(person, "left");
      } else if (_a === 38) {
        move(img, "down");
        point(person, "up");
      } else if (_a === 39) {
        move(img, "left");
        point(person, "right");
      } else if (_a === 40) {
        move(img, "up");
        point(person, "down");
      }
      return false;
    });
  });
})();
