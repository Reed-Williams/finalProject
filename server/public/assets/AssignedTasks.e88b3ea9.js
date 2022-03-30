import{f as _,h as m,y as v,o,c as a,b as s,n as i,F as g,r as f,u as r,w as C,z as k,t as d,d as c,i as b}from"./vendor.b950b4a6.js";import{u as y}from"./tasks.94be90b7.js";import{s as A}from"./index.c80fcf96.js";const x={class:"panel"},T=s("p",{class:"panel-heading"}," Tasks for me to do... ",-1),w={class:"tabs is-boxed"},$=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list"})]),s("span",null,"Current")],-1),B=[$],D=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times"})]),s("span",null,"Completed")],-1),V=[D],I=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-day"})]),s("span",null,"All")],-1),N=[I],U={class:"container level"},z={class:"level-left"},F={class:"level-item"},H=["onUpdate:modelValue"],M={class:"level-item"},S=c(" \xA0 "),W={key:0},E=c(" Was assigned by: \xA0 "),L=s("strong",null," Me ",-1),j=[E,L],q={key:1},G=c(" Was assigned by: \xA0 "),J={class:"level-right"},K={class:"level-item"},O=c("Due: \xA0 "),P=_({setup(u){const n=y(),t=m("All"),p=v(()=>{switch(t.value){case"Completed":return n.getCompletedAssignedTasks;case"Current":return n.getUncompletedAssignedTasks;default:return n.getAllAssignedTasks}});return(Y,l)=>(o(),a("article",x,[T,s("div",w,[s("ul",null,[s("li",{class:i({"is-active":t.value=="Current"}),onClick:l[0]||(l[0]=e=>t.value="Current")},B,2),s("li",{class:i({"is-active":t.value=="Completed"}),onClick:l[1]||(l[1]=e=>t.value="Completed")},V,2),s("li",{class:i({"is-active":t.value=="All"}),onClick:l[2]||(l[2]=e=>t.value="All")},N,2)])]),(o(!0),a(g,null,f(r(p),e=>(o(),a("a",{class:i(["panel-block",{"is-completed":t.value!="Completed"&&e.completed}]),key:e.title},[s("div",U,[s("div",z,[s("div",F,[C(s("input",{type:"checkbox","onUpdate:modelValue":h=>e.completed=h},null,8,H),[[k,e.completed]])]),s("div",M,[s("p",null,[s("strong",null,d(e.title),1)]),S,e.assignedBy==r(A).user.name?(o(),a("p",W,j)):(o(),a("p",q,[G,s("strong",null,d(e.assignedBy),1)]))])]),s("div",J,[s("p",K,[O,s("strong",null,d(e.dueDate.toDateString()),1)])])])],2))),128))]))}}),Q={class:"section"},R=s("h1",{class:"title is-2"},"Tasks that I Have to Complete...",-1),X=s("p",{class:"subtitle is-4"},"Here I can view what tasks I need to do, who the tasks were assigned by, and when the tasks are due. ",-1),ts=_({setup(u){return(n,t)=>(o(),a("div",Q,[R,X,b(P)]))}});export{ts as default};
