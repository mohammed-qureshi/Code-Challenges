const a = [5, 3, 4];
const b = [2, 6, 1];

// Combines array a and b into array c
let c =  a.concat(b);
console.log(c);

// Puts array c in numerical order
c.sort((x, y) => {
    return x-y;
});

console.log(c)


// https://www.w3schools.com/js/js_array_sort.asp
// Check this link to learn about sort and the compare function