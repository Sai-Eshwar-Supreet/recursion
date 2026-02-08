function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const result = [];

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        let first = left[i];
        let second = right[j];

        if(first <= second){
            result.push(first);
            i++;
        }
        else{
            result.push(second);
            j++;
        }
    }
    result.push(...left.slice(i));
    result.push(...right.slice(j));

    return result;
}

export { mergeSort }