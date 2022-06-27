#User function Template for python3
class Solution:
    def solve(self, N, K, heights): 
            stack = []
            count = 0
            for i in range(N-1,-1,-1):
                while len(stack)!=0 and (stack[-1][1]-i >K or stack[-1][0] < heights[i]):
                    print(stack[-1][1])
                    print(stack[-1][0])
                    stack.pop()
                if len(stack) == 0:
                    count += 1
                stack.append([heights[i],i])
            return count

if __name__ == "__main__":
    s = Solution()
    print(s.solve(5,3,[9, 7, 7, 7, 4]))
