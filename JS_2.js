let item_1 = 0;

while (item_1 < 100) {
    console.log(item_1 + "DVP");
    item_1++;
}

console.log(item_1);

for (let i = 0; i < 10; i++) {
    console.log(i, "= FOR")
}
  
let names = ["Kate", "Alex", "Ivan", "Ignat", "Andrey", "Vika"];

let items = names.length
let count = 0;

while (count < items) {
    console.log(names[count])
    count++
}

console.log(items);


for (let item in names) {
    console.log(item, names[item])
}

for (let item of names) {
    console.log(item)
}