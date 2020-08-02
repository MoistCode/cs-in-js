const { 
    generateRandomArrayOfNums,
    hasSameContents,
} = require('./helpers');

const [arr, sortedArr] = generateRandomArrayOfNums();
const incorrect = '\x1b[31m';
const correct = '\x1b[32m';

function printTestInConsole(fn, name) {
    let hasSameContent = hasSameContents(fn(arr), sortedArr);

    console.log(hasSameContent ? correct : incorrect, `${name}: ${hasSameContent}`);
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

function insertionSort() {
    let copiedArr = [...arr];

    for (let i = 1; i < copiedArr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (copiedArr[i] < copiedArr[j]) {
                const spliced = copiedArr.splice(i, 1);
                copiedArr.splice(j, 0, spliced[0]);
            }
        }
    }

    return copiedArr;
}

function mergeSort() {
    
}

printTestInConsole(bubbleSort, 'Bubble Sort');
printTestInConsole(insertionSort, 'Insertion Sort');
printTestInConsole(mergeSort, 'Merge Sort');