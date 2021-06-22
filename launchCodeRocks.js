function launchMod235 (num){
  if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
    return 'LaunchCode Rocks!';
  }
}
function launchMod23 (num){
  if (num % 2 === 0 && num % 3 === 0){
    return 'LaunchCode!';
  }
}

function launchMod35 (num){
  if (num % 3 === 0 && num % 5 === 0){
    return 'Code Rocks!';
  }
}

function launchMod25 (num){
  if (launchMod2(num) === 'Launch!' && launchMod5(num) === 'Rocks!'){
    return true
  }
}

function launchMod3 (num){
  if (num % 3 === 0){
    return 'Code!';
  }
}

function launchMod5 (num){
  if (num % 5 === 0){
    return 'Rocks!';
  }
}

function launchMod2 (num){
  if(num % 2 === 0){
   return 'Launch!';
  }
}



function launchOutput(num){
  if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
    return 'LaunchCode Rocks!';
  } else if (num % 2 === 0 && num % 3 === 0){
    return 'LaunchCode!';
  } else if (num % 3 === 0 && num % 5 === 0){
    return 'Code Rocks!';
  } else if (launchMod25(num)=== true){
    return 'Launch Rocks! (CRASH!!!!)';
  } else if (num % 3 === 0){
    return 'Code!';
  } else if (num % 5 === 0){
    return 'Rocks!';
  } else if (num % 2 === 0){
   return 'Launch!';
  } else {
    return 'Rutabagas! That doesnt work.';
  }
}


module.exports = launchOutput;