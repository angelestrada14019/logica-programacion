function countingSort1(arr) {
    let counts =Array(100).fill(0);
    arr.forEach(element =>++counts[element])
    return counts
}