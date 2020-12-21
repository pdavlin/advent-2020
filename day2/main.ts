import { readInputFromFile } from '../utils/main.ts';

const inputArray: string[] = await readInputFromFile('/home/pdavlin/development/aoc-2020/day2/input.txt');

function parseInputLine(line: string) {
    let components = line.split(' ');
    const passwordComponents = {
        firstNumArg: +components[0].split('-')[0],
        secondNumArg: +components[0].split('-')[1],
        targetLetter: components[1].split(':')[0],
        pwArray: components[2].split('')
    }
    return passwordComponents;

}

const countOccurrences = (arr:any, val:any) =>
  arr.reduce((a:any, v:any) => (v === val ? a + 1 : a), 0);


let numCorrectLines = 0;

inputArray.forEach(line => {
    let pwComponents = parseInputLine(line)
    let numTimesInInput = countOccurrences(pwComponents.pwArray, pwComponents.targetLetter)
    if (numTimesInInput >= pwComponents.firstNumArg && numTimesInInput <= pwComponents.secondNumArg) {
        numCorrectLines +=1;
    }
})
console.log(`Policy 1: ${numCorrectLines} correct passwords`);

numCorrectLines = 0;
inputArray.forEach(line => {
    let pwComponents = parseInputLine(line)
    const numInFirstPosition = pwComponents.pwArray[pwComponents.firstNumArg - 1] === pwComponents.targetLetter
    const numInThirdPosition = pwComponents.pwArray[pwComponents.secondNumArg - 1] === pwComponents.targetLetter
    if ((numInFirstPosition && !numInThirdPosition) || (!numInFirstPosition && numInThirdPosition)) {
        numCorrectLines += 1;
    }
})

console.log(`Policy 2: ${numCorrectLines} correct passwords`);
