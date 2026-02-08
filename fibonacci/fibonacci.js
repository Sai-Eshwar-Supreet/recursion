
function fibs(n){
    const result = [];

    let prev = 0;
    let cur = 1;

    for(let i = 0; i < n; i ++){
        result.push(prev);
        [prev, cur] = [cur, prev + cur];
    }
    return result;
}

function fibsRec(n){

    const result = [];

    function helper(n, prev, cur, result){

        if(n === 0) return;

        result.push(prev)

        helper(n - 1, cur, prev + cur, result);
    }

    helper(n, 0, 1, result);

    return result;
}

export { fibs, fibsRec }