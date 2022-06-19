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

// tree

//    		  1
// 		   /     \
// 		2           3
// 	   / \         / \
// 	 4     5     6     7
//  / \   / \   / \   / \
// 8   9 10 11 12 13 14 15
