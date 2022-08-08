// we can relate them with forEach and map. forEach will modify the array, here splice will modify the array and map won't change the array likewise slice also

/*
    slice(startingIndex, endingIndex);
    slice has only two arguments firstOne is staringIndex that we start removing elements and secondIndex is the index upto where we need to remove.
    Important to notice thatsecond Index is the indexnumber
*/

/*
    splice(startingIndex, noOfElementsToRemove, item 1, item 2, ....item n );
    splice can have any number of arguments firstOne is staringIndex that we start removing elements and secondIndex is the number of elements to remove and remaining elements are.
    Important to notice thatsecond Index is the indexnumber
*/

// 1.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.splice(5))  // as previously mentioned, splice will modify the array and return the removed items as array. first argument in splice(5) is indicating index. So, from index 5, all elements up to the last will be removed. that means [6, 7, 8].
console.log(arr); // since [6,7,8] is removed, now the array will be [1,2,3,4,5]

console.log(arr.splice(1, 3, 'hii', 'broo')); 
/*
    current our array is [1,2,3,4,5] since we splice it before.
    here first argument is 1, means removal starting from first index means the value here is "2"
     and second argument is 3 means we have to remove 3 elements from the starting index that is mentioned in the first argument.
     So, after removal elements are [2,3,4] and the array will be [1,5].
    The remaining arguments will be added as the elements in the current array from the starting index that is mentioned in the first argument.
    So, it will be [1, 'hii', 'broo', 5].
*/
console.log(arr);  // the current array  will be [1, 'hii', 'broo', 5].

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(nums.slice(5))  // as previously mentioned, splice won't modify the array and return the removed items as array. first argument in slice(5) is indicating index. So, from index 5, all elements up to the last will be removed. that means [6, 7, 8].
console.log(nums);  // since slice won't modify the array, nums remain same [1, 2, 3, 4, 5, 6, 7, 8];
console.log(nums.slice(1, 3));
/*
    our current array is [1, 2, 3, 4, 5, 6, 7, 8]
     here first argument is 1, means removal starting from first index means the value here is "2"
     and second argument is 3 means we have to remove upto index 3 leaving index 3
     so, starting from value 2 and removes upto value 3 since it's index is 2.
     removed arry is [2,3]
     since we are using slice, our array won't affect.
*/

// 2.

const data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(data.splice(NaN, 4, "NaN is treated as 0"));
/*
    if NaN is at the starting argument it is considered as 0th index.
    from 0th index, it will remove 4 elements since the second argument in the splice is number of elements to remove.
    [1,2,3,4] will be removed and and the 3rd argument will be added as the staring index since the 1st argument is NaN which is consideres as 0th index.
    so the array will be [ 'NaN is treated as 0', 5, 6, 7, 8 ]
*/

console.log(data) // the array will be [ 'NaN is treated as 0', 5, 6, 7, 8 ]
console.log(data.splice(1, NaN, 'I am Santosh'))
/*
    No element will be removed, 
    since the starting index is 2 and the next argument is NaN 
    means it is 0. means number of elements removed is 0.
    previously the array is [ 'NaN is treated as 0', 5, 6, 7, 8 ]
    and since the third argument is there which will be added at the stating index that is mentioned in the first argument and remaining elements all are added after the element
    current array will be [ 'NaN is treated as 0', 'I am Santosh', 5, 6, 7, 8 ].

*/
console.log(data)  // array will be [ 'NaN is treated as 0', 'I am Santosh', 5, 6, 7, 8 ].


// 3. negitive arguments

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.splice(-2));
/*
    negative arguments will be considered from backside.
    first argument is -2, means starting from backside. -1 refer to value 8 and -2 refer to value 7.
    Now, -2 means, from value 7 it's gonna remove all elements.
    So, [7, 8] will be removed.
    Since we are using splice, the array will be affected.
    current will be [1, 2, 3, 4, 5, 6];
*/
console.log(numbers)

console.log(numbers.splice(-2,1));
/*
    first argument is -2, means two elements from backside. 
    second argument is 1. second argument in splice is number of elements to remove. So, from last two element we nhave to remove one element.
    previous array is [1, 2, 3, 4, 5, 6], last two element is value 5. from there we need to remove only one item. means we need to remove only the value 5.
    the removed array is [5].
    Now, current array is [ 1, 2, 3, 4, 6 ]

*/

console.log(numbers); // current array is [ 1, 2, 3, 4, 6 ]


// but it acts different when we are working with negative arguments in slice

 // current array is [ 1, 2, 3, 4, 6 ]

console.log(numbers.slice(-2));

/*
    negative arguments will be considered from backside.
    first argument is -2, means starting from backside. -1 refer to value 8 and -2 refer to value 7.
    Now, -2 means, from value 7 it's gonna remove all elements.
    So, [4, 6] will be removed.
    Since we are using slice, the array won't be affected.
    current array will be [1, 2, 3, 4, 6];
*/
console.log(numbers.slice(-2, 1));
/*
    it won't remove any elements. since second argument in the slice is the index number to where we have to remove.
    -2 here means index 3 and second argument is 1 means index 1. since removal only occurs forward but not backwards.
    So, no elements removed.
*/

console.log(numbers.slice(-2, NaN));
/*
    first argument is -2, means it's starting index for removal and it refers to index 3 and second argument is NaN means it's 0.
    So, removal won't happen backwords. So nothing removes.
*/

