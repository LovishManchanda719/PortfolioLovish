(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{9465:(e,t,a)=>{Promise.resolve().then(a.bind(a,9765))},9765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var s=a(5155),r=a(2115),l=a(7058),i=a(3585),n=a(8435);let c=()=>{let[e,t]=(0,r.useState)([]),[a,c]=(0,r.useState)(""),{currentUser:d}=(0,n.A)(),o=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!d)return;let e=(0,l.rJ)(i.kA,"chats"),a=(0,l.P)(e,(0,l.My)("createdAt","asc"),(0,l.AB)(50)),s=(0,l.aQ)(a,e=>{t(e.docs.map(e=>({id:e.id,...e.data()})))});return()=>s()},[d]);let u=()=>{var e;null===(e=o.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};(0,r.useEffect)(()=>{u()},[e]);let h=async e=>{if(e.preventDefault(),d&&""!==a.trim())try{await (0,l.gS)((0,l.rJ)(i.kA,"chats"),{text:a,createdAt:(0,l.O5)(),userId:d.uid,userName:d.email||"Anonymous"}),c("")}catch(e){console.error("Error sending message",e)}};return d?(0,s.jsx)("div",{className:"container mx-auto px-4 py-8 max-w-2xl",children:(0,s.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden",children:[(0,s.jsxs)("div",{className:"h-[500px] overflow-y-auto p-4 space-y-4",style:{scrollbarWidth:"thin"},children:[e.map(e=>(0,s.jsx)("div",{className:"flex ".concat(e.userId===d.uid?"justify-end":"justify-start"),children:(0,s.jsxs)("div",{className:"max-w-[70%] p-2 rounded-lg ".concat(e.userId===d.uid?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700"),children:[(0,s.jsx)("p",{className:"text-sm",children:e.text}),e.userId!==d.uid&&(0,s.jsx)("p",{className:"text-xs mt-1 opacity-70",children:e.userName})]})},e.id)),(0,s.jsx)("div",{ref:o})]}),(0,s.jsxs)("form",{onSubmit:h,className:"border-t p-4 flex",children:[(0,s.jsx)("input",{type:"text",value:a,onChange:e=>c(e.target.value),placeholder:"Type a message...",className:"flex-grow p-2 border rounded-l-lg dark:bg-gray-700 dark:text-white"}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600",children:"Send"})]})]})}):(0,s.jsx)("div",{className:"text-center mt-10",children:"Please log in to access the chat."})},d=()=>{let{currentUser:e}=(0,n.A)();return e?(0,s.jsx)(c,{}):(0,s.jsx)("div",{className:"flex justify-center items-center h-screen text-red-500",children:"Please log in to access the chat."})}},8435:(e,t,a)=>{"use strict";a.d(t,{A:()=>d,AuthProvider:()=>c});var s=a(5155),r=a(2115),l=a(399),i=a(3585);let n=(0,r.createContext)({currentUser:null,login:async()=>{},signup:async()=>{},logout:async()=>{}}),c=e=>{let{children:t}=e,[a,c]=(0,r.useState)(null);(0,r.useEffect)(()=>i.j2.onAuthStateChanged(e=>{e?(e.isAdmin="Paneer@gmail.com"===e.email,c(e)):c(null)}),[]);let d=async(e,t)=>{await (0,l.x9)(i.j2,e,t)},o=async(e,t)=>{await (0,l.eJ)(i.j2,e,t)},u=async()=>{await (0,l.CI)(i.j2)};return(0,s.jsx)(n.Provider,{value:{currentUser:a,login:d,signup:o,logout:u},children:t})},d=()=>(0,r.useContext)(n)},3585:(e,t,a)=>{"use strict";a.d(t,{j2:()=>n,kA:()=>c});var s=a(9904),r=a(399),l=a(7058);let i=(0,s.Dk)().length?(0,s.Sx)():(0,s.Wp)({apiKey:"AIzaSyD53X5KFkX9nfs8J3y8wObT2WtXNGGC32k",authDomain:"portfolio-lovish.firebaseapp.com",projectId:"portfolio-lovish",storageBucket:"portfolio-lovish.firebasestorage.app",messagingSenderId:"66190612910",appId:"1:66190612910:web:0803350d1203ee64a8103f"}),n=(0,r.xI)(i),c=(0,l.aU)(i)}},e=>{var t=t=>e(e.s=t);e.O(0,[992,882,459,441,517,358],()=>t(9465)),_N_E=e.O()}]);