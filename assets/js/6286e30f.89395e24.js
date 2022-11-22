"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[365],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,f=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const i={sidebar_position:2},a="Performance Engineering techniques",s={unversionedId:"E/PerformanceEngineeringBased",id:"E/PerformanceEngineeringBased",title:"Performance Engineering techniques",description:"What is the process of calculating energy using performance engineering?\u200b",source:"@site/docs/E/PerformanceEngineeringBased.md",sourceDirName:"E",slug:"/E/PerformanceEngineeringBased",permalink:"/E/PerformanceEngineeringBased",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/E/PerformanceEngineeringBased.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Network Infrastructure Energy Calculation",permalink:"/E/NetworkEnergy"},next:{title:"Public Sources for Energy Calculation",permalink:"/E/PublicSources"}},c={},l=[{value:"What is the process of calculating energy using performance engineering?\u200b",id:"what-is-the-process-of-calculating-energy-using-performance-engineering",level:3},{value:"What is the formula for power calculation?\u200b",id:"what-is-the-formula-for-power-calculation",level:3},{value:"How do you get the power consumed value (P_c, P_g, P_r) in the above formula?",id:"how-do-you-get-the-power-consumed-value-p_c-p_g-p_r-in-the-above-formula",level:3},{value:"How do you convert utilisation to power?\u200b",id:"how-do-you-convert-utilisation-to-power",level:3},{value:"What is Thermal Design Power or TDP ?",id:"what-is-thermal-design-power-or-tdp-",level:4},{value:"What is the dataset that can can be used for finding the TDP of servers/memory?\u200b",id:"what-is-the-dataset-that-can-can-be-used-for-finding-the-tdp-of-serversmemory",level:4}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-engineering-techniques"},"Performance Engineering techniques"),(0,o.kt)("h3",{id:"what-is-the-process-of-calculating-energy-using-performance-engineering"},"What is the process of calculating energy using performance engineering?\u200b"),(0,o.kt)("p",null,"The main consumers of power on a server will be the CPU, the GPU and the memory. Estimating how much each consumes will give you an estimate of how much power your server, or your application on a server, consumes. We consider energy spent to be directly proportional to power as E= P*t."),(0,o.kt)("h3",{id:"what-is-the-formula-for-power-calculation"},"What is the formula for power calculation?\u200b"),(0,o.kt)("p",null,"The power calculation formula is as follows:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"P[kWh]=(c\u2219P_c+ P_r+g\u2219P_g)/1000")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"c = the number of cores "),(0,o.kt)("li",{parentName:"ul"},"P_c = the power consumption of the CPU"),(0,o.kt)("li",{parentName:"ul"},"P_g = the power consumption of the GPU"),(0,o.kt)("li",{parentName:"ul"},"g = the number of memory sticks "),(0,o.kt)("li",{parentName:"ul"},"P_r = the power consumption of the memory")),(0,o.kt)("h3",{id:"how-do-you-get-the-power-consumed-value-p_c-p_g-p_r-in-the-above-formula"},"How do you get the power consumed value (P_c, P_g, P_r) in the above formula?"),(0,o.kt)("p",null,"We can use performance tests to calculate CPU and memory utilisation values. However, energy is not a linear function of utilisation: An idle computer, even one at zero percent utilisation, still draws electricity. This static power draw varies by configuration and by hardware components, but all components have some static power draw. This is called the energy proportionality principle."),(0,o.kt)("h3",{id:"how-do-you-convert-utilisation-to-power"},"How do you convert utilisation to power?\u200b"),(0,o.kt)("p",null,"The conversion is documented in the SCI open data project and is available here - ","[Utilisation to power conversion]"," (",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613"},"https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613"),")"),(0,o.kt)("p",null,"The output is called the TDP coefficient. This TDP coefficient is then multiplied by the thermal design power rating on the specific component."),(0,o.kt)("h4",{id:"what-is-thermal-design-power-or-tdp-"},"What is Thermal Design Power or TDP ?"),(0,o.kt)("p",null,"The TDP number helps with designing what cooling the component needs. Although this has an impact on energy consumption, it does not contribute directly to the estimation. "),(0,o.kt)("h4",{id:"what-is-the-dataset-that-can-can-be-used-for-finding-the-tdp-of-serversmemory"},"What is the dataset that can can be used for finding the TDP of servers/memory?\u200b"),(0,o.kt)("p",null,"Hardware manufacturers provide a data sheet for all their components which contain the TDP number. For example, (the TDP of the server used in Azure App server premium configuration (P2v2) -2nd Generation Intel\xae Xeon\xae Platinum 8272CL is 205 Watts - (",(0,o.kt)("a",{parentName:"p",href:"https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html"},"https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html"),")"))}p.isMDXComponent=!0}}]);