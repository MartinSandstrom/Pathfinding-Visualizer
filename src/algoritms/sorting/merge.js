export const mergeSort = (array, allParts = []) => {
    if (array.length < 2) {
        return { merged: [...array], allParts };
    }

    const left = array.splice(0, array.length / 2);

    const leftM = mergeSort(left, allParts);
    const arrayM = mergeSort(array, allParts);

    const leftMArray = leftM.merged;
    const arrayMArray = arrayM.merged;

    const merged = merger([...leftMArray], [...arrayMArray]);

    allParts.push(merged);

    return { merged: merged, allParts };
};

function merger(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}
