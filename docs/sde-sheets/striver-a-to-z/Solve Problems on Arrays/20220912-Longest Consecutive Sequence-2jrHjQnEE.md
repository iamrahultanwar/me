# Longest Consecutive Sequence

Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence._

You must write an algorithm that runs in `O(n)` time.

 

**Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Example 2:**

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

 

**Constraints:**

- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Approach

* Idea is to keep track of the longest var
* convert nums array to set
* traverse nums
* we will start counting length when the previous number to the current number is not in the set
* increament length while num + length is num nums
* update result with max between result and current length


## Solution
```python
# O(n) | O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        nums = set(nums)
        
        result = 0
        
        
        for num in nums:
            if (num-1) not in nums:
                length = 0
                
                while (num+length) in nums:
                    length += 1

                result = max(result,length)
            
            
        return result

```