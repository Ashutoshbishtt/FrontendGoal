Array.prototype.myReduce = function (cb, startValue) {
  let acc = startValue;

  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, cur, i, this);
  }
  return acc;
};

const values = [1, 2, 3, 4, 5, 6];

const finalValue = values.myReduce((acc, cur, index, arr) => {
  return acc + cur;
}, 10);
console.log(finalValue);
