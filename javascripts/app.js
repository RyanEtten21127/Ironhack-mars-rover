// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}


// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction == "N") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "N";
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction == "N") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "N";
  }
}

// Iteration 3

function moveForward(rover) {
  
  if(rover.direction === "N"){
    rover.y--;
  }
  else if(rover.direction === "S"){
    rover.y++;
  }
  else if(rover.direction === "E"){
    rover.x++;
  }
  else if(rover.direction === "W"){
    rover.x--;
  }

}

// Iteration 4

function commands(steps){

  // i = 0 -> l => turnLeft()
  // i = 1 -> l => turnLeft()
  // i = 2 -> f => moveForward()
  // i = 3 -> f => moveForward()
  // i = 4 -> r => turnRight()
  // i = 5 -> r => turnRight()
  for(let i = 0; i < steps.length; i++){
    if(steps.charAt(i) === "l"){
      turnLeft(rover);
    } else if(steps.charAt(i) === "r"){
      turnRight(rover);
    } else if(steps.charAt(i) === "f"){
      moveForward(rover);
    }
  }
}

// Iteration 5

rover.travelLog.push(steps.charAt(i));


console.log("Travel Log:" rover.travelLog);