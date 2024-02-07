function inplaceArray(arr: number[]): number[] {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

console.log(inplaceArray([12, 23, 12, 9, 54]));
