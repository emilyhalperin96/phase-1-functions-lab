//regardless of direction, this gives the destination ie if it's negative, it turns to positive
function distanceInBlocks(start, destination) {
    return Math.abs(start - destination)
}


function distanceFromHqInBlocks(someValue) {
   return distanceInBlocks(42, someValue)
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

  
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    return distanceInBlocks(start, destination) * 264
    }

  function calculatesFarePrice(start, destination) { 
    let calculatesFarePrice
    let calc = distanceTravelledInFeet(start, destination) 
    if (calc < 400) {
      return calculatesFarePrice = 0 
    }
    else if (calc > 400 && calc < 2000) {
      calculatesFarePrice = calc - 400;
      return calculatesFarePrice * 0.02
    }
    else if (calc > 2000 && calc < 2500) {
      return calculatesFarePrice = 25
    }
    else if (calc > 2500) {
      return 'cannot travel that far'
    }
  }

    //The first four hundred feet are free.
    //between 400 and 2000 feet, the price is 2 cents per foot 
    //over 2000 feet and under 2500 feet = 25
    // over 2500 feet is requested. = cannot travel that far 