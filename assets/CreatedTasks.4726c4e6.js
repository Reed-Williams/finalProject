import{e as h,r as k,p as g,o as n,c as i,b as s,q as r,w as c,v as p,u as l,f as _,F as x,s as C,x as T,t as u,d,g as y}from"./vendor.a86cb1be.js";import{u as b}from"./tasks.4f8d27ab.js";import{s as w}from"./index.0b6b5ce8.js";const A={class:"panel"},D=s("p",{class:"panel-heading"}," Tasks I have created... ",-1),V={class:"tabs is-boxed"},$=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list"})]),s("span",null,"Current")],-1),N=[$],F=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times"})]),s("span",null,"Completed")],-1),M=[F],U=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-day"})]),s("span",null,"All")],-1),B=[U],I={class:"field is-grouped"},Y={class:"control has-icons-left is-expanded"},S=s("span",{class:"icon is-left"},[s("i",{class:"fa-solid fa-pencil","aria-hidden":"true"})],-1),W={class:"control has-icons-left"},H=s("span",{class:"icon is-left"},[s("i",{class:"fa-solid fa-user","aria-hidden":"true"})],-1),q={class:"control has-icons-left"},z=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),E={class:"control"},L={class:"container level"},j={class:"level-left"},G={class:"level-item"},J=["onUpdate:modelValue"],K={class:"level-item"},O=d(" \xA0 "),P={key:0},Q=d(" Was assigned for: \xA0 "),R=s("strong",null," Me ",-1),X=[Q,R],Z={key:1},ss=d(" Was assigned for: \xA0 "),es={class:"level-right"},ts={class:"level-item"},as=d("Due: \xA0 "),ls=h({setup(m){const a=b(),o=k("All"),v=g(()=>{switch(o.value){case"Completed":return a.getCompletedCreatedTasks;case"Current":return a.getUncompletedCreatedTasks;default:return a.getAllCreatedTasks}});return(rs,t)=>(n(),i("article",A,[D,s("div",V,[s("ul",null,[s("li",{class:r({"is-active":o.value=="Current"}),onClick:t[0]||(t[0]=e=>o.value="Current")},N,2),s("li",{class:r({"is-active":o.value=="Completed"}),onClick:t[1]||(t[1]=e=>o.value="Completed")},M,2),s("li",{class:r({"is-active":o.value=="All"}),onClick:t[2]||(t[2]=e=>o.value="All")},B,2)])]),s("form",{onSubmit:t[7]||(t[7]=_((...e)=>l(a).addNewTask&&l(a).addNewTask(...e),["prevent"])),class:"has-background-primary py-3 px-2"},[s("div",I,[s("p",Y,[c(s("input",{class:"input is-primary",type:"text",placeholder:"Task title","onUpdate:modelValue":t[3]||(t[3]=e=>l(a).titleText=e)},null,512),[[p,l(a).titleText]]),S]),s("p",W,[c(s("input",{class:"input is-primary",type:"text",placeholder:"Who is this task for?","onUpdate:modelValue":t[4]||(t[4]=e=>l(a).assignedForText=e)},null,512),[[p,l(a).assignedForText]]),H]),s("p",q,[c(s("input",{class:"input is-primary",type:"text",placeholder:"MM/DD/YYYY","onUpdate:modelValue":t[5]||(t[5]=e=>l(a).dueDateText=e)},null,512),[[p,l(a).dueDateText]]),z]),s("p",E,[s("button",{class:"button is-primary is-link",onClick:t[6]||(t[6]=_((...e)=>l(a).addNewTask&&l(a).addNewTask(...e),["prevent"]))},"Add")])])],32),(n(!0),i(x,null,C(l(v),e=>(n(),i("a",{class:r(["panel-block",{"is-completed":o.value!="Completed"&&e.completed}]),key:e.title},[s("div",L,[s("div",j,[s("div",G,[c(s("input",{type:"checkbox","onUpdate:modelValue":f=>e.completed=f},null,8,J),[[T,e.completed]])]),s("div",K,[s("p",null,[s("strong",null,u(e.title),1)]),O,e.assignedFor==l(w).user.name?(n(),i("p",P,X)):(n(),i("p",Z,[ss,s("strong",null,u(e.assignedFor),1)]))])]),s("div",es,[s("p",ts,[as,s("strong",null,u(e.dueDate.toDateString()),1)])])])],2))),128))]))}}),os={class:"section"},ns=s("h1",{class:"title is-2"},"Tasks that I Have Created...",-1),is=s("p",{class:"subtitle is-4"},"Here I can create new tasks and view what tasks I have already created, who the tasks were assigned for, and when the tasks are due. ",-1),ds=s("p",{class:"has-text-danger"},[d(" Be sure to input the "),s("strong",null,"name"),d(" of a valid user to correctly assign the task. ")],-1),_s=h({setup(m){return(a,o)=>(n(),i("div",os,[ns,is,ds,y(ls)]))}});export{_s as default};
