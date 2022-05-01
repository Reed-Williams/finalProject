var R=Object.defineProperty;var P=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(n,e,t)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,A=(n,e)=>{for(var t in e||(e={}))V.call(e,t)&&S(n,t,e[t]);if(P)for(var t of P(e))M.call(e,t)&&S(n,t,e[t]);return n};import{o as u,c as h,a as O,b as s,d as c,e as N,f as g,F as T,r as W,n as B,t as k,g as I,u as l,h as C,i as d,w,j as U,v as D,k as _,R as p,l as F,m as j,p as H,q as z,s as q}from"./vendor.9859e673.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};G();const J="modulepreload",E={},Y="/",f=function(e,t){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=`${Y}${a}`,a in E)return;E[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":J,o||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),o)return new Promise((m,v)=>{r.addEventListener("load",m),r.addEventListener("error",v)})})).then(()=>e())};var L=(n,e)=>{const t=n.__vccOpts||n;for(const[a,o]of e)t[a]=o;return t};const K={},Q={class:"container columns is-centered"},X=O('<div class="column is-two-thirds"><h1 class="title">About Page</h1><h2 class="subtitle">Description of my App</h2><div class="content"><p> You can log into one of three accounts at the <strong>Login</strong> page by typing in a matching username and password from the table below:</p><div class="columns is-centered"><div class="column is-half"><table class="table is-bordered is-narrow is-hoverable"><thead><th>UserName</th><th>Password</th></thead><tbody><tr><td>seashellSeller</td><td>starfish</td></tr><tr><td>stevenWilliams67</td><td>mustang</td></tr><tr><td>percyJackson</td><td>blueberry</td></tr></tbody></table></div></div><p> OR you can simply click the <strong>SallyLoginTest</strong> button to login to Sally&#39;s account. A list of user information can be found in <em>/models/user.ts</em>. </p></div><br><div class="content"> Once you are logged in, you can view the protected routes to the three pages in the <strong>Task</strong> dropdown menu in the nav bar: <ul><li>Tasks Assigned to Me</li><li>Tasks Created by Me</li><li>Tasks Grouped by Date</li></ul><br><div class="columns is-centered"><div class="column is-2"><h1 class="title is-6">Tasks For Me</h1><p>This section shows all the tasks that are <em>assigned to</em> the user who is logged in. There are clickable tabs to see either all tasks, completed tasks, or uncompleted tasks.</p></div><div class="column is-2"><h1 class="title is-6">Tasks I Made</h1><p>This section is similar to <strong>Tasks For Me</strong>, but the tasks the user has <em>created</em> are visible. The user can also create new task for either themselves or for others in this segment.</p></div><div class="column is-8"><h1 class="title is-6">Tasks Organized By Due Date</h1><p>This section has a table displaying all tasks associated with the current user, so the current user could be the person who was assigned the task, created the task, or both.</p><p>The tasks are shown in order from oldest at the top to newest at the bottom, and are color coded to display the following: <ul><li class="has-background-danger">Past Due</li><li class="has-background-primary">Due Today</li><li class="has-background-warning">Due in the upcoming week</li><li class="has-background-success">Due beyond the upcoming week</li></ul></p></div></div></div></div>',1),Z=[X];function ss(n,e){return u(),h("div",Q,Z)}var es=L(K,[["render",ss]]);const ts={},os={class:"columns is-centered"},ns=s("div",{class:"column is-half"},[s("div",{class:"section is-medium"},[s("h1",{class:"title"}," Task Together "),s("p",null,[c("The organization of group collaboration is made easy when we start "),s("strong",null,[s("em",null,"to-"),c("doing")]),c(" things together. ")]),s("img",{src:"https://cdn.pixabay.com/photo/2015/02/12/05/11/idea-633315__340.png"})])],-1),as=[ns];function is(n,e){return u(),h("div",os,as)}var ls=L(ts,[["render",is]]);const y=N("alerts",{state:()=>({notifications:[{message:"",type:""}]}),actions:{close(n){this.notifications.splice(n,1)}}}),cs={class:"columns mt-3"},rs=s("div",{class:"column is-10"},null,-1),ds=g({setup(n){const e=y();return(t,a)=>(u(),h("div",cs,[rs,(u(!0),h(T,null,W(l(e).notifications,(o,i)=>(u(),h("div",null,[o.message!=""?(u(),h("div",{key:0,class:B(`column notification is-light is-${o.type}`)},k(o.message),3)):I("",!0)]))),256))]))}}),us={class:"columns is-centered"},hs={class:"column is-two-thirds"},_s={class:"section"},ps=s("h1",null,"Shortcut to login to Sally's account:",-1),ms=["onClick"],vs=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),gs=s("span",null,"SallyLoginTest",-1),bs=[vs,gs],fs=s("p",{class:"pt-3"},"You may also type in a valid username and password below.",-1),ks={class:"section is-centered"},ys=s("div",{class:"title"}," Welcome Back! ",-1),$s={class:"box"},ws={class:"field"},Ts=s("label",{class:"label"},"Username",-1),Ls={class:"control"},xs={class:"field"},Ps=s("label",{class:"label"},"Password",-1),Ss={class:"control"},As=["onClick"],Cs=c(" Don't have an account? "),Us=c(" Click Here "),Ds=c(" to join us. "),Es=g({setup(n){const e=C(""),t=C(""),a=y(),o=x();function i(){o.Login(e.value,t.value)}function r(){o.Login("seashellSeller","starfish")}return(m,v)=>(u(),h(T,null,[d(ds),s("div",us,[s("div",hs,[s("div",_s,[ps,s("button",{class:"button is-primary",onClick:w(r,["prevent"])},bs,8,ms),fs]),s("div",ks,[ys,s("form",$s,[s("div",ws,[Ts,s("div",Ls,[U(s("input",{class:"input","onUpdate:modelValue":v[0]||(v[0]=b=>e.value=b)},null,512),[[D,e.value]])])]),s("div",xs,[Ps,s("div",Ss,[U(s("input",{class:"input","onUpdate:modelValue":v[1]||(v[1]=b=>t.value=b)},null,512),[[D,t.value]])])]),l(a).notifications.length==2?(u(),h("button",{key:0,class:"button is-primary",onClick:v[2]||(v[2]=w(b=>{l(a).close(1),i()},["prevent"]))},"Sign in")):(u(),h("button",{key:1,class:"button is-primary",onClick:w(i,["prevent"])},"Sign in",8,As)),s("div",null,[s("span",null,[Cs,d(l(p),{to:"/signUp",class:"has-text-link"},{default:_(()=>[Us]),_:1}),Ds])])])])])])],64))}}),Os={class:"columns is-centered"},Ns={class:"column is-two-thirds"},Rs={class:"section is-centered"},Vs=s("div",{class:"title"}," We're So Glad You Decided to Join Us: ",-1),Ms=s("div",{class:"subtitle"}," It's a great day to get things done! ",-1),Ws={class:"box"},Bs=O('<div class="field"><label class="label">Name</label><div class="control"><input class="input"></div></div><div class="field"><label class="label">Username</label><div class="control"><input class="input"></div></div><div class="field"><label class="label">Password</label><div class="control"><input class="input"></div></div><div class="field"><label class="label">Confirm Password</label><div class="control"><input class="input"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input"></div></div><div class="block"><label class="checkbox"><input type="checkbox"> Please email me when deadlines are near and when my friends assign me new tasks. </label></div><button class="button is-primary">Sign Up</button>',7),Is=c(" Already have an account? "),Fs=c(" Click Here "),js=c(" to get back to work. "),Hs=g({setup(n){return(e,t)=>(u(),h("div",Os,[s("div",Ns,[s("div",Rs,[Vs,Ms,s("form",Ws,[Bs,s("div",null,[s("span",null,[Is,d(l(p),{to:"/login",class:"has-text-link"},{default:_(()=>[Fs]),_:1}),js])])])])])]))}}),zs=[{path:"/about",component:es},{path:"/",component:ls},{path:"/login",component:Es},{path:"/signUp",component:Hs},{path:"/assignedTasks",component:()=>f(()=>import("./AssignedTasks.2d52b0e6.js"),["assets/AssignedTasks.2d52b0e6.js","assets/tasks.7a375410.js","assets/vendor.9859e673.js","assets/TaskView.65565b92.js"])},{path:"/calendar",component:()=>f(()=>import("./Calendar.42f390f2.js"),["assets/Calendar.42f390f2.js","assets/tasks.7a375410.js","assets/vendor.9859e673.js"])},{path:"/createdTasks",component:()=>f(()=>import("./CreatedTasks.109972c4.js"),["assets/CreatedTasks.109972c4.js","assets/tasks.7a375410.js","assets/vendor.9859e673.js","assets/TaskView.65565b92.js"])},{path:"/success",component:()=>f(()=>import("./SuccessfulLogin.1efbaf20.js"),["assets/SuccessfulLogin.1efbaf20.js","assets/vendor.9859e673.js"])}],$=F({history:j(),routes:zs});$.beforeEach((n,e)=>{const t=x();if(console.log("New path click"),console.log({to:n}),console.log({from:e}),console.log("destination before if statement:"),console.log(t.destinationUrl),console.log("destination After if statement:"),console.log(t.destinationUrl),["/assignedTasks","/calendar","/createdTasks","/success"].includes(n.path)&&!t.user)return t.destinationUrl=n.path,"/login"});const qs="http://localhost:3001/api/";function Gs(n,e,t,a){let o={headers:a};return e&&(o={method:t!=null?t:"POST",cache:"no-cache",headers:A({"Content-Type":"application/json"},a),body:JSON.stringify(e)}),fetch(qs+n,o).then(i=>i.json())}const x=N("session",{state:()=>({user:null,destinationUrl:null}),actions:{async Login(n,e){var a;const t=y();try{const o=await this.api("users/login",{username:n,password:e});o&&(t.notifications.push({type:"success",message:`Welcome back ${o.username}!`}),this.user=o,$.push((a=this.destinationUrl)!=null?a:"/success"))}catch(o){t.notifications.push({type:"danger",message:o.message})}},Logout(){this.user=null,this.destinationUrl=null,$.push("/login")},async api(n,e,t,a={}){var i,r;const o=y();((i=this.user)==null?void 0:i.token)&&(a.Authorization=`Bearer ${this.user.token}`);try{const m=await Gs(n,e,t,a);if((r=m.errors)==null?void 0:r.length)throw{message:m.errors.join(", ")};return await m.data}catch(m){o.notifications.push({type:"danger",message:m.message})}}}}),Js={key:0,class:"buttons"},Ys=s("strong",null,"Sign up",-1),Ks=s("strong",null,"Login",-1),Qs={key:1,class:"buttons"},Xs={class:"avatar"},Zs=s("br",null,null,-1),se=s("strong",null,"Log out",-1),ee=g({setup(n){const e=x();return(t,a)=>l(e).user?(u(),h("div",Qs,[s("div",Xs,[c(k(l(e).user.name)+" @ "+k(l(e).user.username)+" ",1),Zs,s("i",null,k(l(e).user.email),1)]),d(l(p),{class:"button us-primary",onClick:a[0]||(a[0]=o=>l(e).Logout()),to:"/login"},{default:_(()=>[se]),_:1})])):(u(),h("div",Js,[d(l(p),{class:"button",to:"/signup"},{default:_(()=>[Ys]),_:1}),d(l(p),{class:"button",to:"/login"},{default:_(()=>[Ks]),_:1})]))}}),te={class:"navbar is-dark",role:"navigation","aria-label":"main navigation"},oe=s("div",{class:"navbar-brand"},[s("a",{class:"navbar-item",href:"#"},[s("img",{src:"https://cdn.pixabay.com/photo/2017/07/07/02/06/symbol-2480163__340.png",width:"30",height:"30"})]),s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})])],-1),ne={id:"navbarBasicExample",class:"navbar-menu"},ae={class:"navbar-start"},ie=c(" Home "),le=c(" About Us "),ce={class:"navbar-item has-dropdown is-hoverable"},re=s("a",{class:"navbar-link"}," Tasks ",-1),de={class:"navbar-dropdown"},ue=c(" Tasks Assigned to Me "),he=c(" Tasks Created by Me "),_e=c(" Tasks Grouped by Date "),pe={class:"navbar-end"},me={class:"navbar-item"},ve=g({setup(n){return(e,t)=>(u(),h("nav",te,[oe,s("div",ne,[s("div",ae,[d(l(p),{class:"navbar-item",to:"/"},{default:_(()=>[ie]),_:1}),d(l(p),{class:"navbar-item",to:"/about"},{default:_(()=>[le]),_:1}),s("div",ce,[re,s("div",de,[d(l(p),{class:"navbar-item",to:"/assignedTasks"},{default:_(()=>[ue]),_:1}),d(l(p),{class:"navbar-item",to:"/createdTasks"},{default:_(()=>[he]),_:1}),d(l(p),{class:"navbar-item",to:"/calendar"},{default:_(()=>[_e]),_:1})])])]),s("div",pe,[s("div",me,[d(ee)])])])]))}}),ge={},be={class:"footer"},fe=s("div",{class:"content has-text-centered"},[s("p",null,[s("strong",null,"Advanced Web Programming Assignments"),c(" by "),s("a",{href:"https://github.com/Reed-Williams"},"Reed Williams"),c(". ")])],-1),ke=[fe];function ye(n,e){return u(),h("footer",be,ke)}var $e=L(ge,[["render",ye]]);const we=g({setup(n){return(e,t)=>{const a=H("router-view");return u(),h(T,null,[d(ve),s("div",null,[d(a)]),d($e)],64)}}});z(we).use($).use(q()).mount("#app");export{x as u};