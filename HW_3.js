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

function chosenOnes(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].registrationDate == "09.10.2021" || users[i].registrationDate == "10.10.2021") {
        console.log(users[i])
        }
        else {
            continue
        }
    }
}

chosenOnes(users)

// ------------------------------------------------------------------------------------------------------------

const jsonData = require("./task2.json")

function uniqueRecords (users) {
    for (let i = 0; i < users.length; i++) {
        for (let k = i + 1; k < users.length; k++) {
            if (JSON.stringify(users[k]) === JSON.stringify(users[i])) {
                users.splice(k, 1)
            }
        }
    }
    return JSON.stringify(users, null, 4)
}

console.log(uniqueRecords(jsonData))

// ---------------------------------------------------------------------------------------------------------------

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
]

function companyOverview (enterprises) {
  
  for (let i = 0; i < enterprises.length; i++) {
      let employees_sum = 0;
      for (let k = 0; k < enterprises[i].departments.length; k++) {
           employees_sum += enterprises[i].departments[k].employees_count
      }
      if (enterprises[i].departments[0].employees_count != 0) {
        console.log(enterprises[i].name + ` (${employees_sum} сотрудников)`)
      } 
      else {
        console.log(enterprises[i].name + ` (Нет сотрудников)`)
      }
      for (let k = 0; k < enterprises[i].departments.length; k++) {
        if (enterprises[i].departments[k].employees_count != 0) { 
            console.log(`- ` + enterprises[i].departments[k].name + ` (${enterprises[i].departments[k].employees_count} сотрудников)`)
        }
        else {
            console.log(`- ` + enterprises[i].departments[k].name + ` (Нет сотрудников)`)
        }
    }
   } 
}

companyOverview(enterprises)

// ----------------------------------------------------------------------------------------------------------

function getEnterpriseName (value) {
  for (let i = 0; i < enterprises.length; i++) {
    for (let k = 0; k < enterprises[i].departments.length; k++) {
      if (value == enterprises[i].departments[k].id) {
        return enterprises[i].name
      }
      else if (value == enterprises[i].departments[k].name) {
        return enterprises[i].name
      }
      else {
        continue
      }
    }
  }
}

console.log(getEnterpriseName("Отдел охраны труда"))