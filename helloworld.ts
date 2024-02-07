function CheckOdd(num: number): string {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let marks = 45;

console.log(CheckOdd(marks));

for (let i = 0; i <= marks; i++) {
    console.log(CheckOdd(i));
}
