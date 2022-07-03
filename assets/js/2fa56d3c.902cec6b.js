"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"File Management"},s="File Management",c={unversionedId:"projects/hydyco/admin/plugin/file",id:"projects/hydyco/admin/plugin/file",title:"File Management",description:"Intro",source:"@site/docs/projects/hydyco/admin/plugin/file.md",sourceDirName:"projects/hydyco/admin/plugin",slug:"/projects/hydyco/admin/plugin/file",permalink:"/docs/projects/hydyco/admin/plugin/file",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/projects/hydyco/admin/plugin/file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"File Management"},sidebar:"mainSidebar",previous:{title:"Data Flow",permalink:"/docs/projects/hydyco/admin/core/dataFlow"},next:{title:"Manage Authorization",permalink:"/docs/projects/hydyco/admin/plugin/auth"}},u={},p=[{value:"Intro",id:"intro",level:2},{value:"Features",id:"features",level:2},{value:"How it works ?",id:"how-it-works-",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-management"},"File Management"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Manage your file assets here. You can see all your uploaded assets here, which can be of any type."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/7.png",alt:"file-management"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload assets from UI"),(0,o.kt)("li",{parentName:"ul"},"Remove assets"),(0,o.kt)("li",{parentName:"ul"},"Bulk Upload"),(0,o.kt)("li",{parentName:"ul"},"Bulk Delete")),(0,o.kt)("h2",{id:"how-it-works-"},"How it works ?"),(0,o.kt)("p",null,"File management plugin under the hood is ",(0,o.kt)("inlineCode",{parentName:"p"},"express middleware")," which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"multer")," to store assets in file disk."),(0,o.kt)("p",null,"If you want to upload your assets you can basically make a api call like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://demo.hydyco.com/admin/file/manual' \\\n--form 'manual=@\"/Users/rt/Desktop/Screenshot 2021-08-15 at 6.16.49 PM.png\"'\n")),(0,o.kt)("p",null,"which is return will give you the asset id."),(0,o.kt)("p",null,"File is consist these fields"),(0,o.kt)("img",{src:"/img/admin/core/fileType.png",width:"300"}),(0,o.kt)("p",null,"Add to access the assets, you can the path stored with asset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://demo.hydyco.com/*admin/file/get/1628449258410-994352432-10.jpg*\n")))}d.isMDXComponent=!0}}]);