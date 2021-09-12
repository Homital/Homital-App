var e,t;import{u as a,R as n,A as l,T as r,I as s,d as c,a as o,r as m,B as u,b as i,c as f,e as p,f as E,g as x,h as d,M as g,i as h,j as v,k,l as y,C as N,m as w,n as b,o as T,p as S,L as R,q as C,s as D,t as P,v as $,P as B,w as I,x as K,y as L,z as O,D as z,S as A,E as U,F as J,G as H,H as j,J as F,K as M}from"./vendor.6927689b.js";function G({title:e,back:t}){const m=a();return n.createElement(l,{position:"static"},n.createElement(r,null,t&&n.createElement(s,{edge:"start","aria-label":"back",onClick:()=>{"string"==typeof t||t instanceof String?m.push(t):m.goBack()}},n.createElement(c,null)),n.createElement(o,{variant:"h6",className:"cursor-pointer",onClick:()=>m.push("/")},null!=e?e:"Homital")))}function _({index:e}){const t=a(),[l,r]=m.exports.useState(null!=e?e:0);return n.createElement(u,{value:l,onChange:(e,a)=>{(e=>{switch(r(e),e){case 0:t.push("/");break;case 1:t.push("/user")}})(a)},showLabels:!0},n.createElement(i,{label:"Home",icon:n.createElement(f,null)}),n.createElement(i,{label:"User",icon:n.createElement(p,null)}))}function q({children:e,index:t,title:a,back:l,className:r}){return n.createElement("div",{className:"w-screen h-screen flex flex-col"},n.createElement(G,{title:a,back:l}),n.createElement("main",{className:`flex-1 bg-green-50 overflow-y-auto ${r}`},e),n.createElement(_,{index:null!=t?t:0}))}function W(){const[e,t]=m.exports.useState(0),[a,l]=m.exports.useState(null),r=()=>{l(null)};return n.createElement("div",null,n.createElement("div",{className:"flex flex-row"},n.createElement(E,{value:e,onChange:(e,a)=>{t(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",className:"flex-grow-0 flex-shrink"},n.createElement(x,{label:"Favorite"}),n.createElement(x,{label:"Living Room"}),n.createElement(x,{label:"Bedroom"}),n.createElement(x,{label:"Corridor"}),n.createElement(x,{label:"Restroom"})),n.createElement("div",{className:"flex-1"}),n.createElement(s,{"aria-label":"menu",className:"text-gray-600 py-0 pr-0 pl-2",onClick:e=>{l(e.currentTarget)}},n.createElement(d,null)),n.createElement(g,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:r},n.createElement(h,{onClick:r},"Manage Rooms"),n.createElement(h,{onClick:r},"All Devices"))))}function Q(){const e=v((e=>e.account.refreshToken)),t=a();return m.exports.useEffect((()=>{e||t.push("/user")}),[e]),n.createElement(q,{index:0,className:"flex flex-col"},e?n.createElement("div",{className:"pt-2 px-2"},n.createElement(W,null)):n.createElement("div",{className:"flex-1 flex flex-row items-center"},n.createElement("p",{className:"flex-1 text-center text-gray-300"},"Home")))}const V=e=>{if("undefined"!=typeof window&&window.localStorage){const t=localStorage.getItem(e);return t?JSON.parse(t):null}return null},X=(e,t)=>("undefined"!=typeof window&&window.localStorage&&localStorage.setItem(e,JSON.stringify(t)),null),Y=k({name:"account",initialState:{refreshToken:null!=(e=V("refreshToken"))?e:"",accessToken:"",username:null!=(t=V("username"))?t:""},reducers:{setRefreshToken:(e,t)=>{const{token:a}=t.payload;e.refreshToken=a,X("refreshToken",a)},setAccessToken:(e,t)=>{const{token:a}=t.payload;e.accessToken=a},setUsername:(e,t)=>{const{username:a}=t.payload;e.username=a,X("username",a)},login:(e,t)=>{const{username:a,refreshToken:n,accessToken:l}=t.payload;e.username=a,e.refreshToken=n,e.accessToken=l,X("username",a),X("refreshToken",n)},reset:e=>{e.refreshToken="",e.accessToken="",e.username="",X("refreshToken","")}}}),{setRefreshToken:Z,setAccessToken:ee,setUsername:te,login:ae,reset:ne}=Y.actions;function le(){const e=v((e=>e.account.refreshToken)),t=v((e=>e.account.username)),a=y();return n.createElement(N,{elevation:0,className:"flex flex-row min-h-32 bg-transparent"},n.createElement("div",{className:"w-32 flex flex-row justify-center content-center"},n.createElement("div",{className:"flex flex-col justify-center content-center"},n.createElement(w,{className:"w-24 h-24 "+(e?"text-gray-600":"text-gray-300")}))),n.createElement("div",{className:"flex-1 flex flex-col"},e?n.createElement(n.Fragment,null,n.createElement(b,{className:"flex flex-col mt-4 pb-0"},n.createElement(o,{component:"h4",variant:"h4",className:"mb-2"},t),n.createElement(o,{component:"p",variant:"body1"},"Welcome!")),n.createElement(T,{className:"self-stretch flex flex-row-reverse"},n.createElement(S,{variant:"outlined",size:"small",className:"text-pink-700",onClick:e=>{e.preventDefault(),a(ne())}},"Log Out"))):n.createElement(b,{className:"mt-4"},n.createElement(o,{component:"h5",variant:"h5"},"Please"," ",n.createElement(R,{to:"/login",className:"text-indigo-700 underline"},"login")))))}function re({title:e,icon:t,link:l}){const r=a(),s=()=>{r.push(l)};return n.createElement("div",{className:"flex flex-row content-center px-6 py-6 focus:bg-gray-100 hover:bg-gray-100 hover:cursor-pointer",role:"link",tabIndex:0,onClick:e=>{e.preventDefault(),e.stopPropagation(),s()},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),s())}},t,n.createElement("span",{className:"text-lg ml-4"},e))}function se(){return n.createElement("div",{className:"flex flex-col min-h-32 bg-white shadow-xl rounded-xl"},n.createElement(re,{title:"Settings",icon:n.createElement(C,{className:"mt-0.5"}),link:"/settings"}),n.createElement(re,{title:"About",icon:n.createElement(D,{className:"mt-0.5"}),link:"/about"}))}function ce(){return n.createElement(q,{index:1,className:"flex flex-col"},n.createElement("div",{className:"px-4 h-40"},n.createElement(le,null)),n.createElement("div",{className:"p-4"},n.createElement(se,null)),n.createElement("div",{className:"flex-1 flex flex-row items-center"},n.createElement("p",{className:"flex-1 text-center text-gray-300"},"User")))}function oe({children:e,title:t,className:a,back:l}){return n.createElement("div",{className:"w-screen h-screen flex flex-col"},n.createElement(G,{title:t,back:l}),n.createElement("main",{className:`flex-1 bg-green-50 overflow-y-auto ${a}`},e))}var me=P({reducer:{account:Y.reducer}});const ue=$.create({baseURL:"https://homital.herokuapp.com/api",timeout:1e4});async function ie({email:e,username:t,password:a}){return(await ue.post("/auth/user/login?by="+(t?"username":"email"),{email:e,username:t,password:a})).data}me.getState().account.accessToken&&(ue.defaults.headers.common.Authorization=`Bearer ${me.getState().account.accessToken}`),me.subscribe((function(){const{accessToken:e}=me.getState().account;ue.defaults.headers.common.Authorization=`Bearer ${e}`}));function fe(){const e=v((e=>e.account.refreshToken)),t=y(),l=a(),r=m.exports.useRef(null),s=m.exports.useRef(null),c=m.exports.useRef(null),[u,i]=m.exports.useState(""),[f,p]=m.exports.useState(""),[E,x]=m.exports.useState(null);m.exports.useEffect((()=>{e&&l.push("/user")}),[]);const d=()=>{x(n.createElement(K,{size:16,color:"inherit"})),(async(e,t)=>{let a;return a=e.includes("@")?await ie({email:e,password:t}):await ie({username:e,password:t}),a})(u,f).then((e=>{t(ae({username:u,refreshToken:e.refresh_token,accessToken:e.access_token})),x(n.createElement(L,null)),setTimeout((()=>{l.push("/")}),500)})).catch((e=>{e.response&&(x(n.createElement(O,null)),console.log(`${e.response.status}: ${JSON.stringify(e.response.data)}`))}))};return n.createElement(oe,{title:"Login",back:!0,className:"flex place-items-center place-content-center"},n.createElement(B,{elevation:2,className:"px-8 py-8 min-w-2/4 max-w-3/4"},n.createElement(o,{component:"h5",variant:"h5",className:"mb-4"},"Login"),n.createElement("form",{className:"flex flex-col gap-4"},n.createElement(I,{label:"Username/Email",variant:"outlined",value:u,inputRef:r,onChange:e=>{e.preventDefault(),i(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),s.current.focus())}}),n.createElement(I,{label:"Password",variant:"outlined",type:"password",value:f,inputRef:s,onChange:e=>{e.preventDefault(),p(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),c.current.focus(),c.current.click())}}),n.createElement("div",{className:"flex flex-row"},n.createElement("div",{className:"w-1/2 pr-2"},n.createElement(S,{variant:"contained",color:"primary",className:"w-full",ref:c,endIcon:E,onClick:e=>{e.preventDefault(),e.stopPropagation(),d()}},"Login")),n.createElement("div",{className:"w-1/2 pl-2 flex flex-row-reverse"},n.createElement(R,{to:"/register",className:"text-indigo-700 underline pt-1"},"Register"))))))}const pe=async e=>await async function({email:e}){return(await ue.post("/auth/user/getotp",{email:e})).data}({email:e}),Ee=async(e,t,a,n)=>await async function({email:e,username:t,password:a,otp:n}){return(await ue.post("/auth/user/register",{email:e,username:t,password:a,otp:n})).data}({email:e,otp:t,username:a,password:n});function xe(){const e=v((e=>e.account.refreshToken)),t=a(),l=m.exports.useRef(null),r=m.exports.useRef(null),s=m.exports.useRef(null),c=m.exports.useRef(null),u=m.exports.useRef(null),i=m.exports.useRef(null),[f,p]=m.exports.useState(""),[E,x]=m.exports.useState(null),[d,g]=m.exports.useState(""),[h,k]=m.exports.useState(""),[y,N]=m.exports.useState(""),[w,b]=m.exports.useState(null);m.exports.useEffect((()=>{e&&t.push("/user")}),[e]);return n.createElement(oe,{title:"Register",back:!0,className:"flex place-items-center place-content-center"},n.createElement(B,{elevation:2,className:"px-8 py-8 min-w-2/4 max-w-3/4"},n.createElement(o,{component:"h5",variant:"h5",className:"mb-4"},"Register"),n.createElement("form",{className:"flex flex-col gap-4"},n.createElement(I,{label:"Email",variant:"outlined",value:f,inputRef:l,onChange:e=>{e.preventDefault(),p(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),r.current.focus())}}),n.createElement(S,{variant:"contained",color:"secondary",className:"w-full",ref:r,endIcon:E,onClick:e=>{e.preventDefault(),e.stopPropagation(),x(n.createElement(K,{size:16,color:"inherit"})),pe(f).then((()=>{x(n.createElement(L,null)),s.current.focus()})).catch((e=>{e.response&&(x(n.createElement(O,null)),console.log(`${e.response.status}: ${JSON.stringify(e.response.data)}`))}))}},"Get OTP"),n.createElement(I,{label:"OTP",variant:"outlined",value:d,inputRef:s,onChange:e=>{e.preventDefault(),g(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),c.current.focus())}}),n.createElement(I,{label:"Username",variant:"outlined",value:h,inputRef:c,onChange:e=>{e.preventDefault(),k(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),u.current.focus())}}),n.createElement(I,{label:"Password",variant:"outlined",type:"password",value:y,inputRef:u,onChange:e=>{e.preventDefault(),N(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),i.current.focus(),i.current.click())}}),n.createElement(S,{variant:"contained",color:"primary",className:"w-full",ref:i,endIcon:w,onClick:e=>{e.preventDefault(),e.stopPropagation(),console.log(`Register with ${f}:${d}:${h}:${y}`),b(n.createElement(K,{size:16,color:"inherit"})),Ee(f,d,h,y).then((()=>{b(n.createElement(L,null)),setTimeout((()=>{t.goBack()}),500)})).catch((e=>{e.response&&(b(n.createElement(O,null)),console.log(`${e.response.status}: ${JSON.stringify(e.response.data)}`))}))}},"Register"))))}function de(){return n.createElement(q,{index:-1,className:"flex"},n.createElement("p",{className:"flex-1 place-self-center text-center text-gray-300"},"Not Found"))}function ge(){return n.createElement(z,null,n.createElement(A,null,n.createElement(U,{path:"/",exact:!0},n.createElement(Q,null)),n.createElement(U,{path:"/user"},n.createElement(ce,null)),n.createElement(U,{path:"/login"},n.createElement(fe,null)),n.createElement(U,{path:"/register"},n.createElement(xe,null)),n.createElement(U,{path:"*"},n.createElement(de,null))))}const he=J({palette:{primary:{light:"#66ffa6",main:"#00e676",dark:"#00b248",contrastText:"#4e342e"},secondary:{light:"#b2fef7",main:"#80cbc4",dark:"#4f9a94",contrastText:"#6d4c41"}}});H.render(n.createElement(n.StrictMode,null,n.createElement(j,{store:me},n.createElement(F,{theme:he},n.createElement(M,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Homital")),n.createElement(ge,null)))),document.getElementById("root"));