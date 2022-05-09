const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

// function chosenOnes(users) {
//     let user = ""
//     users.forEach((element, index) => {
//         if (element.registrationDate == "09.10.2021" || element.registrationDate == "10.10.2021") {
//             user = element
//             console.log(user)
//         }
//     });
// }

// chosenOnes(users)

// function chosenOnes2(users) {
//     separateArray = []
//     users.forEach((element, index) => {
//         if (element.registrationDate == "09.10.2021" || element.registrationDate == "10.10.2021") {
//             separateArray.push(element)
//         }
//     return separateArray
//     });
//     console.log(separateArray)
// }


// -----------------------------------------------------------------------------------------------------

const jsonData = require("./task2.json")

// function uniqueRecords (users) {
//     for (let i = 0; i < users.length; i++) {
//         for (let k = i + 1; k < users.length; k++) {
//             if (JSON.stringify(users[k]) === JSON.stringify(users[i])) {
//                 users.splice(k, 1)
//             }
//         }
//     }
//     return JSON.stringify(users, null, 4)
// }

// console.log(uniqueRecords(jsonData))

function uniqueRecords2 (users) {
    let separateArray2 = []
    users.forEach((user, index) => {
        for (let comparedUser = user + 1; comparedUser < users.length; comparedUser++)
            if (JSON.stringify(comparedUser) === JSON.stringify(user)) {
                users.splice(comparedUser, 1)
            }
    
    })
    return JSON.stringify(users, null, 4)
}

console.log(uniqueRecords2(jsonData))
