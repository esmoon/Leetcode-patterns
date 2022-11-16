class Node {
  constructor(left, right, val) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

class Tree {
  constructor(root) {
    this.root = null;
  }

  createRoot(val) {
    this.root = new Node(null, null, val);
  }

  addLeftNode(node, val) {
    node.left = new Node(null, null, val);
  }

  addRightNode(node, val) {
    node.right = new Node(null, null, val);
  }
}

let tree = new Tree();
tree.createRoot(3);
tree.addLeftNode(tree.root, 9);
tree.addRightNode(tree.root, 20);
tree.addRightNode(tree.root.right, 7);
tree.addLeftNode(tree.root.right, 15);

let tree2 = new Tree();
tree2.createRoot(1);
tree2.addLeftNode(tree2.root, 2);
tree2.addRightNode(tree2.root, 3);
tree2.addLeftNode(tree2.root.left, 4);
tree2.addRightNode(tree2.root.left, 5);

const func = (root) => {
  let rootArr = [root];
  let depth = 0;
  if (!root) return 0;

  while (rootArr.length) {
    let qLen = rootArr.length;
    console.log('while loop 1');
    debugger;
    for (let i = 0; i < qLen; i++) {
      debugger;
      let curr = rootArr.shift();
      console.log(curr.val, '=>>>>>>>>>>>>>>> current for loop');
      console.log('for loop');
      if (!curr.left && !curr.right) {
        console.log('if выхода из функции');
        depth++;
        return depth;
      }
      if (curr.left) rootArr.push(curr.left);
      if (curr.right) rootArr.push(curr.right);
      console.log(depth, '=>>>>>>> глубина, выход из for loop ');
    }
    console.log(root.val, '=>>>>>>>>>>>>>>> рут после for loop');
    depth++;
    console.log('while loop 2');
  }
  return depth;
};

console.log(func(tree2.root));
