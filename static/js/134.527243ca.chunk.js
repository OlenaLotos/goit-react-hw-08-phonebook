"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{9140:function(e,a,r){r.d(a,{Z:function(){return R}});var i=r(1413),s=r(5987),t=r(1694),l=r.n(t),o=r(2791),n=r(162),d=r(6543),c=r(7472),f=r(184),m=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.variant,d=e.as,c=void 0===d?"img":d,v=(0,s.Z)(e,m),u=(0,n.vE)(r,"card-img");return(0,f.jsx)(c,(0,i.Z)({ref:a,className:l()(o?"".concat(u,"-").concat(o):u,t)},v))}));v.displayName="CardImg";var u=v,b=r(6040),p=["bsPrefix","className","as"],x=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,d=e.as,c=void 0===d?"div":d,m=(0,s.Z)(e,p),v=(0,n.vE)(r,"card-header"),u=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(b.Z.Provider,{value:u,children:(0,f.jsx)(c,(0,i.Z)((0,i.Z)({ref:a},m),{},{className:l()(t,v)}))})}));x.displayName="CardHeader";var Z=x,N=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,c.Z)("h5"),h=(0,c.Z)("h6"),P=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:y}),I=(0,d.Z)("card-subtitle",{Component:h}),w=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),g=(0,d.Z)("card-footer"),F=(0,d.Z)("card-img-overlay"),C=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.bg,d=e.text,c=e.border,m=e.body,v=e.children,u=e.as,b=void 0===u?"div":u,p=(0,s.Z)(e,N),x=(0,n.vE)(r,"card");return(0,f.jsx)(b,(0,i.Z)((0,i.Z)({ref:a},p),{},{className:l()(t,x,o&&"bg-".concat(o),d&&"text-".concat(d),c&&"border-".concat(c)),children:m?(0,f.jsx)(P,{children:v}):v}))}));C.displayName="Card",C.defaultProps={body:!1};var R=Object.assign(C,{Img:u,Title:j,Subtitle:I,Body:P,Link:w,Text:k,Header:Z,Footer:g,ImgOverlay:F})},3855:function(e,a,r){r.d(a,{Z:function(){return ae}});var i=r(1413),s=r(5987),t=r(1694),l=r.n(t),o=r(2007),n=r.n(o),d=r(2791),c=r(184),f=["as","className","type","tooltip"],m={type:n().string,tooltip:n().bool,as:n().elementType},v=d.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,o=e.className,n=e.type,d=void 0===n?"valid":n,m=e.tooltip,v=void 0!==m&&m,u=(0,s.Z)(e,f);return(0,c.jsx)(t,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:l()(o,"".concat(d,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=m;var u=v,b=d.createContext({}),p=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],Z=d.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,o=e.className,n=e.type,f=void 0===n?"checkbox":n,m=e.isValid,v=void 0!==m&&m,u=e.isInvalid,Z=void 0!==u&&u,N=e.as,y=void 0===N?"input":N,h=(0,s.Z)(e,x),P=(0,d.useContext)(b).controlId;return t=(0,p.vE)(t,"form-check-input"),(0,c.jsx)(y,(0,i.Z)((0,i.Z)({},h),{},{ref:a,type:f,id:r||P,className:l()(o,t,v&&"is-valid",Z&&"is-invalid")}))}));Z.displayName="FormCheckInput";var N=Z,y=["bsPrefix","className","htmlFor"],h=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.htmlFor,n=(0,s.Z)(e,y),f=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-check-label"),(0,c.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:o||f,className:l()(t,r)}))}));h.displayName="FormCheckLabel";var P=h;var j=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=d.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,m=e.reverse,v=void 0!==m&&m,x=e.disabled,Z=void 0!==x&&x,y=e.isValid,h=void 0!==y&&y,I=e.isInvalid,w=void 0!==I&&I,k=e.feedbackTooltip,g=void 0!==k&&k,F=e.feedback,C=e.feedbackType,R=e.className,E=e.style,T=e.title,S=void 0===T?"":T,z=e.type,V=void 0===z?"checkbox":z,L=e.label,O=e.children,H=e.as,_=void 0===H?"input":H,M=(0,s.Z)(e,j);t=(0,p.vE)(t,"form-check"),o=(0,p.vE)(o,"form-switch");var B=(0,d.useContext)(b).controlId,G=(0,d.useMemo)((function(){return{controlId:r||B}}),[B,r]),A=!O&&null!=L&&!1!==L||function(e,a){return d.Children.toArray(e).some((function(e){return d.isValidElement(e)&&e.type===a}))}(O,P),q=(0,c.jsx)(N,(0,i.Z)((0,i.Z)({},M),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:h,isInvalid:w,disabled:Z,as:_}));return(0,c.jsx)(b.Provider,{value:G,children:(0,c.jsx)("div",{style:E,className:l()(R,A&&t,f&&"".concat(t,"-inline"),v&&"".concat(t,"-reverse"),"switch"===V&&o),children:O||(0,c.jsxs)(c.Fragment,{children:[q,A&&(0,c.jsx)(P,{title:S,children:L}),F&&(0,c.jsx)(u,{type:C,tooltip:g,children:F})]})})})}));I.displayName="FormCheck";var w=Object.assign(I,{Input:N,Label:P}),k=r(4942),g=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=d.forwardRef((function(e,a){var r,t,o=e.bsPrefix,n=e.type,f=e.size,m=e.htmlSize,v=e.id,u=e.className,x=e.isValid,Z=void 0!==x&&x,N=e.isInvalid,y=void 0!==N&&N,h=e.plaintext,P=e.readOnly,j=e.as,I=void 0===j?"input":j,w=(0,s.Z)(e,g),F=(0,d.useContext)(b).controlId;(o=(0,p.vE)(o,"form-control"),h)?r=(0,k.Z)({},"".concat(o,"-plaintext"),!0):(t={},(0,k.Z)(t,o,!0),(0,k.Z)(t,"".concat(o,"-").concat(f),f),r=t);return(0,c.jsx)(I,(0,i.Z)((0,i.Z)({},w),{},{type:n,size:m,ref:a,readOnly:P,id:v||F,className:l()(u,r,Z&&"is-valid",y&&"is-invalid","color"===n&&"".concat(o,"-color"))}))}));F.displayName="FormControl";var C=Object.assign(F,{Feedback:u}),R=(0,r(6543).Z)("form-floating"),E=["controlId","as"],T=d.forwardRef((function(e,a){var r=e.controlId,t=e.as,l=void 0===t?"div":t,o=(0,s.Z)(e,E),n=(0,d.useMemo)((function(){return{controlId:r}}),[r]);return(0,c.jsx)(b.Provider,{value:n,children:(0,c.jsx)(l,(0,i.Z)((0,i.Z)({},o),{},{ref:a}))})}));T.displayName="FormGroup";var S=T,z=r(2677),V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=d.forwardRef((function(e,a){var r=e.as,t=void 0===r?"label":r,o=e.bsPrefix,n=e.column,f=e.visuallyHidden,m=e.className,v=e.htmlFor,u=(0,s.Z)(e,V),x=(0,d.useContext)(b).controlId;o=(0,p.vE)(o,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var N=l()(m,o,f&&"visually-hidden",n&&Z);return v=v||x,n?(0,c.jsx)(z.Z,(0,i.Z)({ref:a,as:"label",className:N,htmlFor:v},u)):(0,c.jsx)(t,(0,i.Z)({ref:a,className:N,htmlFor:v},u))}));L.displayName="FormLabel",L.defaultProps={column:!1,visuallyHidden:!1};var O=L,H=["bsPrefix","className","id"],_=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.id,n=(0,s.Z)(e,H),f=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-range"),(0,c.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:l()(t,r),id:o||f}))}));_.displayName="FormRange";var M=_,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],G=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,o=e.htmlSize,n=e.className,f=e.isValid,m=void 0!==f&&f,v=e.isInvalid,u=void 0!==v&&v,x=e.id,Z=(0,s.Z)(e,B),N=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-select"),(0,c.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:o,ref:a,className:l()(n,r,t&&"".concat(r,"-").concat(t),m&&"is-valid",u&&"is-invalid"),id:x||N}))}));G.displayName="FormSelect";var A=G,q=["bsPrefix","className","as","muted"],D=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,f=(0,s.Z)(e,q);return r=(0,p.vE)(r,"form-text"),(0,c.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:l()(t,r,d&&"text-muted")}))}));D.displayName="FormText";var J=D,K=d.forwardRef((function(e,a){return(0,c.jsx)(w,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));K.displayName="Switch";var Q=Object.assign(K,{Input:w.Input,Label:w.Label}),U=["bsPrefix","className","children","controlId","label"],W=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.children,n=e.controlId,d=e.label,f=(0,s.Z)(e,U);return r=(0,p.vE)(r,"form-floating"),(0,c.jsxs)(S,(0,i.Z)((0,i.Z)({ref:a,className:l()(t,r),controlId:n},f),{},{children:[o,(0,c.jsx)("label",{htmlFor:n,children:d})]}))}));W.displayName="FloatingLabel";var X=W,Y=["className","validated","as"],$={_ref:n().any,validated:n().bool,as:n().elementType},ee=d.forwardRef((function(e,a){var r=e.className,t=e.validated,o=e.as,n=void 0===o?"form":o,d=(0,s.Z)(e,Y);return(0,c.jsx)(n,(0,i.Z)((0,i.Z)({},d),{},{ref:a,className:l()(r,t&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:S,Control:C,Floating:R,Check:w,Switch:Q,Label:O,Text:J,Range:M,Select:A,FloatingLabel:X})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=134.527243ca.chunk.js.map