export const quickSort = (array, allParts = []) => {
    if (array.length < 2) {
        return { sorted: [...array], allParts };
    }
    const pivot = array.pop();
    const smallerThanArray = [];
    const largerThanArray = [];

    array.forEach(n => {
        if (n <= pivot) {
            smallerThanArray.push(n);
        } else {
            largerThanArray.push(n);
        }
    });
    const prevObj = quickSort(smallerThanArray, allParts);
    const largObj = quickSort(largerThanArray, allParts);
    const sorted = [...prevObj.sorted, pivot, ...largObj.sorted];
    allParts.push(sorted);
    return { sorted, allParts };
};
