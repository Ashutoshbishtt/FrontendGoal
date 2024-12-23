Array.prototype.myFilter = function (cb) {
  const ans = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
};

const nums = [1, 2, 4, 543, 4234, 324, 2332, 454, 4, 454, 23, 232];

let ans = nums.myFilter((el, index, arr) => {
  return el > 500;
});

console.log(ans);
