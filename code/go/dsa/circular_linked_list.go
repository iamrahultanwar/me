package main

import "fmt"

type LinkedList struct {
	Value  int
	IsHead bool
	Prev   *LinkedList
	Next   *LinkedList
}

func parseIndex(index []int) int {
	if len(index) == 1 {
		return index[0]
	}
	return 0
}

func main() {
	list := createLinkedList([]int{17, 20, 100})
	// list.insertIntoList(3, 10)
	// list.updateAtList(0, 100)
	// list.deleteAtList(3)
	list.printList()
	// fmt.Println(list.search(57))
}

func (l *LinkedList) printList() {
	fmt.Print(l.Value, " ")
	fmt.Println(l.isHead())
	if l.Next.isHead() == false {
		l.Next.printList()
	} else {
		fmt.Println()
	}
}

func createLinkedList(arr []int) *LinkedList {
	if len(arr) < 3 {
		panic("At least two values are required")
	}
	head := LinkedList{
		IsHead: true,
		Value:  arr[0],
		Prev:   nil,
		Next:   nil,
	}
	i := 1
	return makeList(&head, &head, i, arr)
}

func makeList(head *LinkedList, currList *LinkedList, index int, arr []int) *LinkedList {
	if index == len(arr) {
		head.Prev = currList
		currList.Next = head
		return head
	}
	nextList := LinkedList{
		IsHead: false,
		Prev:   currList,
		Value:  arr[index],
		Next:   nil,
	}
	currList.Next = &nextList
	index++
	return makeList(head, &nextList, index, arr)
}

func (list *LinkedList) insertIntoList(insertPos int, value int, index ...int) {
	i := parseIndex(index)
	if insertPos == i {
		temp := LinkedList{
			Value: list.Value,
			Next:  list.Next,
		}
		list.Value = value
		list.Next = &temp
		return
	}
	i++
	list.Next.insertIntoList(insertPos, value, i)
}

func (list *LinkedList) deleteAtList(deletePos int, index ...int) {
	i := parseIndex(index)
	if i == deletePos-1 {
		list.Next = list.Next.Next
		return
	}
	i++
	list.Next.deleteAtList(deletePos, i)
}

func (list *LinkedList) updateAtList(updatePos int, value int, index ...int) {
	i := parseIndex(index)
	if i == updatePos {
		list.Value = value
		return
	}
	i++
	list.Next.updateAtList(updatePos, value, i)
}

func (list *LinkedList) search(value int, index ...int) int {
	i := parseIndex(index)
	if list.Value == value {
		return i
	}
	i++
	return list.Next.search(value, i)
}

func (list *LinkedList) prevValue() *LinkedList {
	return list.Prev
}

func (list *LinkedList) isHead() bool {
	if list.Prev == nil {
		return true
	}
	return false
}

func (list *LinkedList) isTail() bool {
	if list.Next == nil {
		return true
	}
	return false
}
