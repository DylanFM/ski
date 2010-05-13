$ ->
  paper: Raphael "game", 800, 600

  # Create an image to play with
  bg: paper.image "images/background.png", -400, 0, 1600, 3000

  # Make a representation of a person
  person: paper.image "images/person.png", 390, 285, 20, 40

  # Move it
  move: (el, direction) ->
    to: { x: el.attrs.x, y: el.attrs.y }
    # Let's hard code in a going down
    to.y = -2400
    switch direction
      when "left"
        to.x = -800
      when "up"
        # to.y = -2400
      when "right"
        to.x = 0
    # Animate!
    el.animate to, 5000

  # Let's get it moving around with arrow keys
  $("html").keydown (event) ->
    switch event.keyCode
      when 37
        move bg, "right"
        console.log "Turning left"
      when 39
        move bg, "left"
        console.log "Turning right"
      when 40
        move bg, "up"
        console.log "Straight down!"
    false
