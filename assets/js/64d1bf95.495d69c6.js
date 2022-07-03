"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[7135],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,u(u({ref:t},c),{},{components:n})):r.createElement(h,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],i={sidebar_position:2,title:"Manage Authorization"},s="Manage Authorization",l={unversionedId:"projects/hydyco/admin/plugin/auth",id:"projects/hydyco/admin/plugin/auth",title:"Manage Authorization",description:"Intro",source:"@site/docs/projects/hydyco/admin/plugin/auth.md",sourceDirName:"projects/hydyco/admin/plugin",slug:"/projects/hydyco/admin/plugin/auth",permalink:"/docs/projects/hydyco/admin/plugin/auth",draft:!1,editUrl:"https://github.com/iamrahultanwar/me/tree/master/docs/projects/hydyco/admin/plugin/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Manage Authorization"},sidebar:"mainSidebar",previous:{title:"File Management",permalink:"/docs/projects/hydyco/admin/plugin/file"},next:{title:"Api Docs",permalink:"/docs/projects/hydyco/admin/general/api"}},c={},p=[{value:"Intro",id:"intro",level:2},{value:"Features",id:"features",level:2},{value:"Handle auth from code",id:"handle-auth-from-code",level:2},{value:"Use authorization in custom routes",id:"use-authorization-in-custom-routes",level:2},{value:"Access user from request",id:"access-user-from-request",level:2},{value:"Mongoose auth plugin",id:"mongoose-auth-plugin",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-authorization"},"Manage Authorization"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Control your api access from admin it self. Allow only specific routes to be public."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/iamrahultanwar/hydyco-preview/master/v1/4.png",alt:"auth-management"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check box the method you want to make public, other methods will be treated as authorized route"),(0,o.kt)("li",{parentName:"ul"},"Make authorization just by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"makeAuth")," middleware to your custom api."),(0,o.kt)("li",{parentName:"ul"},"Access user info in the ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," just by access it like this ",(0,o.kt)("inlineCode",{parentName:"li"},"request.user"))),(0,o.kt)("h2",{id:"handle-auth-from-code"},"Handle auth from code"),(0,o.kt)("p",null,"You can configure your authorization from code. You can config ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," and other attributes as well"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const server = new HydycoServer({\n  port: 3002,\n  logger: false,\n  auth: {\n    secretOrKey: "random", // your can update your jwt secret from here\n  },\n});\n')),(0,o.kt)("h2",{id:"use-authorization-in-custom-routes"},"Use authorization in custom routes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { generateAuthToken, makeAuth } = require("@hydyco/auth");\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"makeAuth")," as route middleware to make your route authorized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'router.post(defaultPath + "/auth", makeAuth, async (request, response) => {});\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"generateAuthToken")," to generate a valid token for authentication\nIt takes two parameters as input"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"payload - data required to generate the token, keep it similar across the app to generate a valid token"),(0,o.kt)("li",{parentName:"ul"},"secret - jwt secret to generate the token, keep it similar across the app to generate a valid token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const token = generateAuthToken(user, "random");\n')),(0,o.kt)("h2",{id:"access-user-from-request"},"Access user from request"),(0,o.kt)("p",null,"You can access user info directly from request itself. If you are having a authorized route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"authorizedRoute(request,response){\n    const {user} = request; // access all user info\n}\n")),(0,o.kt)("h2",{id:"mongoose-auth-plugin"},"Mongoose auth plugin"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hydyco core uses this plugin by default, so no need to use it manually. You need to use this when you are manually updating the user schema.")),(0,o.kt)("p",null,"Auth also exports a mongoose plugin that handles password hashing and comparison"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { authMongoosePlugin } = require("@hydyco/auth");\nconst userSchema = new HydycoModel("user").mongooseSchema();\n\nuserSchema.plugin(authMongoosePlugin);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By doing this, now any new record getting created will hash the password by it self.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Plus this will expose a helper method ",(0,o.kt)("inlineCode",{parentName:"p"},"comparePassword")," to compare password, generally while making a user auth."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const user = new HydycoModel("user").mongooseModel();\n\nuser.comparePassword(req.body.password, (err, isMatch) => {\n  if (err) {\n    console.log(err);\n  }\n  if (isMatch) {\n    console.log("Password Matched");\n  }\n});\n')))}m.isMDXComponent=!0}}]);