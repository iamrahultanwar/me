package main

import (
	"fmt"
	"io"
	"os"
)

// methods blueprint
// insert
// search
// valid binary tree

type Node struct {
	Key   int
	Left  *Node
	Right *Node
}

func (n *Node) End() bool {
	if n == nil {
		return true
	}
	return false
}

// insert
func (n *Node) Insert(k int) *Node {
	if k < n.Key { // left leaf
		if n.Left.End() {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	} else if k > n.Key { // right leaf
		if n.Right.End() {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	}
	return n
}

// search
func (n *Node) Search(k int) bool {

	if n.End() {
		return false
	}

	if k < n.Key { // left leaf
		return n.Left.Search(k)
	} else if k > n.Key { // right leaf
		return n.Right.Search(k)
	}
	return true

}

func print(w io.Writer, node *Node, ns int, ch rune) {
	if node == nil {
		return
	}
	for i := 0; i < ns; i++ {
		fmt.Fprint(w, " ")
	}
	fmt.Fprintf(w, "%c:%v\n", ch, node.Key)
	print(w, node.Left, ns+2, 'L')
	print(w, node.Right, ns+2, 'R')
}

func main() {
	tree := &Node{Key: 8} // head
	tree.Insert(3).Insert(1).Insert(6).Insert(4)
	tree.Insert(10)
	print(os.Stdout, tree, 0, 'M')

	fmt.Println(tree.Search(11))

}
