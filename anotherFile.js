function yolochka1 () {
    console.log()
}

t1 = 10;
t2 = 20;
t3 = 30;
t4 = 40;

let f1 = () => {console.log("Sasi")} // same as yolochka1
let f2 = (t1, t2) => {console.log("Sum =", t1 + t2)} 

let f3 = (t1 > t2) ?
    (tt3, tt4) => console.log("Order = ", tt1 + tt2) :
    (tt3, tt4) => console.log("Order =", tt1 - tt2) ;

f1()
f2(t1, t2)
f3(t3, t4)