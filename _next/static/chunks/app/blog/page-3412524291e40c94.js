(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{6839:(e,t,a)=>{Promise.resolve().then(a.bind(a,894))},894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),l=a(2115),n=a(9345),i=a(4370),r=a(9675);let o=[{id:1,title:"My First Blog Post",excerpt:"This is a sample blog post about my journey into the world of blogging. It's a reflection on my initial thoughts and aspirations.",date:"June 15, 2024",tags:["Personal","Development"]},{id:2,title:"Web Development Insights",excerpt:"Exploring the latest trends in web development, including modern frameworks and tools.",date:"July 1, 2024",tags:["Technology","Web Dev"]},{id:3,title:"How to Start a Successful Blog",excerpt:"Learn the essential steps and strategies to create and grow a blog that resonates with your audience.",date:"August 10, 2024",tags:["Blogging","Tips"]},{id:4,title:"The Future of Artificial Intelligence",excerpt:"Dive into the possibilities and ethical considerations surrounding AI in our daily lives.",date:"September 5, 2024",tags:["AI","Technology"]},{id:5,title:"Balancing Work and Life as a Developer",excerpt:"Tips and personal experiences on maintaining a healthy work-life balance in the tech industry.",date:"October 15, 2024",tags:["Personal","Work-Life Balance"]},{id:6,title:"Understanding Tailwind CSS",excerpt:"A beginner-friendly guide to mastering Tailwind CSS for rapid UI development.",date:"November 20, 2024",tags:["CSS","Web Dev"]}],c=()=>{let[e,t]=(0,l.useState)(!1),[a,c]=(0,l.useState)(null);(0,l.useEffect)(()=>{let e=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;("dark"===e||!e&&a)&&t(!0)},[]);let d=a?o.filter(e=>e.tags.includes(a)):o,h=Array.from(new Set(o.flatMap(e=>e.tags))).sort();return(0,s.jsxs)("div",{className:"".concat(e?"dark bg-gray-900 text-white":"bg-white text-black"," min-h-screen transition-colors duration-300"),children:[(0,s.jsx)(n.A,{isDarkMode:e,toggleDarkMode:()=>{let a=!e;t(a),localStorage.setItem("theme",a?"dark":"light"),document.documentElement.classList.toggle("dark",a)}}),(0,s.jsx)("div",{className:"container mx-auto px-4 py-24",children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-4xl mx-auto",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold mb-8 text-center dark:text-white",children:"My Blog"}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-3 mb-8",children:h.map(e=>(0,s.jsx)(r.P.button,{onClick:()=>c(e===a?null:e),whileHover:{scale:1.05},whileTap:{scale:.95},className:"\n                  px-4 py-2 \n                  text-sm \n                  font-medium \n                  rounded-lg \n                  transition-all \n                  duration-300 \n                  ease-in-out \n                  flex \n                  items-center \n                  justify-center \n                  min-w-[100px] \n                  text-center\n                  ".concat(a===e?"bg-blue-500 text-white shadow-md":"bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600","\n                "),children:e},e))}),d.map(e=>(0,s.jsxs)(r.P.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5},className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-2 dark:text-white",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:e.excerpt}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:e.date}),(0,s.jsx)("div",{className:"space-x-2",children:e.tags.map(e=>(0,s.jsx)("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs",children:e},e))})]})]},e.id)),0===d.length&&(0,s.jsx)("p",{className:"text-center text-gray-500 dark:text-gray-400",children:"No blog posts found."})]})}),(0,s.jsx)(i.A,{})]})}},4370:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(5155);a(2115);let l=()=>(0,s.jsx)("footer",{className:"bg-blue-600 dark:bg-blue-900 text-white py-4 text-center",children:(0,s.jsx)("p",{children:"\xa9 2024 Lovish Manchanda. All Rights Reserved."})})},9345:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var s=a(5155);a(2115);var l=a(8173),n=a.n(l),i=a(9675),r=a(9271),o=a(5236),c=a(8427),d=a(7725),h=a(2104),x=a(8435),g=a(6046);let u=e=>{let{isDarkMode:t,toggleDarkMode:a}=e,{currentUser:l,logout:u}=(0,x.A)(),m=(0,g.useRouter)(),p=(0,g.usePathname)(),b=async e=>{if(e.includes("#")){let t=e.split("#")[1];if("/"!==p)await m.push("/"),setTimeout(()=>{let e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})},100);else{let e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}}else m.push(e)},f=async()=>{if(l)try{await u(),m.push("/")}catch(e){console.error("Logout failed",e)}else m.push("/auth")};return(0,s.jsx)(i.P.nav,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"fixed top-0 left-0 w-full z-50 ".concat(t?"bg-gray-800 text-white":"bg-white text-black"," shadow-md"),children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center p-4",children:[(0,s.jsx)("button",{onClick:()=>b("/"),className:"text-2xl font-bold",children:"Lovish Manchanda"}),(0,s.jsxs)("div",{className:"flex items-center space-x-6",children:[[{name:"Home",href:"/"},{name:"About",href:"/#about"},{name:"Skills",href:"/#skills"},{name:"Projects",href:"/#projects"},{name:"Education",href:"/#education"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/#contact"}].map(e=>(0,s.jsx)(i.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,s.jsx)("button",{onClick:()=>b(e.href),className:"hover:text-blue-500 transition-colors ".concat(t?"hover:text-blue-300":"hover:text-blue-700"),children:e.name})},e.name)),l&&(0,s.jsx)(i.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,s.jsxs)(n(),{href:"/chat",className:"flex items-center space-x-2 px-3 py-2 rounded-full ".concat(t?"bg-green-700 hover:bg-green-600 text-white":"bg-green-500 hover:bg-green-600 text-white"),children:[(0,s.jsx)(r.A,{size:20}),(0,s.jsx)("span",{children:"Chat"})]})}),(0,s.jsx)(i.P.button,{onClick:f,whileHover:{scale:1.1},whileTap:{scale:.95},className:"flex items-center space-x-2 px-3 py-2 rounded-full ".concat(l?t?"bg-red-700 hover:bg-red-600 text-white":"bg-red-500 hover:bg-red-600 text-white":t?"bg-blue-700 hover:bg-blue-600 text-white":"bg-blue-500 hover:bg-blue-600 text-white"),children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{size:20}),(0,s.jsx)("span",{children:"Logout"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{size:20}),(0,s.jsx)("span",{children:"Login"})]})}),(0,s.jsx)(i.P.button,{onClick:a,whileHover:{scale:1.1},whileTap:{scale:.95},className:"ml-2",children:t?(0,s.jsx)(d.A,{className:"text-yellow-500"}):(0,s.jsx)(h.A,{className:"text-gray-800"})})]})]})})}},8435:(e,t,a)=>{"use strict";a.d(t,{A:()=>c,AuthProvider:()=>o});var s=a(5155),l=a(2115),n=a(399),i=a(3585);let r=(0,l.createContext)({currentUser:null,login:async()=>{},signup:async()=>{},logout:async()=>{}}),o=e=>{let{children:t}=e,[a,o]=(0,l.useState)(null);(0,l.useEffect)(()=>i.j2.onAuthStateChanged(e=>{e?(e.isAdmin="Paneer@gmail.com"===e.email,o(e)):o(null)}),[]);let c=async(e,t)=>{await (0,n.x9)(i.j2,e,t)},d=async(e,t)=>{await (0,n.eJ)(i.j2,e,t)},h=async()=>{await (0,n.CI)(i.j2)};return(0,s.jsx)(r.Provider,{value:{currentUser:a,login:c,signup:d,logout:h},children:t})},c=()=>(0,l.useContext)(r)},3585:(e,t,a)=>{"use strict";a.d(t,{j2:()=>r,kA:()=>o});var s=a(9904),l=a(399),n=a(7058);let i=(0,s.Dk)().length?(0,s.Sx)():(0,s.Wp)({apiKey:"AIzaSyD53X5KFkX9nfs8J3y8wObT2WtXNGGC32k",authDomain:"portfolio-lovish.firebaseapp.com",projectId:"portfolio-lovish",storageBucket:"portfolio-lovish.firebasestorage.app",messagingSenderId:"66190612910",appId:"1:66190612910:web:0803350d1203ee64a8103f"}),r=(0,l.xI)(i),o=(0,n.aU)(i)}},e=>{var t=t=>e(e.s=t);e.O(0,[992,882,459,736,769,441,517,358],()=>t(6839)),_N_E=e.O()}]);