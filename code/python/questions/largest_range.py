def largestRange(array):
    if len(array)==1:
        return [array[0],array[0]]
    if len(array)==2:
        return [array[0],array[1]]
    ar = []
    array.sort()

    for i in range(len(array)):
        for j in range(i,len(array)):
             temp = []       
             for k in range(i,j+1):
                 if len(temp) == 0:
                     temp.append(array[k])    
                 else:
                     if temp[len(temp)-1]+1 == array[k]: 
                        temp.append(array[k])    
             ar = temp if len(temp) > len(ar) else ar


    print(ar)
    return [ar[0],ar[len(ar)-1]]        
# [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 15]




if __name__ == "__main__":
    largestRange([4, 2, 1, 3])