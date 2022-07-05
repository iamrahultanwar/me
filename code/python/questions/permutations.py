def getPermutations(array):
    permutations = []
    permutationsHelper(array, [], permutations)
    
    return permutations

def permutationsHelper(array, currentPermutation, permutations):
    if not len(array) and len(currentPermutation):
        permutations.append(currentPermutation)
    else:
        for i in range(len(array)):
            newArray = array[:i] + array[i+1:]
            newPermutation = currentPermutation + [array[i]]
            permutationsHelper(newArray,newPermutation,permutations)



if __name__ == "__main__":
    array = [1,2,3]
    print(getPermutations(array))