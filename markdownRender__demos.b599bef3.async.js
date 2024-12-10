"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),_=e(79685),d=e(72490),t=e(63342);n.default=function(){var m=(0,_.useState)(""),s=u()(m,2),r=s[0],a=s[1];return(0,_.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(o){return o.text()}).then(a).catch(function(o){a(o.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{value:r})})}},85198:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),_=e(79685),d=e(72490),t=e(63342),m=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var s=(0,_.useState)(""),r=u()(s,2),a=r[0],o=r[1];return(0,_.useEffect)(function(){o(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{dark:!0,value:a})})}},10804:function(h,n,e){e.r(n);var l=e(86516),u=e.n(l),_=e(79685),d=e(72490),t=e(63342),m=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var s=(0,_.useState)(""),r=u()(s,2),a=r[0],o=r[1];return(0,_.useEffect)(function(){o(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{value:a})})}},72490:function(h,n,e){e.d(n,{Z:function(){return y}});var l=e(79685),u=e(68591),_=e.n(u),d=e(37664),t=e.n(d),m=e(94306),s=e.n(m),r=e(37203),a=e.n(r),o=e(45206),v=s();v.registerLanguage("sql",a());function O(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(M,D,c,g){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],p=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?p+v.highlight(D,{language:i}).value+g:p+v.highlightAuto(D).value+g},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(63342);function y(E){var f=E.value,M=f===void 0?"":f,D=E.className,c=E.dark,g=(0,l.useMemo)(function(){var i=new(t()).Converter({extensions:[O],emoji:!0});return i.makeHtml(M)},[M]);return(0,P.jsx)("div",{className:_()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",D),dangerouslySetInnerHTML:{__html:g}})}}}]);
