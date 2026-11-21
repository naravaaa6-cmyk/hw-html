let num = Number(prompt("İkirəqəmli ədəd daxil edin"));

while (num < 100) {
    num = num + 7;
}

console.log(num);


for (let i = 100; i <= 999; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }
}


let hasil = 1;
for (let i = 1; i <= 10; i++) {
    hasil = hasil * i;
}
console.log(hasil);


let text = prompt("Mətn daxil edin");
console.log(text.indexOf("."));


