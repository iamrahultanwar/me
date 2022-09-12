# Rotate Array

Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

 

**Example 1:**

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

**Example 2:**

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```


## Approach

There are many ways to solve this issue and study all are must to study

1. Brute
    - loop for k % n times and replace last with curr 
    - `O(n x k) | O(1)`
2. Using Extra Space 
    - create a new array and update value at `(i + k) % n` with `nums[i]`
    - `O(n) | O(n)` 
3. Using Cyclic Replacements - TODO
4. Using Reverse
    - reverse for n times
    - reverse for k times
    - reverse for n-k times


## Solution


```python
# using  reverse o(n) | o(1)

class Solution:
    def reverse(self,nums,start,end):
        while start < end:
            nums[start],nums[end] = nums[end],nums[start]
            start += 1
            end -= 1
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k %= n
        
        # step 1 reverse for n 
        self.reverse(nums,0,n-1)
        self.reverse(nums,0,k-1)
        self.reverse(nums,k,n-1)
        
```