package main

import "fmt"

type Queue []int

func main() {
	var s Queue = []int{}
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
func (s *Queue) Push(str int) {
	*s = append(*s, str) // Simply append the new value to the end of the Queue
}

// Remove and return top element of Queue. Return false if Queue is empty.
func (s *Queue) Pop() (int, bool) {
	if s.IsEmpty() {
		return -1, false
	} else {
		element := (*s)[0] // Index into the slice and obtain the element.
		*s = (*s)[1:]      // Remove it from the Queue by slicing it off.
		return element, true
	}
}

// IsEmpty: check if Queue is empty
func (s *Queue) IsEmpty() bool {
	return len(*s) == 0
}
