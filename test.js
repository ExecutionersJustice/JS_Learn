const numbers = ["1", "3", "7", "4", "45", "88", "2", "11", "250", "19982", "15", "1", "22", "1", "4", "3", "55"]

for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
        if (JSON.stringify(numbers[k]) === JSON.stringify(numbers[i])) {
            numbers.splice(k, 1)
        }
    }
}

console.log(numbers)