function countPositivesSumNegatives(input) {
    
    let positiveCount = 0;
      let negativeSum = 0;
      let newArray = [];
  
      for (let i = 0; i < input.length; i++) {
          if (input[i] > 0) {
              positiveCount++
          }
          else if (input[i] < 0) {
              negativeSum += input[i]
          }
      }
      if (input.length < 1 || input.length == null) {
          return []
      }
      else {
          return [positiveCount, negativeSum]
      }
  }

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])