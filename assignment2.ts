// First Question
function sumOfEvenNumbers() {
    let sum = 0;
    for (let i = 2; i <= 20; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumOfEvenNumbers());

// Second Question
function printEvenNumbers(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
printEvenNumbers(arr1);

// Third Question
function removeEvenNumbers(arr: number[]) {
    const result = arr.filter((num) => num % 2 !== 0);
    return result;
}

const arr2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(removeEvenNumbers(arr2));

// Fourth Question
function areaOfCircle(radius: number) {
    return 3.142 * radius ** 2;
}

console.log(areaOfCircle(2));

// Fifth Question
function removeNumbersLessThan50(arr: number[]) {
    const result = arr.filter((num) => num >= 50);
    return result;
}

const arr3: number[] = [58, 62, 14, 25, 50, 14, 99];
console.log(removeNumbersLessThan50(arr3));

// Sixth Question
function findGreatest(arr: number[]) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr4: number[] = [58, 62, 14, 25, 50, 14, 99];
console.log(findGreatest(arr4));
