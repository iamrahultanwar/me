class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        carry = 0
        
        for i in reversed(range(len(digits))):
            curr = digits[i]          
            curr += 1
            if curr > 9:
                carry = 1
                digits[i] = curr % 10
            else:
                carry = 0
                digits[i] = curr
                break    
        if carry == 1:
            digits.insert(0, 1)    
        print(digits)
if __name__ == '__main__':
    s = Solution()
    print(s.plusOne([9]))
