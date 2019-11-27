export const bubbleSort = array => {
    const allArrays = [];
    let keepSwapping = true;
    while (keepSwapping) {
        keepSwapping = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                // SWAP
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                keepSwapping = true;
                allArrays.push([...array]);
            }
        }
    }
    return allArrays;
};
