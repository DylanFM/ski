(function(){
  $(function() {
    var bg, move, paper, person;
    paper = Raphael("game", 800, 600);
    // Create an image to play with
    bg = paper.image("images/background.png", -400, 0, 1600, 3000);
    // Make a representation of a person
    person = paper.image("images/person.png", 390, 285, 20, 40);
    // Move it
    move = function move(el, direction) {
      var to;
      to = {
        x: el.attrs.x,
        y: el.attrs.y
      };
      // Let's hard code in a going down
      to.y = -2400;
      if (direction === "left") {
        to.x = -800;
      } else if (direction === "up") {
        // to.y = -2400
      } else if (direction === "right") {
        to.x = 0;
        // Animate!
      }
      return el.animate(to, 5000);
    };
    // Let's get it moving around with arrow keys
    return $("html").keydown(function(event) {
      var _a;
      if ((_a = event.keyCode) === 37) {
        move(bg, "right");
        console.log("Turning left");
      } else if (_a === 39) {
        move(bg, "left");
        console.log("Turning right");
      } else if (_a === 40) {
        move(bg, "up");
        console.log("Straight down!");
      }
      return false;
    });
  });
})();
