package main

import "fmt"

type Graph struct {
	vertices []*Vertex
}

type Vertex struct {
	key      int
	adjacent []*Vertex
}

func (g *Graph) AddVertex(k int) {
	if contains(g.vertices, k) {
		err := fmt.Errorf("Vertex %v not added because it already exist", k)
		fmt.Println(err.Error())
	} else {
		g.vertices = append(g.vertices, &Vertex{key: k})
	}
}

func (g *Graph) AddEdge(from, to int) {
	fromVertex := g.getVertex(from)
	toVertex := g.getVertex(to)
	if fromVertex == nil || toVertex == nil {
		err := fmt.Errorf("Invalid edge (%v --> %v)", from, to)
		fmt.Println(err.Error())
	} else if contains(fromVertex.adjacent, to) {
		err := fmt.Errorf("Existing edge (%v --> %v)", from, to)
		fmt.Println(err.Error())
	} else {

		fromVertex.adjacent = append(fromVertex.adjacent, toVertex)
	}

}

func (g *Graph) getVertex(k int) *Vertex {
	for _, val := range g.vertices {
		if val.key == k {
			return val
		}
	}
	return nil
}

func contains(s []*Vertex, k int) bool {
	for _, v := range s {
		if k == v.key {
			return true
		}
	}
	return false
}

func (g *Graph) Print() {
	for _, v := range g.vertices {
		fmt.Printf("\nVertex %v : ", v.key)
		for _, v := range v.adjacent {
			fmt.Printf("%v", v.key)
		}
	}
	fmt.Println()
}

func main() {

	graph := Graph{}

	for i := 0; i < 5; i++ {
		graph.AddVertex(i)
	}

	graph.AddEdge(1, 2)
	graph.AddEdge(1, 2)
	graph.AddEdge(1, 9)
	graph.Print()

}
