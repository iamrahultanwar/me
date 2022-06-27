"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[7614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Caesar Cipher Encryptor",p={unversionedId:"questions/algoexpert/Caesar Cipher Encryptor-Il_h28GJi",id:"questions/algoexpert/Caesar Cipher Encryptor-Il_h28GJi",title:"Caesar Cipher Encryptor",description:"Caesar Cipher Encryptor",source:"@site/docs/questions/algoexpert/20220620-Caesar Cipher Encryptor-Il_h28GJi.md",sourceDirName:"questions/algoexpert",slug:"/questions/algoexpert/Caesar Cipher Encryptor-Il_h28GJi",permalink:"/docs/questions/algoexpert/Caesar Cipher Encryptor-Il_h28GJi",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/questions/algoexpert/20220620-Caesar Cipher Encryptor-Il_h28GJi.md",tags:[],version:"current",sidebarPosition:20220620,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Questions",permalink:"/docs/questions/"},next:{title:"Product Sum",permalink:"/docs/questions/algoexpert/Product Sum-N_RftMYAC"}},u={},c=[{value:"Caesar Cipher Encryptor",id:"caesar-cipher-encryptor-1",level:2},{value:"Sample Input",id:"sample-input",level:3},{value:"Sample Output",id:"sample-output",level:3},{value:"Hints",id:"hints",level:3},{value:"Optimal Space &amp; Time Complexity",id:"optimal-space--time-complexity",level:3},{value:"Solution",id:"solution",level:3}],h={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"caesar-cipher-encryptor"},"Caesar Cipher Encryptor"),(0,i.kt)("h2",{id:"caesar-cipher-encryptor-1"},"Caesar Cipher Encryptor"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Category: Strings"))),(0,i.kt)("p",null,"Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key."),(0,i.kt)("p",null,'Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.'),(0,i.kt)("h3",{id:"sample-input"},"Sample Input"),(0,i.kt)("p",null,'string = "xyz"\nkey = 2'),(0,i.kt)("h3",{id:"sample-output"},"Sample Output"),(0,i.kt)("p",null,'"zab"'),(0,i.kt)("h3",{id:"hints"},"Hints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hint 1")),(0,i.kt)("p",null,"Most languages have built-in functions that give you the Unicode value of a character as well as the character corresponding to a Unicode value. Consider using such functions to determine which letters the input string's letters should be mapped to."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hint 2")),(0,i.kt)("p",null,"Try creating your own mapping of letters to codes. In other words, try associating each letter in the alphabet with a specific number - its position in the alphabet, for instance - and using that to determine which letters the input string's letters should be mapped to."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hint 3")),(0,i.kt)("p",null,"How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? What about cases where the key is very large and causes multiple wrappings around the alphabet? The modulo operator should be your friend here."),(0,i.kt)("h3",{id:"optimal-space--time-complexity"},"Optimal Space & Time Complexity"),(0,i.kt)("p",null,"O(n) time | O(n) space - where n is the length of the input string"),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// o(n) | o(n)\npackage main\n\nfunc CaesarCipherEncryptor(str string, key int) string {\n    startRange := 97\n    endRange := 122\n    s := ""\n\n    for _,val := range str {\n        current := int(val) + key\n        if current >= startRange && current <= endRange {\n            s += string(current)\n        }else {\n            k := ((current - endRange) - 1) % 26\n            s += string(startRange + k)\n        }\n    }\n    return s\n}\n\n\n')))}m.isMDXComponent=!0}}]);