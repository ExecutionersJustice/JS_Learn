let item_1 = 5;
console.log(item_1);

let item_2 = 3;
console.log(item_2);

let item_3 = item_1 + item_2;
console.log(item_3);

let item_4 = "Yolochka";
console.log(item_4); 

console.log(item_3 + item_4); 
console.log(item_3 * item_4); 

let item_5 = item_3;

let item_6 = 15;
let item_6_type = typeof item_6;

console.log(`item_6 == ${item_6}, item_6_type == ${item_6_type}`);

let item_7 = String(item_6);
let item_7_type = typeof item_7;

console.log(`item_7 == ${item_7}, item_7_type == ${item_7_type}`);

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
   
if (age_1 < age_2) {
        console.log(`You don't have access because your age is ${age_1}. It is less than ${age_2}`)
}
else if (age_1 >= age_2 && age_1 < age_3) {
        console.log(`Welcome!`)
}
else if (age_1 > age_3) {
        console.log(`Keep calm and look Culture channel.`)
}
else {
        console.log(`Technical work.`)
}


const checkAge = function(age) {
   if (typeof age == "number" || typeof age == "string") {
        age = Number(age);
        if (! isNaN(age)) {
            if (age >= 18 && age < 60) {
                console.log(`Welcome!`)
            }
            else if (age < 18) {
                console.log(`You don't have access because your age is ${age}. It is less than 18.`)
            }
            else if (age > 59) {
                console.log(`Keep calm and look Culture channel.`)
            }
        }
        else {
            console.log("Error: your age must be a number.")
        }
    }
    else {
             console.log("Don't try to trick me.")
         }
}

let agePrompt = prompt("How old are you?");
checkAge(agePrompt);


checkAge("'10'");
checkAge("18");
checkAge("60");
checkAge("ABC");
checkAge("12Ivan")
checkAge(true);
checkAge(false);
checkAge(undefined);
checkAge(null);





