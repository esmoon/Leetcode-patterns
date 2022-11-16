// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// Example 3:
// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

const array1 = ['x', 'x', 'y', 'y'];
const array2 = ['c', 'f', 'j'];
const array3 = ['a', 'b', 'c', 'd', 'f', 'j'];

const func = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.ceil((start + end) / 2);
    if (array[middle] == target) return middle;
    if (array[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  // const N = array.length;
  // let l = 0,
  //   r = N;

  // while (l < r) {
  //   let mid = l + ((r - l) >> 1);
  //   // As we want the upperbound value, it should update the left pointer
  //   // even if we found a letter that equals to target:
  //   array[mid] <= target ? (l = mid + 1) : (r = mid);
  // }

  // return array[l % N];
};

console.log(func(array3, 'b'));
