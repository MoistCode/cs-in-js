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
};