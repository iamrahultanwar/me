# Kadane's Algorithm

## Algorithm

1. Initialize 2 integer variables. Set both of them equal to the first value in the array.

   - `currentSubarray` will keep the running count of the current subarray we are focusing on.
   - `maxSubarray` will be our final return value. Continuously update it whenever we find a bigger subarray.

2. Iterate through the array, starting with the 2nd element (as we used the first element to initialize our variables). For each number, add it to the `currentSubarray` we are building. If `currentSubarray` becomes negative, we know it isn't worth keeping, so throw it away. Remember to update `maxSubarray` every time we find a new maximum.

3. Return `maxSubarray`.


## Code 

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Initialize our variables using the first element.
        current_subarray = max_subarray = nums[0]
        
        # Start with the 2nd element since we already used the first one.
        for num in nums[1:]:
            # If current_subarray is negative, throw it away. Otherwise, keep adding to it.
            current_subarray = max(num, current_subarray + num)
            max_subarray = max(max_subarray, current_subarray)
        
        return max_subarray

```

## Reference 

<iframe width="1151" height="656" src="https://www.youtube.com/embed/YxuK6A3SvTs" title="Kadanes algorithm | Longest sum contiguous subarray" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>