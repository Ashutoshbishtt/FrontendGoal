const nums = [1, 2, 4, 543, 4234, 324, 2332, 454, 4, 454, 23, 232];

Array.prototype.myFilter((cb) => {
  const ans = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
});

let ans = nums.myFilter((el, index, arr) => {
  return el > 500;
});
