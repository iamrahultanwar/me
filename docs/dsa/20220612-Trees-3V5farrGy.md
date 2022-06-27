---
title : Trees
sidebar_position : 11
---
# Trees

### Key Terms

*   #### Tree
    
    A data structure that consists of nodes, each with some value and pointers to child-nodes, which recursively form **subtrees** in the tree.
    
    The first node in a tree is referred to as the **root** of the tree, while the nodes at the bottom of a tree (the nodes with no child-nodes) are referred to as **leaf nodes** or simply **leaves**. The paths between the root of a tree and its leaves are called **branches**, and the **height** of a tree is the length of its longest branch. The **depth** of a tree node is its distance from its tree's root; this is also known as the node's **level** in the tree.
    
    A tree is effectively a **graph** that's **connected**, **directed**, and **acyclic**, that has an explicit root node, and whose nodes all have a single **parent** (except for the root node, which effectively has no parent). Note that in most implementations of trees, tree nodes don't have a pointer to their parent, but they can if desired.
    
    There are many types of trees and tree-like structures, including **binary trees**, **heaps**, and **tries**.
    
*   #### Binary Tree
    
    A **tree** whose nodes have up to **two** child-nodes.
    
    The structure of a binary tree is such that many of its operations have a logarithmic time complexity, making the binary tree an incredibly attractive and commonly used data structure.
    
*   #### K-ary Tree
    
    A **tree** whose nodes have up to **k** child-nodes. A **binary tree** is a k-ary tree where **k == 2**.
    
*   #### Perfect Binary Tree
    
    A **binary tree** whose interior nodes all have two child-nodes and whose **leaf nodes** all have the same **depth**. Example:
    
```
           1           
        /     \        
     2           3     
    / \         / \    
  4     5     6     7  
 / \   / \   / \   / \ 
8   9 10 11 12 13 14 15

```
*   #### Complete Binary Tree
    
    A **binary tree** that's _almost_ **perfect**; its interior nodes all have two child-nodes, but its **leaf nodes** don't necessarily all have the same **depth**. Furthermore, the nodes in the last **level** of a complete binary tree are as far left as possible. Example:
    
```
              1
           /     \
          2       3
        /   \   /   \
       4     5 6     7
     /   \
    8     9
    
```

    
Conversely, the following binary tree _isn't_ complete, because the nodes in its last level aren't as far left as possible:
  ```  
              1
           /     \
          2       3
        /   \   /   \
       4     5 6     7
             /   \
            8     9
  ```
    
*   #### Balanced Binary Tree
    
    A **binary tree** whose nodes all have left and right **subtrees** whose **heights** differ by no more than 1.
    
    A balanced binary tree is such that the logarithmic time complexity of its operations is maintained.
    
    For example, inserting a node at the bottom of the following _imbalanced_ binary tree's left subtree would cleary not be a logarithmic-time operation, since it would involve traversing through most of the tree's nodes:
    
  ```  
                 1
              /     \
             2       3
           /
          4
        /
       8
      /
    10
 ```
 
 
The following is an example of a balanced binary tree:
  ```
              1
           /     \
          2       3
        /   \   /   \
       4     5 6     7
     /   \         /   
    10    9       8
```
   
*   #### Full Binary Tree
    
    A **binary tree** whose nodes all have either two child-nodes or zero child-nodes. Example:
 ```   
        1
     /     \
    2       3
          /   \
         6     7
       /   \
      8     9
```      

## Code implementation 
```go
package main

import (
	"fmt"
	"io"
	"os"
)

type Node struct {
	Left  *Node
	Right *Node

	Data int
}

type Tree struct {
	Root *Node
}

func (t *Tree) insert(data int) *Tree {
	if t.Root == nil {
		t.Root = &Node{Data: data, Left: nil, Right: nil}
	} else {
		t.Root.insert(data)
	}
	return t
}

func (n *Node) insert(data int) {
	if n == nil {
		return
	} else if data <= n.Data {
		if n.Left == nil {
			n.Left = &Node{Data: data, Left: nil, Right: nil}
		} else {
			n.Left.insert(data)
		}
	} else {
		if n.Right == nil {
			n.Right = &Node{Data: data, Left: nil, Right: nil}
		} else {
			n.Right.insert(data)
		}
	}
}

func print(w io.Writer, node *Node, ns int, ch rune) {
	if node == nil {
		return
	}

	for i := 0; i < ns; i++ {
		fmt.Fprint(w, " ")
	}
	fmt.Fprintf(w, "%c:%v\n", ch, node.Data)
	print(w, node.Left, ns+2, 'L')
	print(w, node.Right, ns+2, 'R')
}

func main() {

	tree := &Tree{}

	tree.insert(100).
		insert(-20).
		insert(-50).
		insert(-15).
		insert(-60).
		insert(50).
		insert(60).
		insert(55).
		insert(85).
		insert(15).
		insert(5).
		insert(-10)

	print(os.Stdout, tree.Root, 0, 'M')

}

//output

M:100
  L:-20
    L:-50
      L:-60
    R:-15
      R:50
        L:15
          L:5
            L:-10
        R:60
          L:55
          R:85


```


## References

<iframe width="950" height="534" src="https://www.youtube.com/embed/-oYitelECuQ" title="Data Structures in Golang - Binary Search Tree" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>