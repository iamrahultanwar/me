"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[8517],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Logarithm",sidebar_position:4},s="Logarithm",u={unversionedId:"dsa/Logarithm-JA49mW3ZZ",id:"dsa/Logarithm-JA49mW3ZZ",title:"Logarithm",description:"Key Terms",source:"@site/docs/dsa/20220612-Logarithm-JA49mW3ZZ.md",sourceDirName:"dsa",slug:"/dsa/Logarithm-JA49mW3ZZ",permalink:"/me/docs/dsa/Logarithm-JA49mW3ZZ",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/dsa/20220612-Logarithm-JA49mW3ZZ.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Logarithm",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Big O Notation",permalink:"/me/docs/dsa/Big O Notation-00Smhkjuv"},next:{title:"Array",permalink:"/me/docs/dsa/Array-JYTd_Npeg"}},p={},m=[{value:"Key Terms",id:"key-terms",level:2},{value:"Logarithm",id:"logarithm-1",level:3},{value:"Examples for equation",id:"examples-for-equation",level:2},{value:"y = 0",id:"y--0",level:3},{value:"y = 1",id:"y--1",level:3},{value:"y = 2",id:"y--2",level:3},{value:"Notes",id:"notes",level:2},{value:"Coding Examples",id:"coding-examples",level:2},{value:"CheatSheet",id:"cheatsheet",level:2}],c={toc:m};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logarithm"},"Logarithm"),(0,i.kt)("h2",{id:"key-terms"},"Key Terms"),(0,i.kt)("h3",{id:"logarithm-1"},"Logarithm"),(0,i.kt)("p",null,"A mathematical concept that's widely used in Computer Science and that's defined by the following equation:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"logb(x) = y if and only if b",(0,i.kt)("sup",null,"y"),"= x"))),(0,i.kt)("p",null,"In the context of coding interviews, the logarithm is used to describe the complexity analysis of algorithms, and its usage always implies a\nlogarithm of base 2. In other words, the logarithm used in the context of coding interviews is defined by the following equation:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"log(n) = y if and only if 2",(0,i.kt)("sup",null,"y")," = n"))),(0,i.kt)("p",null,"In plain English, if an algorithm has a logarithmic time complexity (O(log(n)), where n is the size of the input), then whenever the algorithm's\ninput doubles in size (i.e., whenever n doubles), the number of operations needed to complete the algorithm only increases by one unit.\nConversely, an algorithm with a linear time complexity would see its number of operations double if its input size doubled.\nAs an example, a linear-time-complexity algorithm with an input of size 1,000 might take roughly 1,000 operations to complete, whereas a ",(0,i.kt)("strong",{parentName:"p"},"logarithmic-time-complexity")," alogrithm with the same input would take roughly 10 operations to complete, ",(0,i.kt)("strong",{parentName:"p"},"since 2",(0,i.kt)("sup",null,"10")," ~= 1000")),(0,i.kt)("h2",{id:"examples-for-equation"},"Examples for equation"),(0,i.kt)("h3",{id:"y--0"},"y = 0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log(n) = y \n\nlog(1) = 0 \n")),(0,i.kt)("h3",{id:"y--1"},"y = 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log(n) = y \n\nlog(2) = 1\n")),(0,i.kt)("h3",{id:"y--2"},"y = 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log(n) = y\n\nlog(4) = 2\n")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When we double a number its power increases by 2 ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2^4 = 2^3 * 2\n\n\n2^4 = 16\n2^5 = 32\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The more n increases the exponent increases by tiny amout, which means")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"in eq \n\nlog(n) = y\n\nif we increase y by a double value n only increase by 1\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alogrithms having log(n) time complexity is a good thing"),(0,i.kt)("li",{parentName:"ul"},"log(n) < O(n)")),(0,i.kt)("h2",{id:"coding-examples"},"Coding Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n[0,1,2,3,4,5,6,7]\n\n- first cut\n[0,1,2,3 | 4,5,6,7]\n\n- second cut\n[0,1 | 2,3 | 4,5,6,7]\n\n- thrid cut\n[0 | 1 | 2,3 | 4,5,6,7]\n\nthe reason is we are cutting array in half 3 times\nlog(8) = 3\n\n")),(0,i.kt)("h2",{id:"cheatsheet"},"CheatSheet"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"clipboard.png",src:n(6993).Z,width:"1000",height:"704"})))}d.isMDXComponent=!0},6993:function(e,t,n){t.Z=n.p+"assets/images/GVt-zQebZ-clipboard-df9d7d11151af9777fe4aab77abecd46.png"}}]);