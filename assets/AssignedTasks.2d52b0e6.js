import{u}from"./tasks.7a375410.js";import{_ as p}from"./TaskView.65565b92.js";import{f as _,h as m,x as f,o,c,b as s,n as i,F as h,r as v,u as k,y as C}from"./vendor.9859e673.js";import"./index.ff7684f1.js";const w={class:"section"},b=s("h1",{class:"title is-2"},"Tasks that I Have to Complete...",-1),g=s("p",{class:"subtitle is-4"},"Here I can view what tasks I need to do, who the tasks were assigned by, and when the tasks are due. ",-1),y={class:"panel"},A=s("p",{class:"panel-heading"}," Tasks for me to do... ",-1),T={class:"tabs is-boxed"},B=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list"})]),s("span",null,"Current")],-1),x=[B],$=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times"})]),s("span",null,"Completed")],-1),I=[$],F=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-day"})]),s("span",null,"All")],-1),H=[F],j=_({setup(z){const l=u();l.getAllAssignedTasks();const r="was assigned by",e=m("All"),d=f(()=>{switch(e.value){case"Completed":return l.list.filter(n=>n.completed);case"Current":return l.list.filter(n=>!n.completed);default:return l.list}});return(n,t)=>(o(),c("div",w,[b,g,s("article",y,[A,s("div",T,[s("ul",null,[s("li",{class:i({"is-active":e.value=="Current"}),onClick:t[0]||(t[0]=a=>e.value="Current")},x,2),s("li",{class:i({"is-active":e.value=="Completed"}),onClick:t[1]||(t[1]=a=>e.value="Completed")},I,2),s("li",{class:i({"is-active":e.value=="All"}),onClick:t[2]||(t[2]=a=>e.value="All")},H,2)])]),(o(!0),c(h,null,v(k(d),a=>(o(),C(p,{key:a._id,task:a,words:r,who:a.assignedBy},null,8,["task","who"]))),128))])]))}});export{j as default};
