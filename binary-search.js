//create a function that will partition an array looking for specific integers
function binary_Search(items, value) {
    //start of the indexes is always 0
    let firstIndex = 0;
    //this will calculate the last index of the array
    let lastIndex = items.length - 1;
    //this will calculate the partition of the array
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);


    while (items[middleIndex] != value && firstIndex < lastIndex) {
        //if the middle index is greater than the target number
        //then the target must be to the left of the middle index
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        //if the middle index is lower than the target number
        //then the target must be to the right of the middle index
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    //if the target number is equal to the middle index then the loop is done
    return (items[middleIndex] != value) ? -1 : middleIndex;
}
//test case array
const items = [1, 2, 3, 4, 5, 7, 8, 9];

//these console logs will display the index number of the target integer
//this will return 1
console.log(binary_Search(items, 2));
//this will return 5
console.log(binary_Search(items, 7));
