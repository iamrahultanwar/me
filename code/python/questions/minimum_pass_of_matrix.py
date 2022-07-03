def minimumPassesOfMatrix(matrix):
    row,col = len(matrix),len(matrix[0])
    nextPassQueue = []
    for r in range(row):
        for c in range(col):
            if matrix[r][c]>0:
                nextPassQueue.append([r,c])

    passes = 0

    while len(nextPassQueue) > 0:
        currentPassQueue = nextPassQueue
        nextPassQueue = []

        while len(currentPassQueue) > 0:
            currentRow,currentCol = currentPassQueue.pop(0)

            adjacentPosition = getAdjacentPositions(currentRow,currentCol,matrix)

            for position in adjacentPosition:
                row,col = position
                value = matrix[row][col]

                if value < 0:
                    matrix[row][col] *= -1
                    nextPassQueue.append([row,col])
        passes += 1
    
    return passes -1 if not containsNegative(matrix) else -1 

def getAdjacentPositions(row, col, matrix):
 adjacentPositions = []
 if row>0:
     adjacentPositions.append([row - 1, col])
 if row< len(matrix) - 1:
     adjacentPositions.append([row+1, col])
 if col>0:
     adjacentPositions.append([row, col - 1])
 if col< len(matrix[0]) - 1:
     adjacentPositions.append([row, col+1])
 return adjacentPositions

def containsNegative(matrix):
    for row in matrix:
        for value in row:
            if value<0:
                return True            

if __name__ == "__main__":
    matrix = [
        [0, -1, -3, 2, 0],
        [1, -2, -5, -1, -3],
        [3, 0, 0, -4, -1]
      ]
    print(minimumPassesOfMatrix(matrix))