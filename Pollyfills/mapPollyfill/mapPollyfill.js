Array.prototype.myMap = function (cb) {
  const ans = [];

  for (let i = 0; i < this.length; i++) {
    ans.push(cb(this[i], i, this));
  }
  return ans;
};

const nums = [1, 3, 45, 2, 34];

const ans = nums.myMap((el, indx, arr) => {
  return el * 2;
});
