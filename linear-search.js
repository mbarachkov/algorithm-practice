//create function that performs a linear search
function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    // Item not found in the array.
    return null;
}
//test case array 
var arr = [1, 4, 5, 6, 7, 8, 9];
//these console.logs will display the index number of the target item
//this will return 4
console.log(linearSearch(arr, 7))