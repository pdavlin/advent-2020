import { readInputFromFile } from '../utils/main.ts';

const inputArray: string[] = await readInputFromFile('/home/pdavlin/development/aoc-2020/day3/input.txt');

const inputLineLen = inputArray[0].length;

const parseInputLine = (line: string, lineNumber: number) => {
    const positionToCheck = ((3 * (lineNumber - 1))) % inputLineLen
    let positions = line.split('');
    return positions[positionToCheck] === '#'
}

let count = 0;

inputArray.forEach((line, index) => {
    if (parseInputLine(line, index + 1)) {
        count += 1;
    } 
})

console.log(count)