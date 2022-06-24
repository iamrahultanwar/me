// Breadth First Search in Go

package main

import "fmt"

func BreadthFirstSearch(start, end, nodes int, edges [][]int) (isConnected bool, distance int) {
	queue := make([]int, 0)
	visited := make([]int, nodes)
	visited[start] = 1
	queue = append(queue, start)

	for len(queue) > 0 {
		v := queue[0]
		queue = queue[1:]
		for i := 0; i < len(edges[v]); i++ {
			if visited[i] == 0 && edges[v][i] > 0 {
				if i == end {
					return true, visited[v]
				}
				visited[i] = visited[v] + 1
				queue = append(queue, i)
			}
		}
	}

	return false, 0
}

func main() {
	fmt.Println(BreadthFirstSearch(0,
		5,
		6,
		[][]int{
			{0, 1, 1, 0, 0, 0},
			{1, 0, 0, 1, 0, 1},
			{1, 0, 0, 1, 0, 0},
			{0, 1, 1, 0, 1, 0},
			{0, 0, 0, 1, 0, 0},
			{0, 1, 0, 0, 0, 0},
		}))
}
