def helperCount(arr,low,mid,high):
        
        n1 = mid-low+1
        n2 = high-mid
        # Left sorted array
        left = []
        for i in range(n1):
            left.append(arr[low+i])  
        # Right sorted array
        right = []
        for j in range(n2):
            right.append(arr[mid+1+j])
        # Merging two sorted array
        l,r,k = 0,0,low
        res = 0
        while l<n1 and r<n2:
            if left[l]<=right[r]:
                arr[k] = left[l]
                l += 1
            else:
                arr[k] = right[r]
                r +=1
                res = res+(n1-l)
            k +=1
        while l<n1:
            arr[k] = left[l]
            l += 1
            k +=1
        while r<n2:
            arr[k] = right[r]
            r +=1
            k +=1
        return res
        
        
def mergeP(arr,low,high):
      if low<high:
            mid=(low+high)//2
            l=mergeP(arr,low,mid)
            r=mergeP(arr,mid+1,high)
            m=helperCount(arr,low,mid,high)
            
            return l+r+m
      return 0

def inversionCount(arr, n):
      # Your Code Here
      return mergeP(arr,0,n-1)

if __name__ == "__main__":
    print(inversionCount([2, 4, 1, 3, 5],5))    