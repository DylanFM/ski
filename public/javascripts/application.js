(function(){
  $(function() {
    var img, move, paper;
    paper = Raphael("game", 800, 600);
    // Create an image to play with
    img = paper.image("images/squares.png", 365, 530, 70, 70);
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
    // Let's get it moving around with arrow keys
    return $("html").keydown(function(event) {
      var _a;
      if ((_a = event.keyCode) === 37) {
        return move(img, "left");
      } else if (_a === 38) {
        return move(img, "up");
      } else if (_a === 39) {
        return move(img, "right");
      } else if (_a === 40) {
        return move(img, "down");
      }
    });
  });
})();
