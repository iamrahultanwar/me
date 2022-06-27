from collections import deque


class Node:
   def __init__(self, data=None):
      self.data = data
      self.nextval = None

class SLinkedList:
   def __init__(self,headValue=None):
      self.head = Node(headValue)
      self.latest = self.head

   def push(self,val):
        node = Node(val)
        self.latest.nextval = node
        self.latest = node

   def printVal(self,node=None):
        if node == None:
           return self.printVal(self.head)
        print(node.data)
        if node.nextval != None:
            return self.printVal(node.nextval)

   def indexOf(self,search=0):
       node = self.head
       index = 0
       while node != None:
        if  node.data == search:
            return index
        node = node.nextval
        index += 1

       return -1

   def length(self):
        node = self.head
        index = 0
        while node != None:
          node = node.nextval
          index += 1
        return index

   def get(self,searchIndex=0):
       node = self.head
       index = 0
       while node != None:
        if index == searchIndex:
            return node.data

        node = node.nextval
        index += 1

       return None

# singleList = SLinkedList(1)

# for i in range(10,20):
#     singleList.push(i)

# # singleList.printVal()

# # print(singleList.indexOf(19))

# # print(singleList.length())

# print(singleList.get(10))

