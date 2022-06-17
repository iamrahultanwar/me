---
title : Array
sidebar_position : 5
---
# Array

## Key Terms
### Array

A linear collection of data values that are accessible at numbered indices, starting at index 0.
The following are an array's standard operations and their corresponding time complexities:

* **Accessing a value at a given index:** O(1)
* **Updating a value at a given index:** O(1)
* **Inserting a value at the beginning:** O(n)
* **Inserting a value in the middle:** O(n)
* **Inserting a value at the end:**
  * amortized O(1) when dealing with a **dynamic array**
  * O(n) when dealing with a **static array**
* **Removing a value at the beginning:** O(n)
* **Removing a value in the middle:** O(n)
* **Removing a value at the end:** O(1)
* **Copying the array:** O(n)

A static array is an implementation of an array that allocates a fixed amount of memory to be used for storing the array's values. Appending
values to the array therefore involves copying the entire array and allocating new memory for it, accounting for the extra space needed for
the newly appended value. This is a linear-time operation.

A dynamic array is an implementation of an array that preemptively allocates double the amount of memory needed to store the array's
values. Appending values to the array is a constant-time operation until the allocated memory is filled up, at which point the array is copied
and double the memory is once again allocated for it. This implementation leads to an amortized constant-time insertion-at-end operation.

A lot of popular programming languages like JavaScript and Python implement arrays as dynamic arrays.


## Notes

- Arrays in golang

```golang
 var arr[5]string
 arr := [2]string{"r","a"}
```

- Dynamic Arrays
```
  arr = [1,2,3,_,_,_] // stores data with double the required space

  copy in dynamic array 

  1 + 2 + 4 + 8 + 16 + ... + N

  O(1) + O(2) + O(4) + O(8) + ... + O(N)

  N + N/2 + N/4 + N/8 + ... + 1 = O(2N) = O(N)
```

### Amortized Analysis 

Amortized analysis is a method for analyzing a given algorithm's complexity, or how much of a resource, especially time or memory, it takes to execute.