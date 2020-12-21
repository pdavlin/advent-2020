import { readInputFromFile } from '../utils/main.ts';

const inputArray: string[] = await readInputFromFile('/home/pdavlin/development/aoc-2020/day2/input.txt');

function parseInputLine(line: string) {
    let components = line.split(' ');
    const passwordComponents = {
        minLength: +components[0].split('-')[0],
        maxLength: +components[0].split('-')[1],
        targetLetter: components[1].split(':')[0],
        input: components[2]
    }
    return passwordComponents;

}

const countOccurrences = (arr:any, val:any) =>
  arr.reduce((a:any, v:any) => (v === val ? a + 1 : a), 0);


let numCorrectLines = 0;

inputArray.forEach(line => {
    let pwComponents = parseInputLine(line)
    let numTimesInInput = countOccurrences(pwComponents.input.split(''), pwComponents.targetLetter)
    if (numTimesInInput >= pwComponents.minLength && numTimesInInput <= pwComponents.maxLength) {
        numCorrectLines +=1;
    }
})

console.log(numCorrectLines)
