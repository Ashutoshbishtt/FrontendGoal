function counter() {
  let count = 0;

  return function (params) {
    count += 1;
    return count;
  };
}

let countIncrementer = counter();

console.log(countIncrementer());
console.log(countIncrementer());
