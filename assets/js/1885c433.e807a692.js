"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[7927],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,y=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Memory",sidebar_position:2},l="Memory",p={unversionedId:"dsa/Memory-EnAwxq5GZ",id:"dsa/Memory-EnAwxq5GZ",title:"Memory",description:"The bedrock of all data structures, memory is the underlying concept which shows why data staructures work the way they do.",source:"@site/docs/dsa/20220612-Memory-EnAwxq5GZ.md",sourceDirName:"dsa",slug:"/dsa/Memory-EnAwxq5GZ",permalink:"/docs/dsa/Memory-EnAwxq5GZ",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/dsa/20220612-Memory-EnAwxq5GZ.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Memory",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Complexity Analysis",permalink:"/docs/dsa/Complexity Analysis-oOehhpznN"},next:{title:"Big O Notation",permalink:"/docs/dsa/Big O Notation-00Smhkjuv"}},m={},u=[{value:"Key Terms",id:"key-terms",level:2},{value:"Bit",id:"bit",level:3},{value:"Byte",id:"byte",level:3},{value:"Fixed-Width Integer",id:"fixed-width-integer",level:3},{value:"Memory",id:"memory-1",level:3}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"memory"},"Memory"),(0,a.kt)("p",null,"The bedrock of all data structures, memory is the underlying concept which shows why data staructures work the way they do."),(0,a.kt)("h2",{id:"key-terms"},"Key Terms"),(0,a.kt)("h3",{id:"bit"},"Bit"),(0,a.kt)("p",null,"Short for ",(0,a.kt)("strong",{parentName:"p"},"binary digit"),", a bit is a fundamental unit of information in Computer Science that represents a state with one of two values,\ntypically ",(0,a.kt)("strong",{parentName:"p"},"0")," and ",(0,a.kt)("strong",{parentName:"p"},"1"),".\nAny data stored in a computer is, at the most basic level, represented in bits."),(0,a.kt)("h3",{id:"byte"},"Byte"),(0,a.kt)("p",null,"A group of eight ",(0,a.kt)("strong",{parentName:"p"},"bits"),". For example, ",(0,a.kt)("strong",{parentName:"p"},"01101000")," is a byte.\nA single byte can represent up to ",(0,a.kt)("strong",{parentName:"p"},"256")," data values  (2",(0,a.kt)("sup",null,"8"),").\nSince a ",(0,a.kt)("strong",{parentName:"p"},"binary number")," is a number expressed with only two symbols, like ",(0,a.kt)("strong",{parentName:"p"},"0")," and ",(0,a.kt)("strong",{parentName:"p"},"1"),", a byte can effectively represent all of the numbers\nbetween 0 and 255, inclusive, in binary format.\nThe following bytes represent the numbers 1, 2, 3, and 4 in binary format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1: 00000001\n2: 00000010\n3: 00000011\n4: 00000100\n")),(0,a.kt)("h3",{id:"fixed-width-integer"},"Fixed-Width Integer"),(0,a.kt)("p",null,"An integer represented by a fixed amount of ",(0,a.kt)("strong",{parentName:"p"},"bits"),". For example, a ",(0,a.kt)("strong",{parentName:"p"},"32-bit integer")," is an integer represented by 32 bits (4 bytes), and a ",(0,a.kt)("strong",{parentName:"p"},"64-\nbit integer")," is an integer represented by 64 bits (8 bytes)."),(0,a.kt)("p",null,"The following is the 32-bit representation of the number 1, with clearly separated bytes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"00000000 00000000 00000000 00000001\n")),(0,a.kt)("p",null,"The following is the 64-bit representation of the number 10, with clearly separated bytes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001010\n")),(0,a.kt)("p",null,"Regardless of how large an integer is, its fixed-width-integer representation is, by definition, made up of a constant number of bits."),(0,a.kt)("p",null,"It follows that, regardless of how large an integer is, an operation performed on its fixed-width-integer representation consists of a\nconstant number of bit manipulations, since the integer is made up of a fixed number of bits."),(0,a.kt)("h3",{id:"memory-1"},"Memory"),(0,a.kt)("p",null,"Broadly speaking, memory is the foundational layer of computing, where all data is stored.\nIn the context of coding interviews, it's important to note the following points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data stored in memory is stored in bytes and, by extension, bits."),(0,a.kt)("li",{parentName:"ul"},'Bytes in memory can "point" to other bytes in memory, so as to store references to other data.'),(0,a.kt)("li",{parentName:"ul"},"The amount of memory that a machine has is bounded, making it valuable to limit how much memory an algorithm takes up."),(0,a.kt)("li",{parentName:"ul"},"Accessing a byte or a fixed number of bytes (like 4 bytes or 8 bytes in the case of ",(0,a.kt)("strong",{parentName:"li"},"32-bit")," and ",(0,a.kt)("strong",{parentName:"li"},"64-bit integers"),") is an elementary operation, which can be loosely treated as a single unit of operational work.")))}d.isMDXComponent=!0}}]);