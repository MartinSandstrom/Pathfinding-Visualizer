
const binarySearch = (sortedList, value) => {
  const pivotIndex = Math.floor(sortedList.length / 2);
  const pivot = sortedList[pivotIndex];

  if (pivot === value) {
    return value;
  } else if (pivot < value) {
    return binarySearch(sortedList.slice(0,pivotIndex));
  }
  return binarySearch(sortedList.slice(pivotIndex, sortedList.length));
}


console.log('Binary search:', binarySearch([1,2,3,4,5,6,7], 4));
