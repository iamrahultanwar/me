package main

import "fmt"

type Stack []int

func main() {
	var s Stack = []int{}
	s.Push(10)
	s.Push(1)
	s.Push(42)
	s.Push(17)
	s.Push(8)

	for len(s) > 0 {
		x, y := s.Pop()
		if y == true {
			fmt.Println(x)
		}
	}

}

// Push a new value onto the stack
func (s *Stack) Push(str int) {
	*s = append(*s, str) // Simply append the new value to the end of the stack
}

// Remove and return top element of stack. Return false if stack is empty.
func (s *Stack) Pop() (int, bool) {
	if s.IsEmpty() {
		return -1, false
	} else {
		index := len(*s) - 1   // Get the index of the top most element.
		element := (*s)[index] // Index into the slice and obtain the element.
		*s = (*s)[:index]      // Remove it from the stack by slicing it off.
		return element, true
	}
}

// IsEmpty: check if stack is empty
func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}
