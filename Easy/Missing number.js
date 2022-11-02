const array1 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// 1 2 3 4 5 6 7 9
const array2 = [0, 1, 3];

const func = (array) => {
  const n = array.length;
  let map = {};
  const result = [];
  const t = Array.from({ length: n + 1 }, (v, k) => k++);
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    map[element] = map[element] | 0;
    map[element]++;
  }

  for (i of t) {
    if (i in map) {
      delete map[i];
    } else {
      result.push(i);
    }
  }
  return result[0];
};

console.log(func(array2));
