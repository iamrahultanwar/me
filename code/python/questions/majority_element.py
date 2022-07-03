# def majorityElement(A, N):
#     if N == 0:
#         return -1
#     minCount = N // 2
#     count = {}
#     for a in A:
#         count[a] =  count.get(a,0) + 1
#         if count[a] >= minCount:
#             return a 
    
#     return -1

def majorityElement(A, N): 
    if N == 0:
        return -1

    counter = [A[0],1]

    for i in range(1,N):
        curr = A[i]
        


    return -1



if __name__ == "__main__":
    print(majorityElement([3,1,3,3,2],5))