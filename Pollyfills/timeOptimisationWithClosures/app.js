function createFunction() {
  const a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    return a[index];
  };
}

const find = createFunction();

console.log(find(50000));
console.log(find(10000));
