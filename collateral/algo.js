var all = {}
function subsetSum(numbers, target, partial) {
  var s, n, remaining;
  partial = partial || [];
  s = partial.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (s === target) {
    if (!all[target]) { all[target] = []; }
    all[target].push(partial);
  }
  if (s >= target) { return; }
  for (var i = 0; i < numbers.length; i++) {
    n = numbers[i];
    remaining = numbers.slice(i + 1);
    subsetSum(remaining, target, partial.concat([n]));
  }
}

[1,2,3,4,5,6,7,8,9,10,11,12].forEach(v => {console.log(
    subsetSum([1,2,3,4,5,6,7,8,9,10,11,12],v))})
console.log(JSON.stringify(all));

