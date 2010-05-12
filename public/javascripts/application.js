(function(){
  $(function() {
    var img, paper;
    paper = Raphael("game", 800, 600);
    // Create an image to play with
    img = paper.image("images/squares.png", 365, 530, 70, 70);
    // Move it
    // Animate!
    return img.animate({
      x: 400,
      y: 70
    }, 2000);
  });
})();
