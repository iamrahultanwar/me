def duplicates( arr, n): 
    counts = [0 for i in range(n)]
    found = []
    for a in arr:
        counts[a] += 1
        
    for index in range(len(counts)):
        c = counts[index]
        if c > 1:
            found.append(index)
        
    return found if len(found) > 0 else [-1]

if __name__ == "__main__":

    print(duplicates([13,9,25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14],26))