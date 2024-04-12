const kthSmallestElement = (arr, k) => {
    arr.sort((a, b) => a-b);

    if (k > arr.length || k < 1) {
        return null;
    }

    return arr[k-1];
}

const arr = [2,4,6,11,24,37];
const k = 3

console.log(kthSmallestElement(arr, k));