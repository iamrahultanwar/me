def removeIslands(matrix):
    row = len(matrix) 
    col = len(matrix[0])

    blackListed = set()

    def checkNeighbours(r,c):
        curr = matrix[r][c] 

        if f'{r}:{c}' in blackListed:
            return
        blackListed.add(f'{r}:{c}')

        top = matrix[r-1][c] if r > 0 else 0
        bottom = matrix[r+1][c] if r < row - 1 else 0
        left =  matrix[r][c-1] if c > 0 else 0
        right = matrix[r][c+1] if c < col - 1 else 0
        if top == 1:
            checkNeighbours(r-1,c)
        if right == 1:
            checkNeighbours(r,c+1)
        if left == 1:
            checkNeighbours(r,c-1)
        if bottom == 1:
            checkNeighbours(r+1,c)    

            
    for r in range(row):
        for c in range(col):
            if 0 in [r,c]:
                if matrix[r][c]:
                    checkNeighbours(r,c)
    print(blackListed)
    return []

if __name__ == "__main__":
    matrix =[
        [1, 0, 0, 0, 0, 0],  
        [0, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 1],
    ]
    removeIslands(matrix)