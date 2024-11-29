// function findThirdLargest(arr) {
//     if (arr.length < 3) {
//         return "Array doesn't have enough elements.";
//     }

//     let first = second = third = Number.NEGATIVE_INFINITY;

//     for (let num of arr) {
//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second) {
//             third = second;
//             second = num;
//         } else if (num > third) {
//             third = num;
//         }
//     }

//     return third;
// }

// // Example usage:
// const myArray = [10, 5, 8, 12, 7, 15, 11];
// const result = findThirdLargest(myArray);
// console.log("Third largest number:", result);


function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "Array doesn't have enough elements.";
    }

    let first = arr[0];
    let second = arr[1];
    let third = arr[2];

    for (let i = 3; i < arr.length; i++) {
        let num = arr[i];

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    return third;
}

// Example usage:
const myArray = [10, 5, 8, 12, 7, 15, 16];
const result = findThirdLargest(myArray);
console.log("Third largest number:", result);