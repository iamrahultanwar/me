# simple implementation of array
class Array:
    def static(self,n):
        if n == None:
            return ValueError("Length of array is must")
        return []   
    def dynamic(self):
           return []        

# dynamic can be very familiar
class StaticArray:
    arr = []
    length = 0
    def __init__(self,n):
         if n == None:
            return ValueError("Length of array is must")
         self.length = n
    def getValues(self):
        return self.arr
    def push(self,val):
        if len(self.arr) < self.length:
            self.arr.append(val)
    def pop(self):
        self.arr.pop()

