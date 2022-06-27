"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[2540],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5944:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Glossary",sidebar_position:12},l="Glossary",p={unversionedId:"dsa/Glossary-wL0qzzPif",id:"dsa/Glossary-wL0qzzPif",title:"Glossary",description:"*   #### Acyclic Graph",source:"@site/docs/dsa/20220613-Glossary-wL0qzzPif.md",sourceDirName:"dsa",slug:"/dsa/Glossary-wL0qzzPif",permalink:"/docs/dsa/Glossary-wL0qzzPif",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/dsa/20220613-Glossary-wL0qzzPif.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Glossary",sidebar_position:12},sidebar:"mainSidebar",previous:{title:"Trees",permalink:"/docs/dsa/Trees-3V5farrGy"},next:{title:"Algorithm",permalink:"/docs/algorithm/"}},m={},h=[],d={toc:h};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"acyclic-graph"},"Acyclic Graph"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"graph")," that has no ",(0,i.kt)("strong",{parentName:"p"},"cycles"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"array"},"Array"),(0,i.kt)("p",{parentName:"li"},"A linear collection of data values that are accessible at numbered indices, starting at index 0."),(0,i.kt)("p",{parentName:"li"},"The following are an array's standard operations and their corresponding time complexities:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing a value at a given index"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Updating a value at a given index"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting a value at the beginning"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting a value in the middle"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting a value at the end"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"amortized O(1) when dealing with a ",(0,i.kt)("strong",{parentName:"li"},"dynamic array")),(0,i.kt)("li",{parentName:"ul"},"O(n) when dealing with a ",(0,i.kt)("strong",{parentName:"li"},"static array")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing a value at the beginning"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing a value in the middle"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing a value at the end"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Copying the array"),": O(n)")),(0,i.kt)("p",{parentName:"li"},"A static array is an implementation of an array that allocates a fixed amount of memory to be used for storing the array's values. Appending values to the array therefore involves copying the entire array and allocating new memory for it, accounting for the extra space needed for the newly appended value. This is a linear-time operation."),(0,i.kt)("p",{parentName:"li"},"A dynamic array is an implementation of an array that preemptively allocates double the amount of memory needed to store the array's values. Appending values to the array is a constant-time operation until the allocated memory is filled up, at which point the array is copied and double the memory is once again allocated for it. This implementation leads to an amortized constant-time insertion-at-end operation."),(0,i.kt)("p",{parentName:"li"},"A lot of popular programming languages like JavaScript and Python implement arrays as dynamic arrays.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"balanced-binary-tree"},"Balanced Binary Tree"),(0,i.kt)("p",{parentName:"li"},"   A ",(0,i.kt)("strong",{parentName:"p"},"binary tree")," whose nodes all have left and right ",(0,i.kt)("strong",{parentName:"p"},"subtrees")," whose ",(0,i.kt)("strong",{parentName:"p"},"heights")," differ by no more than 1."),(0,i.kt)("p",{parentName:"li"},"   A balanced binary tree is such that the logarithmic time complexity of its operations is maintained."),(0,i.kt)("p",{parentName:"li"},"   For example, inserting a node at the bottom of the following ",(0,i.kt)("em",{parentName:"p"},"imbalanced")," binary tree's left subtree would cleary not be a logarithmic-time operation, since it would involve traversing through most of the tree's nodes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"                1\n             /     \\\n            2       3\n          /\n         4\n       /\n      8\n     /\n   10\n")),(0,i.kt)("p",{parentName:"li"},"   The following is an example of a balanced binary tree:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"             1\n          /     \\\n         2       3\n       /   \\   /   \\\n      4     5 6     7\n    /   \\         /   \n   10    9       8\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"big-o-notation"},"Big O Notation"),(0,i.kt)("p",{parentName:"li"},"The notation used to describe the ",(0,i.kt)("strong",{parentName:"p"},"time complexity")," and ",(0,i.kt)("strong",{parentName:"p"},"space complexity")," of algorithms."),(0,i.kt)("p",{parentName:"li"},"Variables used in Big O notation denote the sizes of inputs to algorithms. For example, ",(0,i.kt)("strong",{parentName:"p"},"O(n)")," might be the time complexity of an algorithm that traverses through an array of length ",(0,i.kt)("strong",{parentName:"p"},"n"),"; similarly, ",(0,i.kt)("strong",{parentName:"p"},"O(n + m)")," might be the time complexity of an algorithm that traverses through an array of length ",(0,i.kt)("strong",{parentName:"p"},"n")," and through a string of length ",(0,i.kt)("strong",{parentName:"p"},"m"),"."),(0,i.kt)("p",{parentName:"li"},"The following are examples of common complexities and their Big O notations, ordered from fastest to slowest:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Constant"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logarithmic"),": O(log(n))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linear"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Log-linear"),": O(nlog(n))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quadratic"),": O(n2)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cubic"),": O(n3)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exponential"),": O(2n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Factorial"),": O(n!)")),(0,i.kt)("p",{parentName:"li"},"Note that in the context of coding interviews, Big O notation is usually understood to describe the ",(0,i.kt)("strong",{parentName:"p"},"worst-case")," complexity of an algorithm, even though the worst-case complexity might differ from the ",(0,i.kt)("strong",{parentName:"p"},"average-case")," complexity."),(0,i.kt)("p",{parentName:"li"},"For example, some sorting algorithms have different time complexities depending on the layout of elements in their input array. In rare cases, their time complexity will be much worse than in more common cases. Similarly, an algorithm that takes in a string and performs special operations on uppercase characters might have a different time complexity when run on an input string of only uppercase characters vs. on an input string with just a few uppercase characters."),(0,i.kt)("p",{parentName:"li"},'Thus, when describing the time complexity of an algorithm, it can sometimes be helpful to specify whether the time complexity refers to the average case or to the worst case (e.g., "this algorithm runs in O(nlog(n)) time on average and in O(n2) time in the worse case").')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"binary-tree"},"Binary Tree"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"tree")," whose nodes have up to ",(0,i.kt)("strong",{parentName:"p"},"two")," child-nodes."),(0,i.kt)("p",{parentName:"li"},"The structure of a binary tree is such that many of its operations have a logarithmic time complexity, making the binary tree an incredibly attractive and commonly used data structure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"bit"},"Bit"),(0,i.kt)("p",{parentName:"li"},"Short for ",(0,i.kt)("strong",{parentName:"p"},"binary digit"),", a bit is a fundamental unit of information in Computer Science that represents a state with one of two values, typically ",(0,i.kt)("strong",{parentName:"p"},"0")," and ",(0,i.kt)("strong",{parentName:"p"},"1"),"."),(0,i.kt)("p",{parentName:"li"},"Any data stored in a computer is, at the most basic level, represented in bits.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"byte"},"Byte"),(0,i.kt)("p",{parentName:"li"},"A group of eight ",(0,i.kt)("strong",{parentName:"p"},"bits"),". For example, ",(0,i.kt)("strong",{parentName:"p"},"01101000")," is a byte."),(0,i.kt)("p",{parentName:"li"},"A single byte can represent up to ",(0,i.kt)("strong",{parentName:"p"},"256")," data values (",(0,i.kt)("strong",{parentName:"p"},"28"),")."),(0,i.kt)("p",{parentName:"li"},"Since a ",(0,i.kt)("strong",{parentName:"p"},"binary number")," is a number expressed with only two symbols, like ",(0,i.kt)("strong",{parentName:"p"},"0")," and ",(0,i.kt)("strong",{parentName:"p"},"1"),", a byte can effectively represent all of the numbers between 0 and 255, inclusive, in binary format."),(0,i.kt)("p",{parentName:"li"},"The following bytes represent the numbers 1, 2, 3, and 4 in binary format."),(0,i.kt)("p",{parentName:"li"},"1: 00000001\n2: 00000010\n3: 00000011\n4: 00000100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"circular-linked-list"},"Circular Linked List"),(0,i.kt)("p",{parentName:"li"},"A linked list that has no clear ",(0,i.kt)("strong",{parentName:"p"},"head")," or ",(0,i.kt)("strong",{parentName:"p"},"tail"),', because its "tail" points to its "head," effectively forming a closed circle.'),(0,i.kt)("p",{parentName:"li"},"A circular linked list can be either a ",(0,i.kt)("strong",{parentName:"p"},"singly circular linked list")," or a ",(0,i.kt)("strong",{parentName:"p"},"doubly circular linked list"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"complete-binary-tree"},"Complete Binary Tree"),(0,i.kt)("p",{parentName:"li"},"   A ",(0,i.kt)("strong",{parentName:"p"},"binary tree")," that's ",(0,i.kt)("em",{parentName:"p"},"almost")," ",(0,i.kt)("strong",{parentName:"p"},"perfect"),"; its interior nodes all have two child-nodes, but its ",(0,i.kt)("strong",{parentName:"p"},"leaf nodes")," don't necessarily all have the same ",(0,i.kt)("strong",{parentName:"p"},"depth"),". Furthermore, the nodes in the last ",(0,i.kt)("strong",{parentName:"p"},"level")," of a complete binary tree are as far left as possible. Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"             1\n          /     \\\n         2       3\n       /   \\   /   \\\n      4     5 6     7\n    /   \\\n   8     9\n")),(0,i.kt)("p",{parentName:"li"},"   Conversely, the following binary tree ",(0,i.kt)("em",{parentName:"p"},"isn't")," complete, because the nodes in its last level aren't as far left as possible:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"            1\n         /     \\\n        2       3\n      /   \\   /   \\\n     4     5 6     7\n           /   \\\n          8     9\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"complexity-analysis"},"Complexity Analysis"),(0,i.kt)("p",{parentName:"li"},"The process of determining how efficient an algorithm is. Complexity analysis usually involves finding both the ",(0,i.kt)("strong",{parentName:"p"},"time complexity")," and the ",(0,i.kt)("strong",{parentName:"p"},"space complexity")," of an algorithm."),(0,i.kt)("p",{parentName:"li"},'Complexity analysis is effectively used to determine how "good" an algorithm is and whether it\'s "better" than another one.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"connected-graph"},"Connected Graph"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"graph")," is connected if for every pair of ",(0,i.kt)("strong",{parentName:"p"},"vertices")," in the graph, there's a path of one or more ",(0,i.kt)("strong",{parentName:"p"},"edges")," connecting the given vertices."),(0,i.kt)("p",{parentName:"li"},"In the case of a ",(0,i.kt)("strong",{parentName:"p"},"directed graph"),", the graph is:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"strongly connected")," if there are bidirectional connections between the vertices of every pair of vertices (i.e., for every vertex-pair (u, v) you can reach v from u and u from v)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"weakly connected")," if there are connections (but not necessarily bidirectional ones) between the vertices of every pair of vertices")),(0,i.kt)("p",{parentName:"li"},"A graph that isn't connected is said to be ",(0,i.kt)("strong",{parentName:"p"},"disconnected"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"cyclic-graph"},"Cyclic Graph"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"graph")," that has at least one ",(0,i.kt)("strong",{parentName:"p"},"cycle"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"directed-graph"},"Directed Graph"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"graph")," whose ",(0,i.kt)("strong",{parentName:"p"},"edges")," are directed, meaning that they can only be traversed in one direction, which is specified."),(0,i.kt)("p",{parentName:"li"},"For example, a graph of airports and flights would likely be directed, since a flight specifically goes from one airport to another (i.e., it has a direction), without necessarily implying the presence of a flight in the opposite direction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"doubly-linked-list"},"Doubly Linked List"),(0,i.kt)("p",{parentName:"li"},"Similar to a ",(0,i.kt)("strong",{parentName:"p"},"singly linked list"),", except that each node in a doubly linked list also has a pointer to the previous node in the linked list. The previous node is typically stored in a prev property."),(0,i.kt)("p",{parentName:"li"},"Just as the next property of a doubly linked list's ",(0,i.kt)("strong",{parentName:"p"},"tail")," points to the null value, so too does the prev property of a doubly linked list's ",(0,i.kt)("strong",{parentName:"p"},"head"),"."),(0,i.kt)("p",{parentName:"li"},"Below is a visual representation of a doubly linked list whose nodes hold integer values:"),(0,i.kt)("p",{parentName:"li"},"null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null"),(0,i.kt)("p",{parentName:"li"},"While a doubly linked list typically exposes both its head and tail to its user, as opposed to just its head in the case of a singly linked list, it otherwise behaves very similarly to a singly linked list."),(0,i.kt)("p",{parentName:"li"},"The following are a doubly linked list's standard operations and their corresponding time complexities:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing the head"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing the tail"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accessing a middle node"),": O(n)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting / Removing the head"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting / Removing the tail"),": O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting / Removing a middle node"),": O(n) to access + O(1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Searching for a value"),": O(n)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"fixed-width-integer"},"Fixed-Width Integer"),(0,i.kt)("p",{parentName:"li"},"An integer represented by a fixed amount of ",(0,i.kt)("strong",{parentName:"p"},"bits"),". For example, a ",(0,i.kt)("strong",{parentName:"p"},"32-bit integer")," is an integer represented by 32 bits (4 bytes), and a ",(0,i.kt)("strong",{parentName:"p"},"64-bit integer")," is an integer represented by 64 bits (8 bytes)."),(0,i.kt)("p",{parentName:"li"},"The following is the 32-bit representation of the number 1, with clearly separated bytes:"),(0,i.kt)("p",{parentName:"li"},"00000000 00000000 00000000 00000001"),(0,i.kt)("p",{parentName:"li"},"The following is the 64-bit representation of the number 10, with clearly separated bytes:"),(0,i.kt)("p",{parentName:"li"},"00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001010"),(0,i.kt)("p",{parentName:"li"},"Regardless of how large an integer is, its fixed-width-integer representation is, by definition, made up of a constant number of bits."),(0,i.kt)("p",{parentName:"li"},"It follows that, regardless of how large an integer is, an operation performed on its fixed-width-integer representation consists of a constant number of bit manipulations, since the integer is made up of a fixed number of bits.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"full-binary-tree"},"Full Binary Tree"),(0,i.kt)("p",{parentName:"li"},"   A ",(0,i.kt)("strong",{parentName:"p"},"binary tree")," whose nodes all have either two child-nodes or zero child-nodes. Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"       1\n    /     \\\n   2       3\n         /   \\\n        6     7\n      /   \\\n     8     9\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"graph"},"Graph"),(0,i.kt)("p",{parentName:"li"},"A collection of nodes or values called ",(0,i.kt)("strong",{parentName:"p"},"vertices")," that might be related; relations between vertices are called ",(0,i.kt)("strong",{parentName:"p"},"edges"),"."),(0,i.kt)("p",{parentName:"li"},"Many things in life can be represented by graphs; for example, a social network can be represented by a graph whose vertices are users and whose edges are friendships between the users. Similarly, a city map can be represented by a graph whose vertices are locations in the city and whose edges are roads between the locations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"graph-cycle"},"Graph Cycle"),(0,i.kt)("p",{parentName:"li"},"Simply put, a cycle occurs in a ",(0,i.kt)("strong",{parentName:"p"},"graph")," when three or more ",(0,i.kt)("strong",{parentName:"p"},"vertices")," in the graph are connected so as to form a closed loop."),(0,i.kt)("p",{parentName:"li"},"Note that the definition of a graph cycle is sometimes broadened to include cycles of length two or one; in the context of coding interviews, when dealing with questions that involve graph cycles, it's important to clarify what exactly constitutes a cycle.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"hash-table"},"Hash Table"),(0,i.kt)("p",{parentName:"li"},"A data structure that provides fast insertion, deletion, and lookup of key/value pairs."),(0,i.kt)("p",{parentName:"li"},"Under the hood, a hash table uses a ",(0,i.kt)("strong",{parentName:"p"},"dynamic array")," of ",(0,i.kt)("strong",{parentName:"p"},"linked lists")," to efficiently store key/value pairs. When inserting a key/value pair, a hash function first maps the key, which is typically a string (or any data that can be hashed, depending on the implementation of the hash table), to an integer value and, by extension, to an index in the underlying dynamic array. Then, the value associated with the key is added to the linked list stored at that index in the dynamic array, and a reference to the key is also stored with the value."),(0,i.kt)("p",{parentName:"li"},"Hash tables rely on highly optimized hash functions to minimize the number of ",(0,i.kt)("strong",{parentName:"p"},"collisions")," that occur when storing values: cases where two keys map to the same index."),(0,i.kt)("p",{parentName:"li"},"Below is an example of what a hash table might look like under the hood:"),(0,i.kt)("p",{parentName:"li"},"[","\n0: (value1, key1) -> null\n1: (value2, key2) -> (value3, key3) -> (value4, key4)\n2: (value5, key5) -> null\n3: (value6, key6) -> null\n4: null\n5: (value7, key7) -> (value8, key8)\n6: (value9, key9) -> null\n","]"),(0,i.kt)("p",{parentName:"li"},"In the hash table above, the keys ",(0,i.kt)("strong",{parentName:"p"},"key2"),", ",(0,i.kt)("strong",{parentName:"p"},"key3"),", and ",(0,i.kt)("strong",{parentName:"p"},"key4")," collided by all being hashed to ",(0,i.kt)("strong",{parentName:"p"},"1"),", and the keys ",(0,i.kt)("strong",{parentName:"p"},"key7")," and ",(0,i.kt)("strong",{parentName:"p"},"key8")," collided by both being hashed to ",(0,i.kt)("strong",{parentName:"p"},"5"),"."),(0,i.kt)("p",{parentName:"li"},"The following are a hash table's standard operations and their corresponding time complexities:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inserting a key/value pair"),": O(1) on average; O(n) in the worse case"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing a key/value pair"),": O(1) on average; O(n) in the worse case"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Looking up a key"),": O(1) on average; O(n) in the worse case")),(0,i.kt)("p",{parentName:"li"},"The worst-case linear-time operations occur when a hash table experiences a lot of collisions, leading to long linked lists internally, which take O(n) time to traverse."),(0,i.kt)("p",{parentName:"li"},"However, in practice and especially in coding interviews, we typically assume that the hash functions employed by hash tables are so optimized that collisions are extremely rare and constant-time operations are all but guaranteed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"k-ary-tree"},"K-ary Tree"),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"tree")," whose nodes have up to ",(0,i.kt)("strong",{parentName:"p"},"k")," child-nodes. A ",(0,i.kt)("strong",{parentName:"p"},"binary tree")," is a k-ary tree where ",(0,i.kt)("strong",{parentName:"p"},"k == 2"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"logarithm"},"Logarithm"),(0,i.kt)("p",{parentName:"li"},"A mathematical concept that's widely used in Computer Science and that's defined by the following equation:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"logb(x) = y")," if and only if ",(0,i.kt)("strong",{parentName:"p"},"by = x")),(0,i.kt)("p",{parentName:"li"},"In the context of coding interviews, the logarithm is used to describe the complexity analysis of algorithms, and its usage always implies a logarithm of base ",(0,i.kt)("strong",{parentName:"p"},"2"),". In other words, the logarithm used in the context of coding interviews is defined by the following equation:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"log(n) = y")," if and only if ",(0,i.kt)("strong",{parentName:"p"},"2y = n")),(0,i.kt)("p",{parentName:"li"},"In plain English, if an algorithm has a logarithmic time complexity (",(0,i.kt)("strong",{parentName:"p"},"O(log(n))"),", where n is the size of the input), then whenever the algorithm's input doubles in size (i.e., whenever ",(0,i.kt)("strong",{parentName:"p"},"n")," doubles), the number of operations needed to complete the algorithm only increases by one unit. Conversely, an algorithm with a linear time complexity would see its number of operations double if its input size doubled."),(0,i.kt)("p",{parentName:"li"},"As an example, a linear-time-complexity algorithm with an input of size 1,000 might take roughly 1,000 operations to complete, whereas a logarithmic-time-complexity algorithm with the same input would take roughly 10 operations to complete, since ",(0,i.kt)("strong",{parentName:"p"},"210 ~= 1,000"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"memory"},"Memory"),(0,i.kt)("p",{parentName:"li"},"Broadly speaking, memory is the foundational layer of computing, where all data is stored."),(0,i.kt)("p",{parentName:"li"},"In the context of coding interviews, it's important to note the following points:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data stored in memory is stored in bytes and, by extension, bits."),(0,i.kt)("li",{parentName:"ul"},'Bytes in memory can "point" to other bytes in memory, so as to store references to other data.'),(0,i.kt)("li",{parentName:"ul"},"The amount of memory that a machine has is bounded, making it valuable to limit how much memory an algorithm takes up."),(0,i.kt)("li",{parentName:"ul"},"Accessing a byte or a fixed number of bytes (like 4 bytes or 8 bytes in the case of ",(0,i.kt)("strong",{parentName:"li"},"32-bit")," and ",(0,i.kt)("strong",{parentName:"li"},"64-bit integers"),") is an elementary operation, which can be loosely treated as a single unit of operational work."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"perfect-binary-tree"},"Perfect Binary Tree"),(0,i.kt)("p",{parentName:"li"},"   A ",(0,i.kt)("strong",{parentName:"p"},"binary tree")," whose interior nodes all have two child-nodes and whose ",(0,i.kt)("strong",{parentName:"p"},"leaf nodes")," all have the same ",(0,i.kt)("strong",{parentName:"p"},"depth"),". Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"              1\n         /         \\\n        2           3\n      /   \\       /   \\\n     4     5     6     7\n    / \\   / \\   / \\   / \\\n   8   9 10 11 12 13 14 15\n \n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n*   #### Queue\n    \n    An array-like data structure whose elements follow the **FIFO** rule: **F**irst **I**n, **F**irst **O**ut.\n    \n    A queue is often compared to a group of people standing in line to purchase items at a store: the first person to get in line is the first one to purchase items and to get out of the queue.\n    \n    The following are a queue's standard operations and their corresponding time complexities:\n    \n    *   **Enqueuing an element into the queue**: O(1)\n    *   **Dequeuing an element out of the queue**: O(1)\n    *   **Peeking at the element at the front of the queue**: O(1)\n    *   **Searching for an element in the queue**: O(n)\n    \n    A queue is typically implemented with a **doubly linked list**.\n    \n*   #### Singly Linked List\n    \n    A data structure that consists of nodes, each with some value and a pointer to the next node in the linked list. A linked list node's value and next node are typically stored in value and next properties, respectively.\n    \n    The first node in a linked list is referred to as the **head** of the linked list, while the last node in a linked list, whose next property points to the null value, is known as the **tail** of the linked list.\n    \n    Below is a visual representation of a singly linked list whose nodes hold integer values:\n    \n    0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null\n    \n    A singly linked list typically exposes its head to its user for easy access. While finding a node in a singly linked list involves traversing through all of the nodes leading up to the node in question (as opposed to instant access with an array), adding or removing nodes simply involves overwriting next pointers (assuming that you have access to the node right before the node that you're adding or removing).\n    \n    The following are a singly linked list's standard operations and their corresponding time complexities:\n    \n    *   **Accessing the head**: O(1)\n    *   **Accessing the tail**: O(n)\n    *   **Accessing a middle node**: O(n)\n    *   **Inserting / Removing the head**: O(1)\n    *   **Inserting / Removing the tail**: O(n) to access + O(1)\n    *   **Inserting / Removing a middle node**: O(n) to access + O(1)\n    *   **Searching for a value**: O(n)\n    \n*   #### Space Complexity\n    \n    A measure of how much auxiliary memory an algorithm takes up, space complexity is a central concept in the field of algorithms and in coding interviews.\n    \n    It's expressed using **Big O** notation.\n    \n*   #### Stack\n    \n    An array-like data structure whose elements follow the **LIFO** rule: **L**ast **I**n, **F**irst **O**ut.\n    \n    A stack is often compared to a stack of books on a table: the last book that's placed on the stack of books is the first one that's taken off the stack.\n    \n    The following are a stack's standard operations and their corresponding time complexities:\n    \n    *   **Pushing an element onto the stack**: O(1)\n    *   **Popping an element off the stack**: O(1)\n    *   **Peeking at the element on the top of the stack**: O(1)\n    *   **Searching for an element in the stack**: O(n)\n    \n    A stack is typically implemented with a **dynamic array** or with a **singly linked list**.\n    \n*   #### String\n    \n    One of the fundamental data types in Computer Science, strings are stored in **memory** as **arrays** of integers, where each character in a given string is mapped to an integer via some character-encoding standard like **ASCII**.\n    \n    Strings behave much like normal arrays, with the main distinction being that, in most programming languages (C++ is a notable exception), strings are **immutable**, meaning that they can't be edited after creation. This also means that simple operations like appending a character to a string are more expensive than they might appear.\n    \n    The canonical example of an operation that's deceptively expensive due to string immutability is the following:\n    \n    string = \"this is a string\"\n    newString = \"\"\n    \n    for character in string:\n        newString += character\n    \n    The operation above has a time complexity of **O(n2)** where n is the length of string, because each addition of a character to newString creates an entirely new string and is itself an **O(n)** operation. Therefore, n O(n) operations are performed, leading to an O(n2) time-complexity operation overall.\n    \n*   #### Time Complexity\n    \n    A measure of how fast an algorithm runs, time complexity is a central concept in the field of algorithms and in coding interviews.\n    \n    It's expressed using **Big O** notation.\n    \n*   #### Tree\n    \n    A data structure that consists of nodes, each with some value and pointers to child-nodes, which recursively form **subtrees** in the tree.\n    \n    The first node in a tree is referred to as the **root** of the tree, while the nodes at the bottom of a tree (the nodes with no child-nodes) are referred to as **leaf nodes** or simply **leaves**. The paths between the root of a tree and its leaves are called **branches**, and the **height** of a tree is the length of its longest branch. The **depth** of a tree node is its distance from its tree's root; this is also known as the node's **level** in the tree.\n    \n    A tree is effectively a **graph** that's **connected**, **directed**, and **acyclic**, that has an explicit root node, and whose nodes all have a single **parent** (except for the root node, which effectively has no parent). Note that in most implementations of trees, tree nodes don't have a pointer to their parent, but they can if desired.\n    \n    There are many types of trees and tree-like structures, including **binary trees**, **heaps**, and **tries**.\n    \n*   #### Undirected Graph\n    \n    A **graph** whose **edges** are undirected, meaning that they can be traversed in both directions.\n    \n    For example, a graph of friends would likely be undirected, since a friendship is, by nature, bidirectional.\n")))}c.isMDXComponent=!0}}]);