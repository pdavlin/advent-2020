import { readInputFromFile } from '../utils/main.ts';

const inputArray: string[] = await readInputFromFile('/home/pdavlin/development/aoc-2020/day3/input.txt');

const inputLineLen = inputArray[0].length;

const checkForTree = (line: string, lineNumber: number, modTarget: number) => {
    const positionToCheck = ((modTarget * (lineNumber - 1))) % inputLineLen
    let positions = line.split('');
    return positions[positionToCheck] === '#'
}

const checks = [
    {right: 1, down: 1},
    {right: 3, down: 1}, // Part 1 solution
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2},
]
let countProduct: number = 1;

checks.forEach(checkParams => {
    let count = 0
        inputArray.forEach((line, index) => {
            if (index % checkParams.down === 0) {
                let lineToCheck = index + 1
                if (checkForTree(line, lineToCheck, (checkParams.right / checkParams.down))) {
                    count += 1;
                } 
            }
        })
        if (checkParams.right === 3) {
            console.log(`Problem 1 solution: ${count}`)
        }
        countProduct = countProduct * count;
})
console.log(`Problem 2 solution: ${countProduct}`)
