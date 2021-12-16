// Two Conditions
// 1. d[a] < d[b] < d[c]
// 2. d[a] + d[b] + d[c] <= t

d = [1, 2, 3, 4, 5];
t = 8;
let right = [];

// Finds the numbers that satisfy the first condition and
// pushes it in the array "right"
for (let a=0; a < d.length; a++) {
    for (let b=0; b < d.length; b++) {
        for (let c=0; c < d.length; c++) {
            if (d[a] < d[b] && d[b] < d[c]) {
                right.push(new Array(d[a], d[b], d[c]));
            }
        }
    }
}

// console.log(right)
let correct = []

// Finds the numbers that satisfy the second condition from
// the "right" array and pushes it to the array "correct"
for (let i=0; i < right.length; i++) {
    if (right[i][0] + right[i][1] + right[i][2] <= t) {
        correct.push( new Array (right[i][0], right[i][1], right[i][2]))
    }
}

console.log(correct);
console.log(`There are ${correct.length} triplets that satisfy both conditions.`)
