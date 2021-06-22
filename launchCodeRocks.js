
// function launchOutput(num){
//   if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
//     return 'LaunchCode Rocks!';
//   } else if (num % 2 === 0 && num % 3 === 0){
//     return 'LaunchCode!';
//   } else if (num % 3 === 0 && num % 5 === 0){
//     return 'Code Rocks!';
//   } else if (launchMod25(num)=== true){
//     return 'Launch Rocks! (CRASH!!!!)';
//   } else if (num % 3 === 0){
//     return 'Code!';
//   } else if (num % 5 === 0){
//     return 'Rocks!';
//   } else if (num % 2 === 0){
//    return 'Launch!';
//   } else {
//     return 'Rutabagas! That doesnt work.';
//   }
// }

function launchOutput(num){ 
  let output = '';

  if(num%2 ===0){
    output += "Launch";
  }
  if(num%3 ===0){
    output += "Code";
  }
  if(num%5 ===0){
    if(output){// if output is not empty      
      output += " Rocks";
    } else {
      output += "Rocks";
    }

  }
  if(!output){
    return "Rutabagas! That doesn't work."
  } else if (output === 'Launch Rocks'){
    return output + '! (CRASH!!!!)'

  } else {
    return output + "!";
  }
}

module.exports = launchOutput;