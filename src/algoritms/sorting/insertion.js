export const insertionSort = array => {
    const allExamples = [];
    for (let i = 1; i < array.length; i++) {
        let tempi = i;
        for (let j = i - 1; j >= 0; j--) {
            const prev = array[j];
            const curr = array[tempi];
            if (curr < prev) {
                swap(array, j, tempi);
                allExamples.push([...array]);
                tempi--;
            }
        }
    }
    return allExamples;
};

const swap = (array, curIndex, swapIndex) => {
    var temp = array[curIndex];
    array[curIndex] = array[swapIndex];
    array[swapIndex] = temp;
    return array;
};
