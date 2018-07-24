var sum = 0;
var number = 1;
do {
    sum += number;         // -- body
    number++;              // -- updater
} while (number <= 50);   // -- condition
alert("Sum = " + sum);    // => Sum = 1275
