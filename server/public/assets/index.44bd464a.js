var R=Object.defineProperty;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var A=(a,t,e)=>t in a?R(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,O=(a,t)=>{for(var e in t||(t={}))N.call(t,e)&&A(a,e,t[e]);if(C)for(var e of C(t))W.call(t,e)&&A(a,e,t[e]);return a};import{o as h,c as p,a as M,b as s,d,e as D,f as b,F as P,r as j,n as B,u as l,t as T,g as q,h as L,i as u,w as x,j as v,v as f,k as _,R as m,l as F,m as H,p as z,q as G,s as J,x as Y}from"./vendor.26d13791.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}};K();const Q="modulepreload",E={},X="/",$=function(t,e){return!e||e.length===0?t():Promise.all(e.map(n=>{if(n=`${X}${n}`,n in E)return;E[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Q,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((c,g)=>{i.addEventListener("load",c),i.addEventListener("error",g)})})).then(()=>t())};var S=(a,t)=>{const e=a.__vccOpts||a;for(const[n,o]of t)e[n]=o;return e};const Z={},ss={class:"container columns is-centered"},es=M('<div class="column is-two-thirds"><h1 class="title">About Page</h1><h2 class="subtitle">Description of my App</h2><div class="content"><p><strong> The sign-up page is fully functioning and will make a new user in the database. If the two passwords do not match when setting up the user, a notification pops up. If required fields are missing, an error also pops up.</strong></p><p><strong> The tasks also function through the database. New tasks are added using a POST method; when check boxes are checked the data base is updated with a PATCH method.</strong></p><p> You can log into one of various accounts at the <strong>Login</strong> page by typing in a matching username and password from the table below:</p><div class="columns is-centered"><div class="column is-half"><table class="table is-bordered is-narrow is-hoverable"><thead><th>UserName</th><th>Password</th></thead><tbody><tr><td>seashellSeller</td><td>starfish</td></tr><tr><td>stevenWilliams67</td><td>mustang</td></tr><tr><td>percyJackson</td><td>blueberry</td></tr><tr><td>williamc18</td><td>password</td></tr><tr><td>fernLover</td><td>npxc</td></tr></tbody></table></div></div><p> OR you can simply click the <strong>SallyLoginTest</strong> button to login to Sally&#39;s account. </p><p>OR you can make a new account on the <strong>Sign Up Page</strong></p></div><br><div class="content"> Once you are logged in, you can view the protected routes to the three pages in the <strong>Task</strong> dropdown menu in the nav bar: <ul><li>Tasks Assigned to Me</li><li>Tasks Created by Me</li><li>Tasks Grouped by Date</li></ul><br><p>The tasks are all in the database, and the database is updated when new tasks are created or when the check box is checked.</p><div class="columns is-centered"><div class="column is-2"><h1 class="title is-6">Tasks For Me</h1><p>This section shows all the tasks that are <em>assigned to</em> the user who is logged in. There are clickable tabs to see either all tasks, completed tasks, or uncompleted tasks.</p></div><div class="column is-2"><h1 class="title is-6">Tasks I Made</h1><p>This section is similar to <strong>Tasks For Me</strong>, but the tasks the user has <em>created</em> are visible. The user can also create new task for either themselves or for others in this segment.</p></div><div class="column is-8"><h1 class="title is-6">Tasks Organized By Due Date</h1><p>This section has a table displaying all tasks associated with the current user, so the current user could be the person who was assigned the task, created the task, or both.</p><p>The tasks are shown in order from oldest at the top to newest at the bottom, and are color coded to display the following: <ul><li class="has-background-danger">Past Due</li><li class="has-background-primary">Due Today</li><li class="has-background-warning">Due in the upcoming week</li><li class="has-background-success">Due beyond the upcoming week</li></ul></p></div></div></div><p>Unfortunately, something is missing with regards to the authentication. Through console.log statements, I know my bearer tokens are being created properly, but when I try to uncomment the &#39;requireAuth&#39; segment when <em>server/index.js</em> passes control over to the tasks controller, I end up with a CORS issue that I could not figure out how to fix. On github in the class project, &#39;requireAuth&#39; is commented out, so I decided to leave my project that way. </p></div>',1),ts=[es];function os(a,t){return h(),p("div",ss,ts)}var ns=S(Z,[["render",os]]);const as={},is={class:"columns is-centered"},rs=s("div",{class:"column is-half"},[s("div",{class:"section is-medium"},[s("h1",{class:"title"}," Task Together "),s("p",null,[d("The organization of group collaboration is made easy when we start "),s("strong",null,[s("em",null,"to-"),d("doing")]),d(" things together. ")]),s("img",{src:"https://cdn.pixabay.com/photo/2015/02/12/05/11/idea-633315__340.png"})])],-1),ls=[rs];function cs(a,t){return h(),p("div",is,ls)}var ds=S(as,[["render",cs]]);const y=D("alerts",{state:()=>({notifications:[{message:"",type:""}]}),actions:{close(a){this.notifications.splice(a,1)}}}),us={class:"columns mt-3"},hs=s("div",{class:"column is-10"},null,-1),ps=["onClick"],I=b({setup(a){const t=y();return(e,n)=>(h(),p("div",us,[hs,(h(!0),p(P,null,j(l(t).notifications,(o,r)=>(h(),p("div",null,[o.message!=""?(h(),p("div",{key:0,class:B(`column notification is-light is-${o.type}`)},[s("button",{class:"delete",onClick:i=>l(t).close(r)},null,8,ps),d(" "+T(o.message),1)],2)):q("",!0)]))),256))]))}}),_s={class:"columns is-centered"},ms={class:"column is-two-thirds"},gs={class:"section"},vs=s("h1",null,"Shortcut to login to Sally's account:",-1),fs=["onClick"],bs=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),ys=s("span",null,"SallyLoginTest",-1),ks=[bs,ys],ws=s("p",{class:"pt-3"},"You may also type in a valid username and password below.",-1),$s={class:"section is-centered"},Ts=s("div",{class:"title"}," Welcome Back! ",-1),xs={class:"box"},Ps={class:"field"},Ls=s("label",{class:"label"},"Username",-1),Ss={class:"control"},Us={class:"field"},Cs=s("label",{class:"label"},"Password",-1),As={class:"control"},Os=["onClick"],Es=d(" Don't have an account? "),Ds=d(" Click Here "),Is=d(" to join us. "),Vs=b({setup(a){const t=L(""),e=L(""),n=y(),o=U();function r(){o.Login(t.value,e.value)}function i(){o.Login("seashellSeller","starfish")}return(c,g)=>(h(),p(P,null,[u(I),s("div",_s,[s("div",ms,[s("div",gs,[vs,s("button",{class:"button is-primary",onClick:x(i,["prevent"])},ks,8,fs),ws]),s("div",$s,[Ts,s("form",xs,[s("div",Ps,[Ls,s("div",Ss,[v(s("input",{class:"input","onUpdate:modelValue":g[0]||(g[0]=w=>t.value=w)},null,512),[[f,t.value]])])]),s("div",Us,[Cs,s("div",As,[v(s("input",{class:"input","onUpdate:modelValue":g[1]||(g[1]=w=>e.value=w)},null,512),[[f,e.value]])])]),l(n).notifications.length==2?(h(),p("button",{key:0,class:"button is-primary",onClick:g[2]||(g[2]=x(w=>{l(n).close(1),r()},["prevent"]))},"Sign in")):(h(),p("button",{key:1,class:"button is-primary",onClick:x(r,["prevent"])},"Sign in",8,Os)),s("div",null,[s("span",null,[Es,u(l(m),{to:"/signUp",class:"has-text-link"},{default:_(()=>[Ds]),_:1}),Is])])])])])])],64))}}),Rs="http://localhost:3001/api/";function V(a,t,e,n){let o={headers:n};return t&&(o={method:e!=null?e:"POST",cache:"no-cache",headers:O({"Content-Type":"application/json"},n),body:JSON.stringify(t)}),fetch(Rs+a,o).then(r=>r.json())}const Ns={class:"columns is-centered"},Ws={class:"column is-two-thirds"},Ms={class:"section is-centered"},js=s("div",{class:"title"}," We're So Glad You Decided to Join Us: ",-1),Bs=s("div",{class:"subtitle"}," It's a great day to get things done! ",-1),qs={class:"box"},Fs={class:"field"},Hs=s("label",{class:"label"},"Name",-1),zs={class:"control"},Gs={class:"field"},Js=s("label",{class:"label"},"Username",-1),Ys={class:"control"},Ks={class:"field"},Qs=s("label",{class:"label"},"Password",-1),Xs={class:"control"},Zs={class:"field"},se=s("label",{class:"label"},"Confirm Password",-1),ee={class:"control"},te={class:"field"},oe=s("label",{class:"label"},"Email",-1),ne={class:"control"},ae=d(" Already have an account? "),ie=d(" Click Here "),re=d(" to get back to work. "),le=b({setup(a){const t=y(),e=F({name:"",username:"",password:"",email:"",id:0}),n=L("");async function o(){if(e.password!=n.value)console.log("In the if statement"),t.notifications.push({type:"danger",message:"Passwords do not match"});else{const r=await V("users/",e,"POST");console.log(r),r.success?(t.notifications.push({type:"success",message:"Welcome! Please log in"}),k.push("/login")):t.notifications.push({type:"danger",message:r.errors[0]})}}return(r,i)=>(h(),p(P,null,[u(I),s("div",Ns,[s("div",Ws,[s("div",Ms,[js,Bs,s("form",qs,[s("div",Fs,[Hs,s("div",zs,[v(s("input",{class:"input",type:"text",placeholder:"Name","onUpdate:modelValue":i[0]||(i[0]=c=>l(e).name=c)},null,512),[[f,l(e).name]])])]),s("div",Gs,[Js,s("div",Ys,[v(s("input",{class:"input",type:"text",placeholder:"username","onUpdate:modelValue":i[1]||(i[1]=c=>l(e).username=c)},null,512),[[f,l(e).username]])])]),s("div",Ks,[Qs,s("div",Xs,[v(s("input",{class:"input",type:"text",placeholder:"Password","onUpdate:modelValue":i[2]||(i[2]=c=>l(e).password=c)},null,512),[[f,l(e).password]])])]),s("div",Zs,[se,s("div",ee,[v(s("input",{class:"input",type:"text",placeholder:"Please retype password","onUpdate:modelValue":i[3]||(i[3]=c=>n.value=c)},null,512),[[f,n.value]])])]),s("div",te,[oe,s("div",ne,[v(s("input",{class:"input",type:"text",placeholder:"Email","onUpdate:modelValue":i[4]||(i[4]=c=>l(e).email=c)},null,512),[[f,l(e).email]])])]),s("button",{class:"button is-primary",onClick:i[5]||(i[5]=x(c=>o(),["prevent"]))},"Sign Up"),s("div",null,[s("span",null,[ae,u(l(m),{to:"/login",class:"has-text-link"},{default:_(()=>[ie]),_:1}),re])])])])])])],64))}}),ce=[{path:"/about",component:ns},{path:"/",component:ds},{path:"/login",component:Vs},{path:"/signUp",component:le},{path:"/assignedTasks",component:()=>$(()=>import("./AssignedTasks.9f796ff9.js"),["assets/AssignedTasks.9f796ff9.js","assets/tasks.9d4a4677.js","assets/vendor.26d13791.js","assets/TaskView.4b618927.js"])},{path:"/calendar",component:()=>$(()=>import("./Calendar.a5bcc093.js"),["assets/Calendar.a5bcc093.js","assets/tasks.9d4a4677.js","assets/vendor.26d13791.js"])},{path:"/createdTasks",component:()=>$(()=>import("./CreatedTasks.504bdbe3.js"),["assets/CreatedTasks.504bdbe3.js","assets/tasks.9d4a4677.js","assets/vendor.26d13791.js","assets/TaskView.4b618927.js"])},{path:"/success",component:()=>$(()=>import("./SuccessfulLogin.3a93e365.js"),["assets/SuccessfulLogin.3a93e365.js","assets/vendor.26d13791.js"])}],k=H({history:z(),routes:ce});k.beforeEach((a,t)=>{const e=U();if(["/assignedTasks","/calendar","/createdTasks","/success"].includes(a.path)&&!e.user)return e.destinationUrl=a.path,"/login"});const U=D("session",{state:()=>({user:null,destinationUrl:null}),actions:{async Login(a,t){var n;const e=y();try{const o=await this.api("users/login",{username:a,password:t});o&&(e.notifications.push({type:"success",message:`Welcome back ${o.username}!`}),this.user=o,k.push((n=this.destinationUrl)!=null?n:"/success"))}catch(o){e.notifications.push({type:"danger",message:o.message})}},Logout(){this.user=null,this.destinationUrl=null,k.push("/login")},async api(a,t,e,n={}){var r,i;const o=y();((r=this.user)==null?void 0:r.token)&&(n.Authorization=`Bearer ${this.user.token}`);try{const c=await V(a,t,e,n);if((i=c.errors)==null?void 0:i.length)throw{message:c.errors.join(", ")};return await c.data}catch(c){o.notifications.push({type:"danger",message:c.message})}}}}),de={key:0,class:"buttons"},ue=s("strong",null,"Sign up",-1),he=s("strong",null,"Login",-1),pe={key:1,class:"buttons"},_e={class:"avatar"},me=s("br",null,null,-1),ge=s("strong",null,"Log out",-1),ve=b({setup(a){const t=U();return(e,n)=>l(t).user?(h(),p("div",pe,[s("div",_e,[d(T(l(t).user.name)+" @ "+T(l(t).user.username)+" ",1),me,s("i",null,T(l(t).user.email),1)]),u(l(m),{class:"button us-primary",onClick:n[0]||(n[0]=o=>l(t).Logout()),to:"/login"},{default:_(()=>[ge]),_:1})])):(h(),p("div",de,[u(l(m),{class:"button",to:"/signup"},{default:_(()=>[ue]),_:1}),u(l(m),{class:"button",to:"/login"},{default:_(()=>[he]),_:1})]))}}),fe={class:"navbar is-dark",role:"navigation","aria-label":"main navigation"},be=s("div",{class:"navbar-brand"},[s("a",{class:"navbar-item",href:"#"},[s("img",{src:"https://cdn.pixabay.com/photo/2017/07/07/02/06/symbol-2480163__340.png",width:"30",height:"30"})]),s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})])],-1),ye={id:"navbarBasicExample",class:"navbar-menu"},ke={class:"navbar-start"},we=d(" Home "),$e=d(" About Us "),Te={class:"navbar-item has-dropdown is-hoverable"},xe=s("a",{class:"navbar-link"}," Tasks ",-1),Pe={class:"navbar-dropdown"},Le=d(" Tasks Assigned to Me "),Se=d(" Tasks Created by Me "),Ue=d(" Tasks Grouped by Date "),Ce={class:"navbar-end"},Ae={class:"navbar-item"},Oe=b({setup(a){return(t,e)=>(h(),p("nav",fe,[be,s("div",ye,[s("div",ke,[u(l(m),{class:"navbar-item",to:"/"},{default:_(()=>[we]),_:1}),u(l(m),{class:"navbar-item",to:"/about"},{default:_(()=>[$e]),_:1}),s("div",Te,[xe,s("div",Pe,[u(l(m),{class:"navbar-item",to:"/assignedTasks"},{default:_(()=>[Le]),_:1}),u(l(m),{class:"navbar-item",to:"/createdTasks"},{default:_(()=>[Se]),_:1}),u(l(m),{class:"navbar-item",to:"/calendar"},{default:_(()=>[Ue]),_:1})])])]),s("div",Ce,[s("div",Ae,[u(ve)])])])]))}}),Ee={},De={class:"footer"},Ie=s("div",{class:"content has-text-centered"},[s("p",null,[s("strong",null,"Advanced Web Programming Assignments"),d(" by "),s("a",{href:"https://github.com/Reed-Williams"},"Reed Williams"),d(". ")])],-1),Ve=[Ie];function Re(a,t){return h(),p("footer",De,Ve)}var Ne=S(Ee,[["render",Re]]);const We=b({setup(a){return(t,e)=>{const n=G("router-view");return h(),p(P,null,[u(Oe),s("div",null,[u(n)]),u(Ne)],64)}}});J(We).use(k).use(Y()).mount("#app");export{I as _,U as u};
