class Graph:
    def __init__(self):
        self.vertices = []

    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.vertices and vertex2 in self.vertices:
            self.vertices[vertex1].add_edge(vertex2)
            self.vertices[vertex2].add_edge(vertex1)
        
    def add_vertex(self, vertex):
        self.vertices.append(vertex)
 
