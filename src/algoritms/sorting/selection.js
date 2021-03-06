export const selectionSort = array => {
    const all = [];

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min > i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        all.push([...array]);
    }

    return all;
};
