turtley.onReady = async () => {
  const turtle = new turtley.Turtle();
  turtleBox = document.querySelector('#turtleBox')
  turtle.init({width: 500, height: 500, appendTo: turtleBox});
  
  /* Program your turtle here! */
  
  await turtle.setBackgroundColor("antiquewhite");
  await turtle.moveTo(-5, -5);
  await turtle.penDown();
  await turtle.setPenColor("blue");

  let i = 1;
  while (true) {
    i++;
    await turtle.forward(10*i);
    await turtle.rotateRight(90);
    if (turtle.canvasHeight - turtle.y*2 <= 50)
      break;
  }
};