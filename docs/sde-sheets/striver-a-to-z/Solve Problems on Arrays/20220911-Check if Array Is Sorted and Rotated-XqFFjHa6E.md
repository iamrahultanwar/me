# Check if Array Is Sorted and Rotated

[Leetcode](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated)

Given an array `nums`, return `true`_ if the array was originally sorted in non-decreasing order, then rotated **some** number of positions (including zero)_. Otherwise, return `false`.

There may be **duplicates** in the original array.

**Note:** An array `A` rotated by `x` positions results in an array `B` of the same length such that `A[i] == B[(i+x) % A.length]`, where `%` is the modulo operation.

 

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
```

**Example 2:**

```
Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
```

**Example 3:**

```
Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
```


## Approach

Check if current number is less than the previous number, keep a count of this condition.
If count is more than 1, which means the array is not rotated


## Solution

```python
class Solution:
    def check(self, nums: List[int]) -> bool:        
        t = 0
        
        for i in range(len(nums)):
            if nums[i] < nums[i-1]:
                t += 1
                
                
        return t <= 1

```

