"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[136],{8407:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(9439),l=n(2791),i=n(6030),s=n(6382),c=n(3168),r=n(577),o=n(4392),d=n(1148),h=n(9031),u=function(e){return e.contacts.data.items},m=function(e){return e.contacts.filter},_=function(e){var t=m(e);return u(e).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},x={label:"ContactForm_label__-cVXI",lightTitle:"ContactForm_lightTitle__sFN2M",lightTextField:"ContactForm_lightTextField__2h74j",darkTextField:"ContactForm_darkTextField__d3+K+",addBtn:"ContactForm_addBtn__CACuJ"},g=n(3329),p=function(){var e=(0,i.v9)(u),t=(0,i.I0)(),n=(0,l.useState)(""),d=(0,a.Z)(n,2),m=d[0],_=d[1],p=(0,l.useState)(""),f=(0,a.Z)(p,2),b=f[0],j=f[1],F=(0,l.useContext)(o.N).theme,T=(0,c.$)().t,C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":_(a);break;case"number":j(a);break;default:return}},k=function(){_(""),j("")};return(0,g.jsxs)("form",{className:x.contacsForm,onSubmit:function(n){n.preventDefault();e.some((function(e){return e.name===m}))?r.Am.warn("".concat(T("toast.isInContacts")),{theme:"colored"}):(t(h.addContact({name:m,number:b,id:(0,s.x0)(3)})),k())},children:[(0,g.jsxs)("label",{className:x.label,children:[(0,g.jsx)("span",{className:F===o.n.light?x.litghtTitle:x.darkTitle,children:T("contactForm.name")}),(0,g.jsx)("input",{className:F===o.n.light?x.lightTextField:x.darkTextField,type:"text",onChange:C,value:m,name:"name",placeholder:T("contactForm.placeholderName"),required:!0})]}),(0,g.jsxs)("label",{className:x.label,children:[(0,g.jsx)("span",{className:x.title,children:T("contactForm.number")}),(0,g.jsx)("input",{className:F===o.n.light?x.lightTextField:x.darkTextField,type:"tel",onChange:C,value:b,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:T("contactForm.placeholderNumber"),required:!0})]}),(0,g.jsx)("button",{type:"submit",className:x.addBtn,children:T("contactForm.btn")})]})},f="Paper_paper__Djyqg",b=function(e){var t=e.children;return(0,g.jsx)("div",{className:f,children:t})},j="ContactList_contactList__UFVCg",F="ContactList_contactListItem__3th7-",T="ContactList_deleteBtn__1dg25",C="ContactList_lightContactTitle__JZ2Xr",k="ContactList_darkContactTitle__k+9UA",N=function(){var e=(0,i.v9)(_),t=(0,i.I0)(),n=(0,l.useContext)(o.N).theme,a=(0,c.$)().t;return(0,l.useEffect)((function(){t(h.getContacts())}),[t]),(0,l.useEffect)((function(){0===e.length&&t(d.changeFilter(""))}),[e.length,t]),(0,g.jsx)("ul",{className:j,children:e.map((function(e){var l=e.id,i=e.name,s=e.number;return(0,g.jsxs)(b,{children:[(0,g.jsxs)("li",{className:F,children:[(0,g.jsxs)("p",{className:n===o.n.light?C:k,children:[i,":"]}),(0,g.jsx)("p",{className:n===o.n.light?C:k,children:s})]}),(0,g.jsx)("button",{type:"button",className:T,onClick:function(){return t(h.deleteContact(l))},children:a("contactList.btn")})]},l)}))})},v={lightThemeTitle:"Filter_lightThemeTitle__bapGR",darkThemeTitle:"Filter_darkThemeTitle__kL8IP",lightTextField:"Filter_lightTextField__jcVru",darkTextField:"Filter_darkTextField__3+WGo"},w=function(){var e=(0,i.v9)(m),t=(0,i.I0)(),n=(0,l.useContext)(o.N).theme,a=(0,l.useRef)(null),s=(0,c.$)().t;return(0,l.useEffect)((function(){a.current.focus()}),[]),(0,g.jsx)("div",{children:(0,g.jsxs)("label",{className:v.label,children:[(0,g.jsx)("span",{className:n===o.n.light?v.lightThemeTitle:v.darkThemeTitle,children:s("filter.message")}),(0,g.jsx)("input",{ref:a,className:n===o.n.light?v.lightTextField:v.darkTextField,type:"text",name:"filter",value:e,onChange:function(e){return t(d.changeFilter(e.target.value))},placeholder:s("filter.placeholder")})]})})},L=n.p+"static/media/image.e945d85549c1134a28c4.jpg",V={image:"PhonebookView_image__JmMxX",contantWrap:"PhonebookView_contantWrap__BkVxx",title:"PhonebookView_title__jiVvS",subtitle:"PhonebookView_subtitle__6A3zv"},I=function(){var e=(0,i.v9)(_),t=(0,i.v9)(u),n=(0,c.$)().t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{className:V.image,src:L,alt:"Woman"}),(0,g.jsxs)("div",{className:V.contantWrap,children:[(0,g.jsx)("h1",{className:V.title,children:n("app.title")}),(0,g.jsx)("div",{className:V.wrap,children:(0,g.jsx)(p,{})}),(0,g.jsxs)("h2",{className:V.subtitle,children:[n("app.subtitle")," ",0!==e.length&&"".concat(e.length)]}),t.length>1&&(0,g.jsx)(w,{}),!t.length&&(0,g.jsx)("span",{children:n("app.message")}),(0,g.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=136.c0c038d7.chunk.js.map