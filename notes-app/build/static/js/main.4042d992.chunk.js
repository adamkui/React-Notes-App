(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var i=o(0),r=o(1),s=o.n(r),n=o(8),a=o.n(n),c=o(2),p=(o(16),o(7)),d=o(9),l=o(3);var u=function t(e){var o=e.title,r=e.createdAt,s=e.noteText,n=e.isActive,a=e.listID,c=e.noteList,p=e.setNoteList,d=e.setEditorTitle,l=e.setEditorDate,u=e.setEditorText;return Object(i.jsxs)("div",{className:n,"data-listid":a,onClick:function(e){var o=parseInt(e.target.dataset.listid),r=c[o].props.title,s=c[o].props.createdAt,n=c[o].props.noteText,a=c.map((function(e,r){return Object(i.jsx)(t,{title:e.props.title,createdAt:e.props.createdAt,noteText:e.props.noteText,dateForSort:e.props.dateForSort,isActive:r===o?"note active":"note",listID:e.props.listID,noteList:e.props.noteList,setNoteList:e.props.setNoteList,setEditorTitle:e.props.setEditorTitle,setEditorDate:e.props.setEditorDate,setEditorText:e.props.setEditorText},e.key)}));p(a),d(r),l(s),u(n)},children:[Object(i.jsx)("h1",{children:o.length>20?o.substring(0,20).concat("..."):o}),Object(i.jsx)("h5",{children:r}),Object(i.jsx)("p",{children:s.length>20?s.substring(0,20).concat("..."):s})]})},j=o(18);var b=function(t,e){var o=function(t){return void 0!==t.noteList.noteList.noteList?t.noteList.noteList.noteList.sort((function(t,e){return e.props.dateForSort-t.props.dateForSort})).map((function(e,o){return Object(i.jsx)(u,{title:e.props.title,createdAt:e.props.createdAt,noteText:e.props.noteText,isActive:e.props.isActive,listID:o,noteList:t.noteList.noteList.noteList,setNoteList:e.props.setNoteList,setEditorTitle:e.props.setEditorTitle,setEditorDate:e.props.setEditorDate,setEditorText:e.props.setEditorText},Object(j.a)())})):null};return Object(i.jsx)("div",{id:"library-notes",children:Object(i.jsx)(o,{noteList:t})})};var x=function(t){var e=t.noteList,o=t.setNoteList,r=t.setEditorTitle,s=t.setEditorDate,n=t.setEditorText,a=function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear(),r=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");return"".concat(i,"/").concat(o,"/").concat(e," - ").concat(r,":").concat(s,":").concat(n)},c=function(t){return t?Object(i.jsx)(b,{noteList:t,setNoteList:o}):[]};return Object(i.jsxs)("div",{id:"library",children:[Object(i.jsxs)("div",{id:"library-header",children:[Object(i.jsx)("h1",{children:"Notes"}),Object(i.jsx)(l.b,{id:"library-edit-btn",onClick:function(){var t=["New note",a(),"Type here your notes","note active"],c=t[0],p=t[1],l=t[2],j=t[3],b=Object(i.jsx)(u,{title:c,createdAt:p,noteText:l,dateForSort:new Date,isActive:j,noteList:e,setNoteList:o,setEditorTitle:r,setEditorDate:s,setEditorText:n}),x=void 0!==e?e.sort((function(t,e){return e.props.dateForSort-t.props.dateForSort})).map((function(t){return Object(i.jsx)(u,{title:t.props.title,createdAt:t.props.createdAt,noteText:t.props.noteText,dateForSort:t.props.dateForSort,isActive:"note",listID:t.props.listID,noteList:t.props.noteList,setNoteList:t.props.setNoteList,setEditorTitle:t.props.setEditorTitle,setEditorDate:t.props.setEditorDate,setEditorText:t.props.setEditorText},t.key)})):null;o(void 0!==e?[b].concat(Object(d.a)(x)):[b]),r(c),s(p),n(l)}})]}),Object(i.jsx)(c,{noteList:e})]})};var v=function(t){var e=t.editorTitle,o=t.editorDate,r=t.editorText,s=t.setEditorTitle,n=t.setEditorText,a=t.setEditorDate,c=t.noteList,p=t.setNoteList;return Object(i.jsxs)("div",{id:"editor",children:[Object(i.jsxs)("div",{id:"editor-header",children:[Object(i.jsx)("textarea",{rows:"1",value:e,onChange:function(t){s(t.target.value);var e=c.map((function(e){return Object(i.jsx)(u,{title:"note active"===e.props.isActive?t.target.value:e.props.title,createdAt:e.props.createdAt,noteText:e.props.noteText,dateForSort:e.props.dateForSort,isActive:"note active"===e.props.isActive?"note active":"note",listID:e.props.listID,noteList:e.props.noteList,setNoteList:e.props.setNoteList,setEditorTitle:e.props.setEditorTitle,setEditorDate:e.props.setEditorDate,setEditorText:e.props.setEditorText},e.key)}));p(e)}}),Object(i.jsx)("h5",{children:o}),Object(i.jsx)(l.c,{id:"editor-delete-btn",onClick:function(t){var e;c.sort((function(t,e){return e.props.createdAt-t.props.createdAt})).forEach((function(t,o){"note active"===t.props.isActive&&(e=o)})),e=0===e?e:e-1;var o=[],r=o[0],d=o[1],l=o[2];c.sort((function(t,e){return e.props.createdAt-t.props.createdAt})).forEach((function(t,o){if(o===e){var i=[t.props.title,t.props.createdAt,t.props.newText];r=i[0],d=i[1],l=i[2]}})),s(1===c.length?"":r),a(1===c.length?"":d),n(1===c.length?"":l),p(c.sort((function(t,e){return e.props.dateForSort-t.dateForSort})).filter((function(t,e){if("note active"!==t.props.isActive)return t})).map((function(t,o){return Object(i.jsx)(u,{title:t.props.title,createdAt:t.props.createdAt,noteText:t.props.noteText,dateForSort:t.props.dateForSort,isActive:o===e?"note active":"note",listID:t.props.listID,noteList:t.props.noteList,setNoteList:t.props.setNoteList,setEditorTitle:t.props.setEditorTitle,setEditorDate:t.props.setEditorDate,setEditorText:t.props.setEditorText},t.key)})))}})]}),Object(i.jsx)("textarea",{id:"editor-main-editor",value:r,onChange:function(t){n(t.target.value);var e=c.map((function(e){return Object(i.jsx)(u,{title:e.props.title,createdAt:e.props.createdAt,noteText:"note active"===e.props.isActive?t.target.value:e.props.noteText,dateForSort:e.props.dateForSort,isActive:"note active"===e.props.isActive?"note active":"note",listID:e.props.listID,noteList:e.props.noteList,setNoteList:e.props.setNoteList,setEditorTitle:e.props.setEditorTitle,setEditorDate:e.props.setEditorDate,setEditorText:e.props.setEditorText},e.key)}));p(e)}})]})};var O=function(){var t=Object(r.useState)(),e=Object(c.a)(t,2),o=e[0],s=e[1],n=Object(r.useState)(""),a=Object(c.a)(n,2),d=a[0],l=a[1],b=Object(r.useState)(""),O=Object(c.a)(b,2),f=O[0],T=O[1],h=Object(r.useState)(""),E=Object(c.a)(h,2),g=E[0],L=E[1],S=Object(r.useState)("init"),y=Object(c.a)(S,2),A=y[0],D=y[1];if("init"===A){var m,F=localStorage.getItem("myNotes"),N=void 0!==F&&null!==F?JSON.parse(F).map((function(t){var e=new Date(Date.parse(t.dateForSort));return Object(p.a)(Object(p.a)({},t),{},{dateForSort:e})})):null;null!=N&&(m=N.sort((function(t,e){return e-t})).map((function(t,e){return Object(i.jsx)(u,{title:t.title,createdAt:t.createdAt,noteText:t.noteText,dateForSort:t.dateForSort,isActive:t.isActive,listID:e,noteList:null,setNoteList:s,setEditorTitle:l,setEditorDate:T,setEditorText:L},Object(j.a)())}))),D("loaded"),s(m),l(m.length>0?m[0].props.title:""),T(m.length>0?m[0].props.createdAt:""),L(m.length>0?m[0].props.noteText:"")}return Object(r.useEffect)((function(){if(null!==o&&void 0!==o){var t=JSON.stringify(o.map((function(t){return{createdAt:t.props.createdAt,dateForSort:String(t.props.dateForSort),isActive:t.props.isActive,noteText:t.props.noteText,title:t.props.title}})));localStorage.setItem("myNotes",t)}}),[o]),Object(i.jsxs)("div",{id:"wrapper",children:[Object(i.jsx)(x,{noteList:o,setNoteList:s,setEditorTitle:l,setEditorDate:T,setEditorText:L}),Object(i.jsx)(v,{editorTitle:d,editorDate:f,editorText:g,setEditorTitle:l,setEditorText:L,setEditorDate:T,noteList:o,setNoteList:s})]})},f=o.p+"static/media/logo.6ce24c58.svg";var T=function(){var t=Object(r.useState)(1),e=Object(c.a)(t,2),o=e[0],s=e[1],n=Object(r.useState)("flex"),a=Object(c.a)(n,2),p=a[0],d=a[1],l=Object(r.useState)(1),u=Object(c.a)(l,2),j=u[0],b=u[1];return setTimeout((function(){b(0),setTimeout((function(){return s(0)}),500),setTimeout((function(){return d("none")}),1e3)}),750),Object(i.jsxs)("div",{id:"loader",style:{opacity:"".concat(o),display:"".concat(p)},children:[Object(i.jsx)("img",{src:f,alt:"loader-img",style:{opacity:"".concat(j)}}),Object(i.jsx)("p",{id:"loader-p",style:{opacity:"".concat(j)},children:"Logo created by: Marton Izsaki \u24d22021"})]})};var h=function(t){return Object(i.jsx)("div",{id:"info",style:{display:"".concat(t.infoDisplay),opacity:"".concat(t.infoOpacity)},onClick:function(e){return function(e){document.getElementById("info-message-wrapper").contains(e.target)||(t.setInfoOpacity(0),setTimeout((function(){return t.setInfoDisplay("none")}),500))}(e)},children:Object(i.jsxs)("div",{id:"info-message-wrapper",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)(l.a,{id:"info-message-icon"}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Data storage: "}),"This application is using the browser's local storage to save your notes. Please make sure to keep this in mind when clearing browser history, as you can loose your notes when clearing the local storage."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)(l.a,{id:"info-message-icon"}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Privacy note:"})," As this application is not using a login system, anyone accessing this user on your computer will be able to see notes you store in this application. Passwords, or sensitive data is not recommended to store in this application, and the author of the application can't take responsibility for any harm caused by ignoring this note."]})]})})};var E=function(){var t=Object(r.useState)("none"),e=Object(c.a)(t,2),o=e[0],s=e[1],n=Object(r.useState)(0),a=Object(c.a)(n,2),p=a[0],d=a[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(T,{}),Object(i.jsx)(h,{infoDisplay:o,infoOpacity:p,setInfoDisplay:s,setInfoOpacity:d}),Object(i.jsx)(O,{}),Object(i.jsx)(l.a,{id:"info-btn",onClick:function(){return s("flex"),void setTimeout((function(){return d(1)}),10)}})]})},g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,n=e.getTTFB;o(t),i(t),r(t),s(t),n(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.4042d992.chunk.js.map