# You are given an array/list ‘ARR’ of ‘N’ positive integers and an integer ‘K’. Your task is to check if there exists a subset in ‘ARR’ with a sum equal to ‘K’.
# Note: Return true if there exists a subset with sum equal to ‘K’. Otherwise, return false.
# For Example :
# If ‘ARR’ is {1,2,3,4} and ‘K’ = 4, then there exists 2 subsets with sum = 4. These are {1,3} and {4}. Hence, return true.

def subsetSumToK(n, k, arr):
    
    a = arr
    a.sort()
    
    def f(idx,target):
        if idx == 0:
            return a[idx] == target       
        if target == 0:
            return False
        
        
        notTake = f(idx-1,target)
        
        take = False
        
        if target > a[idx]:
            take = f(idx-1,target-a[idx])
            
            
        return take or notTake
    
    
    return f(n-1,k)


print(subsetSumToK(4,4,[6,1,2,1]))