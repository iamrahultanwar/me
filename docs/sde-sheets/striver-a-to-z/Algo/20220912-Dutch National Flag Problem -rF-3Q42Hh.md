# Dutch National Flag Problem 

The idea is to attribute a color to each number and then to arrange them following the order of colors on the Dutch flag.

![bla](https://leetcode.com/problems/sort-colors/Figures/75/first_pic2.png)

Let's use here three pointers to track the rightmost boundary of zeros, the leftmost boundary of twos and the current element under the consideration.

![bla](https://leetcode.com/problems/sort-colors/Figures/75/idx.png)

The idea of solution is to move `curr` pointer along the array, if `nums[curr] = 0` - swap it with `nums[p0]`, if `nums[curr] = 2` - swap it with `nums[p2]`.

**Algorithm**

- Initialise the rightmost boundary of zeros : `p0 = 0`. During the algorithm execution `nums[idx < p0] = 0`.

- Initialise the leftmost boundary of twos : `p2 = n - 1`. During the algorithm execution `nums[idx > p2] = 2`.

- Initialise the index of current element to consider : `curr = 0`.

- While `curr <= p2` :

  - If `nums[curr] = 0` : swap `curr`th and `p0`th elements and move both pointers to the right.
  - If `nums[curr] = 2` : swap `curr`th and `p2`th elements. Move pointer `p2` to the left.
  - If `nums[curr] = 1` : move pointer `curr` to the right.

## Code

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Dutch National Flag problem solution.
        """
        # for all idx < p0 : nums[idx < p0] = 0
        # curr is an index of element under consideration
        p0 = curr = 0
        # for all idx > p2 : nums[idx > p2] = 2
        p2 = len(nums) - 1

        while curr <= p2:
            if nums[curr] == 0:
                nums[p0], nums[curr] = nums[curr], nums[p0]
                p0 += 1
                curr += 1
            elif nums[curr] == 2:
                nums[curr], nums[p2] = nums[p2], nums[curr]
                p2 -= 1
            else:
                curr += 1

```