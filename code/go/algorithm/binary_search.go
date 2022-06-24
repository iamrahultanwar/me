package main

import "fmt"

func BinarySearch(arr []int, k int) (bool, int) {
	low := 0
	high := len(arr) - 1
	for low <= high {
		median := (low + high) / 2
		if arr[median] < k {
			low = median + 1
		} else {
			high = median - 1
		}
	}

	if low == len(arr) || arr[low] != k {
		return false, -1
	}

	return true, low

}

func main() {

	arr := []int{2, 3, 5, 7, 8, 10, 12, 15, 18, 20}
	fmt.Println(BinarySearch(arr, 7))
}
