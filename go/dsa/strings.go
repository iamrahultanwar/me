package main

import "fmt"

type String []rune

func main() {
	var s String = []rune("rahul")
	fmt.Println(s.indexOf("a"))
	fmt.Println(s.compare("rahul"))
}

func (s *String) indexOf(f string) int {
	for index, val := range *s {
		if string(rune(val)) == f {
			return index
		}
	}
	return -1
}

func (s *String) compare(sub string) bool {
	if len(*s) != len(sub) {
		return false
	}
	for index, val := range *s {
		if byte(rune(val)) != sub[index] {
			return false
		}
	}
	return true
}

func (s *String) count() int {
	return len(*s)
}
