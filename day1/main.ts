import { readInputFromFile } from '../utils/main.ts';

const inputArray: number[] = await readInputFromFile('/home/pdavlin/development/aoc-2020/day1/input.txt', true);

let op1: number, op2: number;

inputArray.forEach(value => {
    let diff = 2020 - value;
    let found: boolean = false;
    if (inputArray.includes(diff) && found === false) {
        op1 = value;
        op2 = diff;
        console.log(op1*op2);
        found = true;
    }
})

for (let i = 0; i < inputArray.length; i++) {
    let diff1 = 2020 - inputArray[i];
    let found = false;
    for (let j = i; j < inputArray.length; j++) {
        let diff2 = diff1 - inputArray[j]
        if (inputArray.includes(diff2) && !found) {
            console.log(inputArray[i] * inputArray[j] * diff2)
            break;
        }
    }
}

// console.log(op1, op2)