function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        document.write(arr[i] + " \t");
        if (i % 10 === 9) {
            document.write("<br/>");
        }
    }
    if (i % 10 === 0) {
        document.write("<br/>");
    }
}
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
let minValue = findMin(nums);
let maxValue = findMax(nums);
dispArr(nums);
document.write("The minimum value is: " + minValue);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);