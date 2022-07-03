def sort012(self,arr,n):
    lo = 0
    hi = n - 1
    mid = 0
    while mid <= hi:
        if arr[mid] == 0:
            arr[lo], arr[mid] = arr[mid], arr[lo]
            lo = lo + 1
            mid = mid + 1
        elif arr[mid] == 1:
            mid = mid + 1
        else:
            arr[mid], arr[hi] = arr[hi], arr[mid] 
            hi = hi - 1
    return arr

if __name__ == "__main__":

    print(sort012([0,2,1,2,0],5))    