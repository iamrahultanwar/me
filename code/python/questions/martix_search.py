def searchInSortedMatrix(matrix, target):
    row,col = len(matrix),len(matrix[0])
    colMid = col // 2
    rowMid = row // 2
    status = "MID"
   
    def findNum(rMid,cMid,status):
        midValue = matrix[rMid][cMid]
        if midValue == target:
            return [rMid,cMid]
        
        if target > midValue:
             if status == "DCE":
                 return [-1,-1]
             for r in range(rMid,row):
                 currValue = matrix[r][cMid]
                 if currValue == target:
                     return [r,cMid]

             for c in range(cMid,col):
                 currValue = matrix[rMid][c]
                 if currValue == target:
                     return [rMid,c]
             rMid+=1
             cMid+=1
             status = "INC"

        if target < midValue:
             if status == "INC":
                 return [-1,-1]
             for r in range(0,rMid):
                 currValue = matrix[r][cMid]
                 if currValue == target:
                     return [r,cMid]

             for c in range(0,cMid):
                 currValue = matrix[rMid][c]
                 if currValue == target:
                     return [rMid,c]
             rMid-=1
             cMid-=1
             status = "DEC"
        return findNum(rMid,cMid,status)   
  
    return findNum(rowMid,colMid,status)    


if __name__ == "__main__":
    matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
    ]
    target = 43
    print(searchInSortedMatrix(matrix, target))