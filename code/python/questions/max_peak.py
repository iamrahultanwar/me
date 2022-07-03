def peakElement(arr, n):
    if n==1:
      return 0
    maxIndex = -1
    for i in range(n):
        prevNumber = arr[i-1] if i > 0 else float("-inf")
        currNumber = arr[i]
        nextNumber = arr[i+1] if i < n-1 else float("-inf")

        if currNumber > prevNumber and currNumber > nextNumber:
            maxIndex = i

    return maxIndex

if __name__  == "__main__":
    peakElement([856,404,278],3)

