// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


/*
prev = null = p
current = c
next = n
p          c  n
        <- 1  2 -> 3 -> 4

current.next = это связь на следующий элемент в списке
head.next = prev - я разъединяю связь на следующий элемент и переношу стрелку связи на prev (предыдущий элемент)
prev = head - я перемещаю prev на текущий элемент итерации 
head = next - я перемещаю текущий элемент итерации (head) на следующий элемент (next)
*/

const array = [1, 2, 3, 4, 5];

const func = (head) => {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// runtime - 62 ms, faster than 97.73% of JavaScript online submissions for Reverse Linked List.
// memory - 43.8 mb

console.log(func(array));
