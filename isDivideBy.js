function isDivideBy(number, a, b) {
    if (Number.isInteger(number / a) && Number.isInteger(number / b)) {
        return true
    }
    else return false
  }


console.log(isDivideBy(2876, 3, 4))