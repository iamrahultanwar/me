(self.webpackChunkme=self.webpackChunkme||[]).push([[5668],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,i(i({ref:e},c),{},{components:r})):n.createElement(m,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8505:function(t,e,r){"use strict";r.r(e),r.d(e,{Project:function(){return N},ResumeQR:function(){return M},contentTitle:function(){return w},default:function(){return C},frontMatter:function(){return k},metadata:function(){return P},toc:function(){return T}});var n=r(7462),a=r(3366),o=r(7294),i=r(3905),s=r(6010),l=r(2389),u=r(7392),c=r(7094),h=r(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(t){var e,r,a=t.lazy,i=t.block,l=t.defaultValue,m=t.values,g=t.groupId,f=t.className,v=o.Children.map(t.children,(function(t){if((0,o.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,u.l)(b,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===l?l:null!=(e=null!=l?l:null==(r=v.find((function(t){return t.props.default})))?void 0:r.props.value)?e:v[0].props.value;if(null!==k&&!b.some((function(t){return t.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),P=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,o.useState)(k),M=N[0],E=N[1],C=[],L=(0,h.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=P[g];null!=j&&j!==M&&b.some((function(t){return t.value===j}))&&E(j)}var B=function(t){var e=t.currentTarget,r=C.indexOf(e),n=b[r].value;n!==M&&(L(e),E(n),null!=g&&T(g,String(n)))},D=function(t){var e,r=null;switch(t.key){case"ArrowRight":var n,a=C.indexOf(t.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var o,i=C.indexOf(t.currentTarget)-1;r=null!=(o=C[i])?o:C[C.length-1]}null==(e=r)||e.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},b.map((function(t){var e=t.value,r=t.label,a=t.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===e?0:-1,"aria-selected":M===e,key:e,ref:function(t){return C.push(t)},onKeyDown:D,onFocus:B,onClick:B},a,{className:(0,s.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":M===e})}),null!=r?r:e)}))),a?(0,o.cloneElement)(v.filter((function(t){return t.props.value===M}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==M})}))))}function g(t){var e=(0,l.Z)();return o.createElement(m,(0,n.Z)({key:String(e)},t))}var f="tabItem_Ymn6";function v(t){var e=t.children,r=t.hidden,n=t.className;return o.createElement("div",{role:"tabpanel",className:(0,s.Z)(f,n),hidden:r},e)}var b=r(1653);var y=["components"],k={},w="\ud83d\udc4b Hello, I am Rahul Tanwar",P={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx",title:"\ud83d\udc4b Hello, I am Rahul Tanwar",description:"- I am a Full Stack Developer, having experience working on multiple frameworks and platform.",frontMatter:{}},T=[{value:"My Tech Stack",id:"my-tech-stack",level:2},{value:"My Projects",id:"my-projects",level:2},{value:"Github Stats",id:"github-stats",level:2},{value:"My Proflies",id:"my-proflies",level:2},{value:"Download my resume",id:"download-my-resume",level:2}],N=function(t){var e=t.description,r=t.tech,n=t.features;return(0,i.kt)("div",null,(0,i.kt)("p",null,e),(0,i.kt)("h4",null,"Tech Used"),(0,i.kt)("ul",null,r.map((function(t,e){return(0,i.kt)("li",{key:e},t)}))),(0,i.kt)("h4",null,"Cool Features"),(0,i.kt)("div",{align:"center",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"5px"}},n.map((function(t,e){return(0,i.kt)("img",{key:e,src:t})}))))},M=function(){return(0,i.kt)(b.Z,{value:"https://rahultanwar.me/file/rahul-tanwar-resume.pdf",mdxType:"QRCode"})},E={toc:T,Project:N,ResumeQR:M};function C(t){var e=t.components,r=(0,a.Z)(t,y);return(0,i.kt)("wrapper",(0,n.Z)({},E,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-hello-i-am-rahul-tanwar"},"\ud83d\udc4b Hello, I am Rahul Tanwar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I am a Full Stack Developer, having experience working on multiple frameworks and platform."),(0,i.kt)("li",{parentName:"ul"},"I am currently working on CMS platform which makes easy to create schemas and apis ",(0,i.kt)("a",{parentName:"li",href:"/docs/projects/hydyco/intro"},"Hydyco")),(0,i.kt)("li",{parentName:"ul"},"My favorite programming book is : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/getify/You-Dont-Know-JS"},"You don't know javascript")),(0,i.kt)("li",{parentName:"ul"},"I am currently focusing on building my knowledge around DSA and System Design")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"my-tech-stack"},"My Tech Stack"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",alt:"tech-logo"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",alt:"tech-logo"})),(0,i.kt)("h2",{id:"my-projects"},"My Projects"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Find all my projects on ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/iamrahultanwar?tab=repositories"},"Github"))))),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(v,{value:"hydyco",label:"Hydyco",default:!0,mdxType:"TabItem"},(0,i.kt)(N,{description:"Hydyco is a CMS platform which makes easy to create schemas and apis. It is inspired by strapi.io",tech:["expressjs","mongodb","reactjs"],features:["https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/1.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/2.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/3.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/4.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/5.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/6.png","https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/7.png"],mdxType:"Project"})),(0,i.kt)(v,{value:"heeico",label:"Heeico",mdxType:"TabItem"},(0,i.kt)(N,{description:"Heeico is a simple URL shortener implemented in GO and React",tech:["golang","reactjs"],features:["https://i.ibb.co/zXS0rKt/Screenshot-2022-05-17-at-12-12-26-AM.png","https://i.ibb.co/HYY67Nn/Screenshot-2022-05-17-at-12-13-02-AM.png","https://i.ibb.co/8m1HVHJ/Screenshot-2022-05-17-at-12-13-12-AM.png","https://i.ibb.co/6BkbFjy/Screenshot-2022-05-17-at-12-13-22-AM.png","https://i.ibb.co/PjfTHMS/Screenshot-2022-05-17-at-12-13-30-AM.png","https://i.ibb.co/WGnj9C2/Screenshot-2022-05-17-at-12-13-44-AM.png","https://i.ibb.co/XVfVByh/Screenshot-2022-05-17-at-12-13-58-AM.png","https://i.ibb.co/SyxThMZ/Screenshot-2022-05-17-at-12-14-07-AM.png"],mdxType:"Project"})),(0,i.kt)(v,{value:"friskco",label:"Friskco",mdxType:"TabItem"},(0,i.kt)(N,{description:" This project is for my learning purpose only, i decided to learn golang instead going with react i decided to use react native. I have experience with ionic and flutter just wanted to test react native. Idea is to create your own cloud storage and save files for personal use.",tech:["golang","react-native"],features:["https://i.ibb.co/jgYvyW0/Simulator-Screen-Shot-i-Phone-13-2021-10-24-at-16-52-43.png","https://i.ibb.co/y0hL8bf/Simulator-Screen-Shot-i-Phone-13-2021-10-24-at-16-52-48.png","https://i.ibb.co/zNX4SKJ/Simulator-Screen-Shot-i-Phone-13-2021-10-24-at-16-53-21.png","https://i.ibb.co/PtqW0vN/Simulator-Screen-Shot-i-Phone-13-2021-10-24-at-16-53-27.png","https://i.ibb.co/tpKBpXq/Simulator-Screen-Shot-i-Phone-13-2021-10-24-at-16-53-32.png"],mdxType:"Project"})),(0,i.kt)(v,{value:"autoflipz",label:"Autoflipz",mdxType:"TabItem"},(0,i.kt)(N,{description:"A car service booking app. Backend is written in nodejs.",tech:["nodejs-typescript","mongodb","docker","flutter"],features:["https://i.ibb.co/9vbH51L/Screenshot-2021-10-24-at-11-22-22-PM.png","https://i.ibb.co/YBptX58/Screenshot-2021-10-24-at-11-22-36-PM.png","https://i.ibb.co/PThPzwV/Screenshot-2021-10-24-at-11-22-50-PM.png","https://i.ibb.co/NnK62GV/Screenshot-2021-10-24-at-11-23-09-PM.png","https://i.ibb.co/cbC224c/Screenshot-2021-10-24-at-11-23-42-PM.png","https://i.ibb.co/4t2K0Zv/Screenshot-2021-10-24-at-11-24-28-PM.png","https://i.ibb.co/cNWSPcb/Screenshot-2021-10-24-at-11-24-55-PM.png","https://i.ibb.co/W2862Gf/Screenshot-2021-10-24-at-11-25-06-PM.png","https://i.ibb.co/sb9FMRR/Screenshot-2021-10-24-at-11-25-27-PM.png","https://i.ibb.co/qgw5KJ6/Screenshot-2021-10-24-at-11-25-44-PM.png","https://i.ibb.co/qk56y8t/Screenshot-2021-10-24-at-11-25-58-PM.png","https://i.ibb.co/sJjnP4K/Screenshot-2021-10-24-at-11-26-40-PM.png"],mdxType:"Project"}))),(0,i.kt)("h2",{id:"github-stats"},"Github Stats"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github-readme-stats.vercel.app/api?username=iamrahultanwar&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true",alt:null})),(0,i.kt)("h2",{id:"my-proflies"},"My Proflies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iamrahultanwar"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/rahul-tanwar-bb048a119/"},"LinkedIn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/iamrahultanwar/"},"LeetCode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://auth.geeksforgeeks.org/user/mrrahultanwar/"},"GeeksForGeeks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@iamrahultanwar"},"Medium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/channel/UCCnDU9th2pCP9odm721_qDg"},"Youtube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/users/11704593/mrrt"},"stackoverflow"))),(0,i.kt)("h2",{id:"download-my-resume"},"Download my resume"),(0,i.kt)(M,{mdxType:"ResumeQR"}),(0,i.kt)("p",null,";"))}C.isMDXComponent=!0},3655:function(t,e,r){var n=r(2792);function a(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}a.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=a},7321:function(t){function e(){this.buffer=new Array,this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},9381:function(t){t.exports={L:1,M:0,Q:3,H:2}},2832:function(t,e,r){var n=r(1518);function a(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(o)));return new a(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=n.gexp(n.glog(t.get(o))+e);return new a(r,0).mod(t)}},t.exports=a},4450:function(t,e,r){var n=r(3655),a=r(7611),o=r(7321),i=r(3160),s=r(2832);function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var u=l.prototype;u.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},u.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=a.getRSBlocks(t,this.errorCorrectLevel),r=new o,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var l=this.dataList[s];r.put(l.mode,4),r.put(l.getLength(),i.getLengthInBits(l.mode,t)),l.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},u.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},u.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=i.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},u.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var a=0;a<this.modules.length;a++)for(var o=1*a,i=0;i<this.modules[a].length;i++){var s=1*i;this.modules[a][i]&&(n.beginFill(0,100),n.moveTo(s,o),n.lineTo(s+1,o),n.lineTo(s+1,o+1),n.lineTo(s,o+1),n.endFill())}return n},u.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},u.setupPositionAdjustPattern=function(){for(var t=i.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],a=t[r];if(null==this.modules[n][a])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[n+o][a+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},u.setupTypeNumber=function(t){for(var e=i.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},u.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=i.getBCHTypeInfo(r),a=0;a<15;a++){var o=!t&&1==(n>>a&1);a<6?this.modules[a][8]=o:a<8?this.modules[a+1][8]=o:this.modules[this.moduleCount-15+a][8]=o}for(a=0;a<15;a++){o=!t&&1==(n>>a&1);a<8?this.modules[8][this.moduleCount-a-1]=o:a<9?this.modules[8][15-a-1+1]=o:this.modules[8][15-a-1]=o}this.modules[this.moduleCount-8][8]=!t},u.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,a=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var l=0;l<2;l++)if(null==this.modules[n][s-l]){var u=!1;o<t.length&&(u=1==(t[o]>>>a&1)),i.getMask(e,n,s-l)&&(u=!u),this.modules[n][s-l]=u,-1==--a&&(o++,a=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){for(var n=a.getRSBlocks(t,e),s=new o,u=0;u<r.length;u++){var c=r[u];s.put(c.mode,4),s.put(c.getLength(),i.getLengthInBits(c.mode,t)),c.write(s)}var h=0;for(u=0;u<n.length;u++)h+=n[u].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*h||(s.put(l.PAD0,8),s.getLengthInBits()>=8*h));)s.put(l.PAD1,8);return l.createBytes(s,n)},l.createBytes=function(t,e){for(var r=0,n=0,a=0,o=new Array(e.length),l=new Array(e.length),u=0;u<e.length;u++){var c=e[u].dataCount,h=e[u].totalCount-c;n=Math.max(n,c),a=Math.max(a,h),o[u]=new Array(c);for(var p=0;p<o[u].length;p++)o[u][p]=255&t.buffer[p+r];r+=c;var d=i.getErrorCorrectPolynomial(h),m=new s(o[u],d.getLength()-1).mod(d);l[u]=new Array(d.getLength()-1);for(p=0;p<l[u].length;p++){var g=p+m.getLength()-l[u].length;l[u][p]=g>=0?m.get(g):0}}var f=0;for(p=0;p<e.length;p++)f+=e[p].totalCount;var v=new Array(f),b=0;for(p=0;p<n;p++)for(u=0;u<e.length;u++)p<o[u].length&&(v[b++]=o[u][p]);for(p=0;p<a;p++)for(u=0;u<e.length;u++)p<l[u].length&&(v[b++]=l[u][p]);return v},t.exports=l},7611:function(t,e,r){var n=r(9381);function a(t,e){this.totalCount=t,this.dataCount=e}a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(t,e){var r=a.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var s=r[3*i+0],l=r[3*i+1],u=r[3*i+2],c=0;c<s;c++)o.push(new a(l,u));return o},a.getRsBlockTable=function(t,e){switch(e){case n.L:return a.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return a.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return a.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return a.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=a},1518:function(t){for(var e={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)e.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)e.EXP_TABLE[r]=e.EXP_TABLE[r-4]^e.EXP_TABLE[r-5]^e.EXP_TABLE[r-6]^e.EXP_TABLE[r-8];for(r=0;r<255;r++)e.LOG_TABLE[e.EXP_TABLE[r]]=r;t.exports=e},2792:function(t){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},3160:function(t,e,r){var n=r(2792),a=r(2832),o=r(1518),i=0,s=1,l=2,u=3,c=4,h=5,p=6,d=7,m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;m.getBCHDigit(e)-m.getBCHDigit(m.G15)>=0;)e^=m.G15<<m.getBCHDigit(e)-m.getBCHDigit(m.G15);return(t<<10|e)^m.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;m.getBCHDigit(e)-m.getBCHDigit(m.G18)>=0;)e^=m.G18<<m.getBCHDigit(e)-m.getBCHDigit(m.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return m.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i:return(e+r)%2==0;case s:return e%2==0;case l:return r%3==0;case u:return(e+r)%3==0;case c:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h:return e*r%2+e*r%3==0;case p:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),r=0;r<t;r++)e=e.multiply(new a([1,o.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var a=0;a<e;a++){for(var o=0,i=t.isDark(n,a),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var l=-1;l<=1;l++)a+l<0||e<=a+l||0==s&&0==l||i==t.isDark(n+s,a+l)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<e-1;n++)for(a=0;a<e-1;a++){var u=0;t.isDark(n,a)&&u++,t.isDark(n+1,a)&&u++,t.isDark(n,a+1)&&u++,t.isDark(n+1,a+1)&&u++,0!=u&&4!=u||(r+=3)}for(n=0;n<e;n++)for(a=0;a<e-6;a++)t.isDark(n,a)&&!t.isDark(n,a+1)&&t.isDark(n,a+2)&&t.isDark(n,a+3)&&t.isDark(n,a+4)&&!t.isDark(n,a+5)&&t.isDark(n,a+6)&&(r+=40);for(a=0;a<e;a++)for(n=0;n<e-6;n++)t.isDark(n,a)&&!t.isDark(n+1,a)&&t.isDark(n+2,a)&&t.isDark(n+3,a)&&t.isDark(n+4,a)&&!t.isDark(n+5,a)&&t.isDark(n+6,a)&&(r+=40);var c=0;for(a=0;a<e;a++)for(n=0;n<e;n++)t.isDark(n,a)&&c++;return r+=10*(Math.abs(100*c/e/e-50)/5)}};t.exports=m},8330:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(5697)),a=o(r(7294));function o(t){return t&&t.__esModule?t:{default:t}}var i={d:n.default.string.isRequired,fill:n.default.string.isRequired,transformX:n.default.number.isRequired,transformY:n.default.number.isRequired},s=function(t){var e=t.d,r=t.fill,n=t.transformX,o=t.transformY;return a.default.createElement("path",{d:e,fill:r,transform:"matrix("+[1,0,0,1,n,o]+")"})};s.propTypes=i,s.defaultProps={},e.default=s},5335:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=i(r(5697)),o=i(r(7294));function i(t){return t&&t.__esModule?t:{default:t}}var s={children:a.default.array.isRequired,size:a.default.number.isRequired,title:a.default.string,xmlns:a.default.string},l={title:void 0,xmlns:"http://www.w3.org/2000/svg"},u=function(t){var e=t.children,r=t.size,a=t.title,i=t.xmlns,s=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["children","size","title","xmlns"]);return o.default.createElement("svg",n({},s,{height:r,width:r,xmlns:i}),a?o.default.createElement("title",null,a):null,e)};u.propTypes=s,u.defaultProps=l,e.default=u},1653:function(t,e,r){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=h(r(4450)),o=h(r(9381)),i=h(r(5697)),s=r(7294),l=h(s),u=h(r(8330)),c=h(r(5335));function h(t){return t&&t.__esModule?t:{default:t}}var p={bgColor:i.default.oneOfType([i.default.object,i.default.string]),fgColor:i.default.oneOfType([i.default.object,i.default.string]),level:i.default.oneOf(["L","M","Q","H"]),size:i.default.number,value:i.default.string.isRequired},d=function(t){var e=t.bgColor,r=t.fgColor,i=t.level,s=t.size,h=t.value,p=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["bgColor","fgColor","level","size","value"]),d=new a.default(-1,o.default[i]);d.addData(h),d.make();var m=d.modules,g=s/m.length;return l.default.createElement(c.default,n({},p,{size:s}),m.map((function(t,n){return t.map((function(t,a){var o=Math.round(a*g),i=Math.round(n*g),s=Math.round((a+1)*g)-o,c=Math.round((n+1)*g)-i;return l.default.createElement(u.default,{key:"rectangle-"+n+"-"+a,d:"M 0 0 L "+s+" 0 L "+s+" "+c+" L 0 "+c+" Z",fill:t?r:e,transformX:o,transformY:i})}))})))};d.propTypes=p,d.defaultProps={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},e.Z=(0,s.memo)(d)}}]);