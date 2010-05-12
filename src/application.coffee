$ ->
  paper: Raphael "game", 800, 600

  # Create an image to play with
  img: paper.image "images/squares.png", 365, 530, 70, 70

  # Make a representation of a person
  person: paper.image "images/person.png", 390, 285, 20, 30

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

  point: (el, direction) ->
    switch direction
      when "left"
        el.rotate 270, true
      when "up"
        el.rotate 0, true
      when "down"
        el.rotate 180, true
      when "right"
        el.rotate 90, true

  # Let's get it moving around with arrow keys
  $("html").keydown (event) ->
    switch event.keyCode
      when 37
        move img, "right"
        point person, "left"
      when 38
        move img, "down"
        point person, "up"
      when 39
        move img, "left"
        point person, "right"
      when 40
        move img, "up"
        point person, "down"
    false
