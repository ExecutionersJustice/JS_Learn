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