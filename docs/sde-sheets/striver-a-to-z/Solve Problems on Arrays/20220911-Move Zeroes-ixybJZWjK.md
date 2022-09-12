# Move Zeroes

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

 

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

 

**Constraints:**

- `1 <= nums.length <= 104`
- `-231 <= nums[i] <= 231 - 1`


## Approach

slow,fast approach

- keep track of slow and fast pointers, swap values  if `nums[slow] == 0 and nums[fast] != 0`
- if `nums[slow] != 0` increament slow

## Solutions

```python
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        slow = 0
        
        for fast in range(len(nums)):
            
            if nums[fast] != 0 and nums[slow] == 0:
                nums[fast],nums[slow] = nums[slow],nums[fast]
                
            if nums[slow] != 0:
                slow += 1
                
                
        
```