const { 
    generateRandomArrayOfNums,
    hasSameContents,
} = require('./helpers');

const [arr, sortedArr] = generateRandomArrayOfNums();
const redBackground = '\x1b[30m"\x1b[41m';
const greenBackground = '\x1b[30m"\x1b[42m';

function printTestInConsole(fn, name) {
    let hasSameContent = hasSameContents(fn(arr), sortedArr);

    console.log(hasSameContent ? greenBackground : redBackground, `${name}: ${hasSameContent}`);
}

function bubbleSort() {
    let copiedArr = [...arr];
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < copiedArr.length - 1; i++) {
            if (copiedArr[i + 1] < copiedArr[i]) {
                let lesser = copiedArr[i + 1];
                let greater = copiedArr[i];
    
                copiedArr[i + 1] = greater;
                copiedArr[i] = lesser;
    
                swapped = true;
            }
        }
    }

    return copiedArr;
}

printTestInConsole(bubbleSort, 'Bubble Sort');