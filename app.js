console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 == 0) {
    console.log("FIZZ", i);
  } else if (i % 5 == 0) {
    console.log("BUZZ", i);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

let count = 1;
while (count <= 100) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FIZZBUZZ", count);
  } else if (count % 3 == 0) {
    console.log("FIZZ", count);
  } else if (count % 5 == 0) {
    console.log("BUZZ", count);
  }
  count++;
}

count = 1;
do {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FIZZBUZZ", count);
  } else if (count % 3 == 0) {
    console.log("FIZZ", count);
  } else if (count % 5 == 0) {
    console.log("BUZZ", count);
  }
  count++;
} while (count <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log(value);
console.log(n);

for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log("Found value!");
    break;
  } else if (i == n) {
    console.log("Did not find value");
  }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % fizzDivisor == 0) {
    console.log("FIZZ", i);
  } else if (i % buzzDivisor == 0) {
    console.log("BUZZ", i);
  }
}
console.log("fizzDivisor", fizzDivisor);
console.log("buzzDivisor", buzzDivisor);
