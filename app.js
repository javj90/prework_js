// Rover Object Goes Here
// ======================
var Rover = {direction:"N", positionX: 0, positionY: 0, travelLog: []}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
}

function moveForward(rover){
  rover.travelLog.push([rover.positionX,rover.positionY]);
  switch (rover.direction) {
    case "N":
      rover.positionY -= 1;
      break;
    case "W":
      rover.positionX -= 1;
      break;
    case "S":
      rover.positionY += 1;
      break;
    case "E":
      rover.positionX += 1;
      break;
  }
  if (rover.positionX < 0) {
    rover.positionX = 0;
    console.log("illegal move")
  }
  else if (rover.positionX > 10) {
    rover.positionX = 10;
    console.log("illegal move")
  }
  if (rover.positionY < 0) {
    rover.positionY = 0;
    console.log("illegal move")
  }
  else if (rover.positionY > 10) {
    rover.positionY = 10;
    console.log("illegal move")
  }

  console.log("Rover is now at position: " + rover.positionX + "," + rover.positionY);
}

function moveBackward(rover){
  rover.travelLog.push([rover.positionX,rover.positionY]);
  switch (rover.direction) {
    case "N":
      rover.positionY += 1;
      break;
    case "W":
      rover.positionX += 1;
      break;
    case "S":
      rover.positionY -= 1;
      break;
    case "E":
      rover.positionX -= 1;
      break;
  }
  if (rover.positionX < 0) {
    rover.positionX = 0;
    console.log("illegal move")
  }
  else if (rover.positionX > 10) {
    rover.positionX = 10;
    console.log("illegal move")
  }
  if (rover.positionY < 0) {
    rover.positionY = 0;
    console.log("illegal move")
  }
  else if (rover.positionY > 10) {
    rover.positionY = 10;
    console.log("illegal move")
  }

  console.log("Rover is now at position: " + rover.positionX + "," + rover.positionY);
}

function moveRover(commands){
  for(var i = 0; i < commands.length; i++){
    switch (commands[i]) {
      case "f":
        moveForward(Rover);
        break;
      case "l":
        turnLeft(Rover);
        break;
      case "r":
        turnRight(Rover);
        break;
      case "b":
        moveBackward(Rover);
        break;
      default:
        console.log("Bad command: " + commands[i]);
        break;
    }
  }
}
