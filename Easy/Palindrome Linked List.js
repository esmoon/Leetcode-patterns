// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

const array = [1, 2, 2, 4];
const array2 = [1, 2, 2, 1];
const array3 = [1, 2];

const func = (head) => {
  let prev = head;
  let next = head;

  while (next != null || next?.next != null || prev !== next) {
    prev = prev?.next;
    next = next?.next;
  }
  if (prev === next) {
    return true;
  } else {
    return false;
  }
};

console.log(func(array2));
