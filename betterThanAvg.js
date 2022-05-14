function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    
    let sumPoints = classPoints.reduce(function(previousValue, currentElement) {
        return previousValue + currentElement
    }, 0)

    if (yourPoints > sumPoints / classPoints.length) return true 
    else return false
  }



betterThanAverage([100, 40, 34, 57], 95)