# Sort Colors

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm) **so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
****
We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

 

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

 

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?


## Approach

[Dutch National Flag Problem ](inkdrop://note/rF-3Q42Hh)

## Solution

```python

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        p1 = curr = 0 
        
        p2 = len(nums) - 1
        
        while curr <= p2:         
            if nums[curr] == 0:
                nums[curr],nums[p1] = nums[p1],nums[curr]
                curr += 1
                p1 += 1
                
            elif nums[curr] == 2:
                nums[curr],nums[p2] = nums[p2],nums[curr]
                p2 -= 1
                
            else:
                curr += 1
                
                
        return nums

```