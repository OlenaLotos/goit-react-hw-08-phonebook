"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{7410:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,o,i,s,c,p=t(168),d=t(82),l=d.ZP.section(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n  padding: 20px;\n"]))),x=d.ZP.h1(a||(a=(0,p.Z)(["\n  margin-bottom: 8px;\n"]))),u=t(4942),b=t(1413),m=t(5861),f=t(885),h=t(7757),g=t.n(h),Z=t(2791),v=t(1060),w=d.ZP.form(o||(o=(0,p.Z)(["\n  width: 320px;\n  padding: 8px;\n  border: 1px solid rgb(95, 149, 183); ;\n"]))),y=d.ZP.input(i||(i=(0,p.Z)(["\n  position: relative;\n  font-size: 12px;\n  background: #ecf1f4;\n  border-radius: 4px;\n  line-height: 25px;\n  height: 25px;\n  width: 250px;\n  padding: 0 10px;\n  border: 1px solid #b6cfeb;\n  margin-bottom: 20px;\n  &:active {\n    box-shadow: rgb(95, 149, 183);\n  }\n"]))),j=d.ZP.label(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 20px;\n"]))),k=d.ZP.button(c||(c=(0,p.Z)(["\n  cursor: pointer;\n  &:hover {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  }\n  border-radius: 4px;\n  border-color: rgb(95, 149, 183);\n  &:active {\n    box-shadow: rgb(95, 149, 183) 0px 13px 27px -5px,\n      rgb(95, 149, 183) 0px 8px 16px -8px;\n    background-color: rgb(139, 173, 194);\n  }\n"]))),P=t(5264),C=t(184);function z(){var n=(0,v.wY)(),e=n.data,t=n.refetch,r=(0,v.F3)(),a=(0,f.Z)(r,2),o=a[0],i=a[1].isLoading,s=(0,Z.useState)({name:"",number:""}),c=(0,f.Z)(s,2),p=c[0],d=c[1],l=function(){var n=(0,m.Z)(g().mark((function n(r){var a,i,s,c;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),a=r.target,i=a.elements,s=i.name,c=i.number,n.next=5,e.some((function(n){return n.name===s.value}));case 5:if(!n.sent){n.next=10;break}alert("Contact is already in your contacts"),n.next=12;break;case 10:return n.next=12,o({name:s.value,number:c.value});case 12:console.log(s.value),console.log(c.value),P.Notify.success("Contact successfully added"),h(),t();case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(n){d((function(e){return(0,b.Z)((0,b.Z)({},e),{},(0,u.Z)({},n.target.name,n.target.value))}))},h=function(){d({name:"",number:""})};return(0,C.jsxs)(w,{onSubmit:l,children:[(0,C.jsx)(j,{children:"Name"}),(0,C.jsx)(y,{type:"text",name:"name",value:p.name,placeholder:"Enter name",onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)(j,{children:"Number"}),(0,C.jsx)(y,{type:"tel",name:"number",value:p.number,placeholder:"Enter number",onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(k,{type:"submit",disabled:i,children:"Add new contact"})]})}var A,N,L,F,_,S,q=t(5048),D=t(5891),E=d.ZP.label(A||(A=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 20px;\n  width: 250px;\n"]))),K=d.ZP.input(N||(N=(0,p.Z)(["\n  width: 200px;\n  margin-top: 4px;\n  position: relative;\n  font-size: 12px;\n  background: #ecf1f4;\n  border-radius: 4px;\n  line-height: 25px;\n  height: 25px;\n  width: 250px;\n  padding: 0 10px;\n  border: 1px solid #b6cfeb;\n  margin-bottom: 20px;\n"])));function Y(){var n=(0,q.v9)(D.zK).name,e=(0,q.I0)();return(0,C.jsxs)(E,{children:["Find my contacts by name",(0,C.jsx)(K,{type:"text",name:"filter",value:n,onChange:function(n){e((0,D.hX)(n.target.value))}})]})}var B,I=d.ZP.li(L||(L=(0,p.Z)(["\n  font-family: 'Roboto', sans-serif;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 500;\n  list-style: inside;\n"]))),J=d.ZP.button(F||(F=(0,p.Z)(["\n  cursor: pointer;\n  &:hover {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  }\n  border-radius: 4px;\n  border-color: rgb(95, 149, 183);\n  &:active {\n    box-shadow: rgb(95, 149, 183) 0px 13px 27px -5px,\n      rgb(95, 149, 183) 0px 8px 16px -8px;\n    background-color: rgb(139, 173, 194);\n  }\n"]))),M=d.ZP.a(_||(_=(0,p.Z)(["\n  list-style: none;\n  font-style: italic;\n  font-size: large;\n  color: black;\n  &:hover {\n    background-color: #ebf1f3;\n    font-weight: 700;\n  }\n"]))),R=(d.ZP.img(S||(S=(0,p.Z)(["\n  border-radius: 4px;\n  padding-right: 4px;\n  height: auto;\n"]))),function(n){var e=n.id,t=n.name,r=n.number,a=(0,v.zr)(),o=(0,f.Z)(a,2),i=o[0],s=o[1].isLoading;return(0,C.jsxs)(I,{children:[(0,C.jsxs)(M,{href:"tel:{number}",children:[t,": ",r]}),(0,C.jsx)(J,{type:"button",onClick:function(){return function(n){i(n),P.Notify.success("Contact successfully removed")}(e)},disabled:s,children:"Delete"})]},e)}),X=d.ZP.ul(B||(B=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 15px;\n  width: 260px;\n"])));function $(){var n=(0,v.wY)(),e=n.data,t=n.isSuccess,r=(0,q.v9)(D.zK);if(t){var a=e.filter((function(n){return n.name.toLowerCase().includes(r.toLocaleLowerCase())}));return(0,C.jsx)(X,{children:a.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsx)(R,{id:e,name:t,number:r},e)}))})}}function G(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(l,{className:"b",children:[(0,C.jsx)(x,{children:"Phonebook"}),(0,C.jsx)(z,{})]}),(0,C.jsxs)(l,{children:[(0,C.jsx)(x,{children:"Contacts"}),(0,C.jsx)(Y,{}),(0,C.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=410.f40f421d.chunk.js.map