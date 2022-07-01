"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[8103],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={},p="Bubble Sort",s={unversionedId:"algorithm/Bubble Sort-7CDM4rCle",id:"algorithm/Bubble Sort-7CDM4rCle",title:"Bubble Sort",description:"In this tutorial, you will learn about the bubble sort algorithm and its implementation in Python, Java, C, and C++.",source:"@site/docs/algorithm/20220621-Bubble Sort-7CDM4rCle.md",sourceDirName:"algorithm",slug:"/algorithm/Bubble Sort-7CDM4rCle",permalink:"/docs/algorithm/Bubble Sort-7CDM4rCle",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/algorithm/20220621-Bubble Sort-7CDM4rCle.md",tags:[],version:"current",sidebarPosition:20220621,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Depth First Search",permalink:"/docs/algorithm/Depth First Search-oDWIW4jHZ"},next:{title:"Kadane\u2019s Algorithm",permalink:"/docs/algorithm/Kadane\u2019s Algorithm-bnNeIZiLt"}},u={},m=[{value:"Working of Bubble Sort",id:"working-of-bubble-sort",level:2},{value:"Bubble Sort Algorithm",id:"bubble-sort-algorithm",level:2},{value:"Optimized Bubble Sort Algorithm",id:"optimized-bubble-sort-algorithm",level:2},{value:"Bubble Sort Complexity",id:"bubble-sort-complexity",level:2},{value:"Complexity in Detail",id:"complexity-in-detail",level:3},{value:"1. Time Complexities",id:"1-time-complexities",level:3},{value:"2. Space Complexity",id:"2-space-complexity",level:3},{value:"Bubble Sort Applications",id:"bubble-sort-applications",level:2},{value:"Code Implementation",id:"code-implementation",level:2}],c={toc:m};function d(e){var t=e.components,o=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("h1",{id:"bubble-sort-1"},"Bubble Sort"),(0,a.kt)("p",null,"In this tutorial, you will learn about the bubble sort algorithm and its implementation in Python, Java, C, and C++."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bubble sort")," is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order."),(0,a.kt)("p",null,"Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort."),(0,a.kt)("h2",{id:"working-of-bubble-sort"},"Working of Bubble Sort"),(0,a.kt)("p",null,"Suppose we are trying to sort the elements in ",(0,a.kt)("strong",{parentName:"p"},"ascending order"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1","."," First Iteration (Compare and Swap)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Starting from the first index, compare the first and the second elements."),(0,a.kt)("li",{parentName:"ol"},"If the first element is greater than the second element, they are swapped."),(0,a.kt)("li",{parentName:"ol"},"Now, compare the second and the third elements. Swap them if they are not in order."),(0,a.kt)("li",{parentName:"ol"},"The above process goes on until the last element.",(0,a.kt)("img",{alt:"clipboard.png",src:n(9023).Z,width:"431",height:"578"})," Compare the Adjacent Elements\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Remaining Iteration")),(0,a.kt)("p",null,"The same process goes on for the remaining iterations."),(0,a.kt)("p",null,"After each iteration, the largest element among the unsorted elements is placed at the end."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"clipboard.png",src:n(1666).Z,width:"431",height:"476"})),(0,a.kt)("p",null,"Put the largest element at the end"),(0,a.kt)("p",null,"In each iteration, the comparison takes place up to the last unsorted element."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"clipboard.png",src:n(9924).Z,width:"431",height:"374"})),(0,a.kt)("p",null,"Compare the adjacent elements"),(0,a.kt)("p",null,"The array is sorted when all the unsorted elements are placed at their correct positions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"clipboard.png",src:n(6682).Z,width:"431",height:"272"})),(0,a.kt)("p",null,"The array is sorted if all elements are kept in the right order"),(0,a.kt)("h2",{id:"bubble-sort-algorithm"},"Bubble Sort Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bubbleSort(array)\n    for i <- 1 to indexOfLastUnsortedElement-1\n      if leftElement > rightElement\n        swap leftElement and rightElement\n  end bubbleSort\n")),(0,a.kt)("h2",{id:"optimized-bubble-sort-algorithm"},"Optimized Bubble Sort Algorithm"),(0,a.kt)("p",null,"In the above algorithm, all the comparisons are made even if the array is already sorted."),(0,a.kt)("p",null,"This increases the execution time."),(0,a.kt)("p",null,"#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; } #div-gpt-ad-Programizcom36796 {display: block;} @media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}"),(0,a.kt)("p",null,"To solve this, we can introduce an extra variable swapped. The value of swapped is set true if there occurs swapping of elements. Otherwise, it is set ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"After an iteration, if there is no swapping, the value of swapped will be ",(0,a.kt)("strong",{parentName:"p"},"false"),". This means elements are already sorted and there is no need to perform further iterations."),(0,a.kt)("p",null,"This will reduce the execution time and helps to optimize the bubble sort."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Algorithm for optimized bubble sort is")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"   bubbleSort(array)\n      swapped <- false\n      for i <- 1 to indexOfLastUnsortedElement-1\n        if leftElement > rightElement\n          swap leftElement and rightElement\n          swapped <- true\n    end bubbleSort\n")),(0,a.kt)("h2",{id:"bubble-sort-complexity"},"Bubble Sort Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time Complexity")),(0,a.kt)("p",null,"Best"),(0,a.kt)("p",null,"O(n)"),(0,a.kt)("p",null,"Worst"),(0,a.kt)("p",null,"O(n2)"),(0,a.kt)("p",null,"Average"),(0,a.kt)("p",null,"O(n2)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Space Complexity")),(0,a.kt)("p",null,"O(1)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stability")),(0,a.kt)("p",null,"Yes"),(0,a.kt)("h3",{id:"complexity-in-detail"},"Complexity in Detail"),(0,a.kt)("p",null,"Bubble Sort compares the adjacent elements."),(0,a.kt)("p",null,"Cycle"),(0,a.kt)("p",null,"Number of Comparisons"),(0,a.kt)("p",null,"1st"),(0,a.kt)("p",null,"(n-1)"),(0,a.kt)("p",null,"2nd"),(0,a.kt)("p",null,"(n-2)"),(0,a.kt)("p",null,"3rd"),(0,a.kt)("p",null,"(n-3)"),(0,a.kt)("p",null,"......."),(0,a.kt)("p",null,"......"),(0,a.kt)("p",null,"last"),(0,a.kt)("p",null,"1"),(0,a.kt)("p",null,"Hence, the number of comparisons is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(n-1) + (n-2) + (n-3) +.....+ 1 = n(n-1)/2\n")),(0,a.kt)("p",null,"nearly equals to ",(0,a.kt)("inlineCode",{parentName:"p"},"n2")),(0,a.kt)("p",null,"Hence, ",(0,a.kt)("strong",{parentName:"p"},"Complexity:")," O(n2)"),(0,a.kt)("p",null,"Also, if we observe the code, bubble sort requires two loops. Hence, the complexity is ",(0,a.kt)("inlineCode",{parentName:"p"},"n*n = n2")),(0,a.kt)("h3",{id:"1-time-complexities"},"1","."," Time Complexities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Worst Case Complexity:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n2)"),(0,a.kt)("br",{parentName:"li"}),"If we want to sort in ascending order and the array is in descending order then the worst case occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Best Case Complexity:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n)"),(0,a.kt)("br",{parentName:"li"}),"If the array is already sorted, then there is no need for sorting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Average Case Complexity:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n2)"),(0,a.kt)("br",{parentName:"li"}),"It occurs when the elements of the array are in jumbled order (neither ascending nor descending).")),(0,a.kt)("h3",{id:"2-space-complexity"},"2","."," Space Complexity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Space complexity is ",(0,a.kt)("inlineCode",{parentName:"li"},"O(1)")," because an extra variable is used for swapping."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"optimized bubble sort algorithm"),", two extra variables are used. Hence, the space complexity will be ",(0,a.kt)("inlineCode",{parentName:"li"},"O(2)"),".")),(0,a.kt)("h2",{id:"bubble-sort-applications"},"Bubble Sort Applications"),(0,a.kt)("p",null,"Bubble sort is used if"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"complexity does not matter"),(0,a.kt)("li",{parentName:"ul"},"short and simple code is preferred")),(0,a.kt)("h2",{id:"code-implementation"},"Code Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\nfunc BubbleSort(array []int) []int {\n    for i:=0;i<len(array);i++{\n        for j:=0;j<len(array)-1;j++{\n            if array[i] < array[j] {\n                temp := array[j]\n                array[j] = array[i]\n                array[i] = temp\n            }\n        }\n    }\n    return array \n}\n\n\n")))}d.isMDXComponent=!0},9924:function(e,t,n){t.Z=n.p+"assets/images/J84UyzNUe-clipboard-bb7426e9fb7b3b688045e8ebfd91b182.png"},9023:function(e,t,n){t.Z=n.p+"assets/images/LSuMXfaSh-clipboard-7a25af2c7241e3d422f69529fdc0bd47.png"},1666:function(e,t,n){t.Z=n.p+"assets/images/fXjpBu4u3-clipboard-b2617bb2f073f9056547623536e2a24d.png"},6682:function(e,t,n){t.Z=n.p+"assets/images/zeOJth923-clipboard-8fb04220400347ee03f64131a6e20023.png"}}]);