# Subarray Sum Equals K

Given an array of integers `nums` and an integer `k`, return _the total number of subarrays whose sum equals to_ `k`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

 

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

 

**Constraints:**

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`


## Approach

Very similar to two sum problem.

- keep two var count,total
- add num to total and update count = `hash[x]` if `x = total - k` found in hash
- increament `hash[sum]` 


## Solution
```python
    def subarraySum(self, nums: List[int], k: int) -> int:
        
        sumHash = defaultdict(int)
        sumHash[0] = 1
        count = 0
        total = 0
        
        for num in nums:         
            total += num
            x = total - k
                    
            if x in sumHash:
                count += sumHash[x]
                
                
            sumHash[total] += 1
            
            
        return count

```