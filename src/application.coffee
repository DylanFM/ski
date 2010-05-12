$ ->
  paper: Raphael "game", 800, 600

  # Create an image to play with
  img: paper.image "images/squares.png", 365, 530, 70, 70

  # Move it
  move: (el, direction) ->
    to: { x: el.attrs.x, y: el.attrs.y }
    switch direction
      when "left"
        to.x = 0
      when "up"
        to.y = 70
      when "down"
        to.y = 530
      when "right"
        to.x = 730
    # Animate!
    el.animate to, 2000

  # Let's get it moving around with arrow keys
  $("html").keydown (event) ->
    switch event.keyCode
      when 37 then move img, "left"
      when 38 then move img, "up"
      when 39 then move img, "right"
      when 40 then move img, "down"
