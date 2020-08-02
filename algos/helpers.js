function sortNumberAscending(a, b) {
    return a - b;
}

module.exports = {
    generateRandomArrayOfNums() {
        const arr = [];
    
        for (let i = 0; i < 50; i++) {
            arr.push(Math.floor((Math.random() * 1000000) + 1));
        }

        const sortedArr = [...arr].sort(sortNumberAscending);
        
        return [arr, sortedArr];
    },

    hasSameContents(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        let isEqual = true;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                isEqual = false;
                break;
            }
        }

        return isEqual;
    }
};