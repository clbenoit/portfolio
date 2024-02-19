import{r as b,p as z,g as J,e as Y,j as e}from"./index-3ENZrZ6U.js";import Z from"./react-groupedlist-CVfA_o31.js";var O={},F={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function l(){for(var n="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(n=i(n,a(s)))}return n}function a(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return l.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var o="";for(var s in n)r.call(n,s)&&n[s]&&(o=i(o,s));return o}function i(n,o){return o?n?n+" "+o:n+o:n}t.exports?(l.default=l,t.exports=l):window.classNames=l})()})(F);var U=F.exports;O.__esModule=!0;O.default=void 0;var K=L(b),p=L(z),Q=L(U);function L(t){return t&&t.__esModule?t:{default:t}}const W=({animate:t=!0,className:r="",layout:l="2-columns",lineColor:a="#FFF",children:i})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),K.default.createElement("div",{className:(0,Q.default)(r,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":l==="2-columns","vertical-timeline--one-column-left":l==="1-column"||l==="1-column-left","vertical-timeline--one-column-right":l==="1-column-right"})},i));W.propTypes={children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]).isRequired,className:p.default.string,animate:p.default.bool,layout:p.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:p.default.string};var X=W;O.default=X;var V={};function E(){return E=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},E.apply(this,arguments)}function ee(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,C(t,r)}function C(t,r){return C=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},C(t,r)}function te(t,r){if(t==null)return{};var l={},a=Object.keys(t),i,n;for(n=0;n<a.length;n++)i=a[n],!(r.indexOf(i)>=0)&&(l[i]=t[i]);return l}var T=new Map,k=new WeakMap,D=0,G=void 0;function ie(t){G=t}function ne(t){return t?(k.has(t)||(D+=1,k.set(t,D.toString())),k.get(t)):"0"}function re(t){return Object.keys(t).sort().filter(function(r){return t[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?ne(t.root):t[r])}).toString()}function le(t){var r=re(t),l=T.get(r);if(!l){var a=new Map,i,n=new IntersectionObserver(function(o){o.forEach(function(s){var u,d=s.isIntersecting&&i.some(function(f){return s.intersectionRatio>=f});t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(u=a.get(s.target))==null||u.forEach(function(f){f(d,s)})})},t);i=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),l={id:r,observer:n,elements:a},T.set(r,l)}return l}function A(t,r,l,a){if(l===void 0&&(l={}),a===void 0&&(a=G),typeof window.IntersectionObserver>"u"&&a!==void 0){var i=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var n=le(l),o=n.id,s=n.observer,u=n.elements,d=u.get(t)||[];return u.has(t)||u.set(t,d),d.push(r),s.observe(t),function(){d.splice(d.indexOf(r),1),d.length===0&&(u.delete(t),s.unobserve(t)),u.size===0&&(s.disconnect(),T.delete(o))}}var ae=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function B(t){return typeof t.children!="function"}var S=function(t){ee(r,t);function r(a){var i;return i=t.call(this,a)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(n){i.node&&(i.unobserve(),!n&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=n||null,i.observeNode()},i.handleChange=function(n,o){n&&i.props.triggerOnce&&i.unobserve(),B(i.props)||i.setState({inView:n,entry:o}),i.props.onChange&&i.props.onChange(n,o)},i.state={inView:!!a.initialInView,entry:void 0},i}var l=r.prototype;return l.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},l.componentWillUnmount=function(){this.unobserve(),this.node=null},l.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,n=i.threshold,o=i.root,s=i.rootMargin,u=i.trackVisibility,d=i.delay,f=i.fallbackInView;this._unobserveCb=A(this.node,this.handleChange,{threshold:n,root:o,rootMargin:s,trackVisibility:u,delay:d},f)}},l.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},l.render=function(){if(!B(this.props)){var i=this.state,n=i.inView,o=i.entry;return this.props.children({inView:n,entry:o,ref:this.handleNode})}var s=this.props,u=s.children,d=s.as,f=te(s,ae);return b.createElement(d||"div",E({ref:this.handleNode},f),u)},r}(b.Component);S.displayName="InView";S.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function se(t){var r=t===void 0?{}:t,l=r.threshold,a=r.delay,i=r.trackVisibility,n=r.rootMargin,o=r.root,s=r.triggerOnce,u=r.skip,d=r.initialInView,f=r.fallbackInView,h=b.useRef(),x=b.useState({inView:!!d}),j=x[0],N=x[1],I=b.useCallback(function(y){h.current!==void 0&&(h.current(),h.current=void 0),!u&&y&&(h.current=A(y,function(M,P){N({inView:M,entry:P}),P.isIntersecting&&s&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:n,threshold:l,trackVisibility:i,delay:a},f))},[Array.isArray(l)?l.toString():l,o,n,s,u,i,f,a]);b.useEffect(function(){!h.current&&j.entry&&!s&&!u&&N({inView:!!d})});var m=[I,j.inView,j.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const oe=Object.freeze(Object.defineProperty({__proto__:null,InView:S,default:S,defaultFallbackInView:ie,observe:A,useInView:se},Symbol.toStringTag,{value:"Module"})),ce=J(oe);V.__esModule=!0;V.default=void 0;var v=R(b),c=R(z),w=R(U),ue=ce;function R(t){return t&&t.__esModule?t:{default:t}}const H=({children:t="",className:r="",contentArrowStyle:l=null,contentStyle:a=null,date:i="",dateClassName:n="",icon:o=null,iconClassName:s="",iconOnClick:u=null,onTimelineElementClick:d=null,iconStyle:f=null,id:h="",position:x="",style:j=null,textClassName:N="",intersectionObserverProps:I={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:m=!1})=>v.default.createElement(ue.InView,I,({inView:y,ref:M})=>v.default.createElement("div",{ref:M,id:h,className:(0,w.default)(r,"vertical-timeline-element",{"vertical-timeline-element--left":x==="left","vertical-timeline-element--right":x==="right","vertical-timeline-element--no-children":t===""}),style:j},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:u,className:(0,w.default)(s,"vertical-timeline-element-icon",{"bounce-in":y||m,"is-hidden":!(y||m)})},o),v.default.createElement("div",{style:a,onClick:d,className:(0,w.default)(N,"vertical-timeline-element-content",{"bounce-in":y||m,"is-hidden":!(y||m)})},v.default.createElement("div",{style:l,className:"vertical-timeline-element-content-arrow"}),t,v.default.createElement("span",{className:(0,w.default)(n,"vertical-timeline-element-date")},i)))));H.propTypes={children:c.default.oneOfType([c.default.arrayOf(c.default.node),c.default.node]),className:c.default.string,contentArrowStyle:c.default.shape({}),contentStyle:c.default.shape({}),date:c.default.node,dateClassName:c.default.string,icon:c.default.element,iconClassName:c.default.string,iconStyle:c.default.shape({}),iconOnClick:c.default.func,onTimelineElementClick:c.default.func,id:c.default.string,position:c.default.string,style:c.default.shape({}),textClassName:c.default.string,visible:c.default.bool,intersectionObserverProps:c.default.shape({root:c.default.object,rootMargin:c.default.string,threshold:c.default.number,triggerOnce:c.default.bool})};var de=H;V.default=de;var fe={VerticalTimeline:O.default,VerticalTimelineElement:V.default};const me=Y(fe),$="/portfolio/assets/WorkIcon-D-JyRIvY.png",_="/portfolio/assets/EducationIcon-jTLzGwTz.png",q="/portfolio/assets/InternshipIcon-ZamYIbLZ.png",he="/portfolio/assets/TravelingIcon-CWxZkOwq.png",ge="/portfolio/assets/BlogIcon-RwSAEoxC.png",{VerticalTimeline:pe,VerticalTimelineElement:g}=me,ye=()=>e.jsxs("div",{className:"two-column-layout",children:[e.jsx("div",{className:"main-content",children:e.jsxs(pe,{layout:"1-column-left",children:[e.jsxs(g,{className:"vertical-timeline-element--work",date:"March 2024",iconStyle:{background:"rgb(128,193,157)",color:"#fff"},contentStyle:{background:"rgb(128,193,157)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeS",src:ge}),children:[e.jsxs("h3",{className:"vertical-timeline-element-title",children:["Creation of ",e.jsx("a",{href:"https://www.firalis.com/",target:"_blank",className:"hrefverticalelement",children:"Omicsverse "})," and this personnal website"]}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Home"}),e.jsx("p",{children:"Web development, Open source, Blogging, Cloud computing and hosting "})]}),e.jsxs(g,{className:"vertical-timeline-element--work",date:"Aug 2022 - Present",iconStyle:{background:"rgb(83,104,120)",color:"#fff"},contentStyle:{background:"rgb(83,104,120)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeL",src:$}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Clinical Bioinformatics Engineer"}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Grenoble Alpes University Hospital (CHUGA)"}),e.jsxs("p",{children:["Gathering biologist needs, Training, Automation, Databases, nf-core pipelines, Local Laboratory Information Management Systems, Data Management, High Performance computing, Software maintenance, ",e.jsx("br",{})]})]}),e.jsxs(g,{className:"vertical-timeline-element--work",date:"March 2019 - March 2022",iconStyle:{background:"rgb(83,104,120)",color:"#fff"},contentStyle:{background:"rgb(83,104,120)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeL",src:$}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Research Engineer"}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Institut Curie"}),e.jsxs("p",{children:["Bioinformatics, Data Pipeline development, Statistical analysis, Reporting, Data application development, High Performance Computing, Training, Benchmarking, Data Pipeline development",e.jsx("br",{})]})]}),e.jsxs(g,{className:"vertical-timeline-element--work",date:"March 2019 - March 2022",iconStyle:{background:"rgb(128,193,157)",color:"#fff"},contentStyle:{background:"rgb(128,193,157)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeM",src:he}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"BackPacker"}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Europe"}),e.jsxs("p",{children:["Culture Discovering, Time management, Projects collaboration, Communication, Following ML/DL online courses on my freetime",e.jsx("br",{})]})]}),e.jsxs(g,{className:"vertical-timeline-element--work",date:"Feb 2018 - Jul 2018",contentStyle:{background:"rgb(221,136,86)",color:"#fff"},iconStyle:{background:"rgb(221,136,86)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeS",src:q}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Research and Development Intern"}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:e.jsx("a",{href:"https://www.firalis.com/",target:"_blank",className:"hrefverticalelement",children:"FIRALIS S.A "})}),e.jsxs("p",{children:["Worked on the design of a ",e.jsx("a",{href:"https://www.firalis.com/products/fimics-cardiac-ruo-kit-panel",target:"_blank",className:"hrefverticalelement",children:"diagnostic test "}),"  based on transcriptomic biomarkers (lncRNAs), predicting the development of heart failure within 6 months after a first myocardial infarction."]})]}),e.jsxs(g,{className:"vertical-timeline-element--education",date:"May 2017 - Jul 2017",contentStyle:{background:"rgb(221,136,86)",color:"#fff"},iconStyle:{background:"rgb(221,136,86)",color:"#fff"},icon:e.jsx("img",{className:"flag-sizeS",src:q}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Fundamental research Intern"}),e.jsxs("h4",{className:"vertical-timeline-element-subtitle",children:[" ",e.jsx("a",{href:"https://tagc.univ-amu.fr/",target:"_blank",className:"hrefverticalelement",children:"TAGC/TGML U1090 "})]}),e.jsxs("p",{children:["Benchmarking of a pipeline which combine quantitative and qualitative transcriptome analysis to reveal isoforms expression switchs between two experimental conditions.",e.jsx("br",{})," ",e.jsx("br",{}),"Main genomics tools : ",e.jsx("br",{}),e.jsx("a",{href:"https://pachterlab.github.io/kallisto/",target:"_blank",className:"hrefverticalelement",children:" - Kallisto "})," ",e.jsx("br",{}),e.jsx("a",{href:"https://pachterlab.github.io/sleuth_walkthroughs/trapnell/analysis.html",target:"_blank",className:"hrefverticalelement",children:" - Sleuth "})]})]}),e.jsxs(g,{className:"vertical-timeline-element--education",date:"2017 - 2018",iconStyle:{background:"rgb(128,0,32)",color:"#fff"},contentStyle:{background:"rgb(128,0,32)",color:"#fff"},icon:e.jsx("img",{src:_}),children:[e.jsxs("h3",{className:"vertical-timeline-element-title",children:[e.jsx("a",{href:"https://formations.univ-amu.fr/fr/master/5SBG",target:"_blank",className:"hrefverticalelement",children:"Dual Master's degree in omics data analysis "})," "]}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Aix-Marseille University"}),e.jsxs("p",{children:["This master's program aims to offer biology students a training project that enables them to acquire the necessary skills to pursue a career as a scientist in the field of omics data analysis, both in academia and industry. ",e.jsx("br",{}),e.jsx("br",{}),"The skills obtained by the graduate during this training will allow them to implement biochemical or genomic approaches to solve complex molecular problems or design innovative solutions to a range of biological issues. This training project provides students with theoretical, methodological, practical, and interpersonal skills related to the field of genomics."]})]}),e.jsxs(g,{className:"vertical-timeline-element--education",date:"2015 - 2018",iconStyle:{background:"rgb(128,0,32)",color:"#fff"},contentStyle:{background:"rgb(128,0,32)",color:"#fff"},icon:e.jsx("img",{src:_}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:e.jsx("a",{href:"https://polytech.univ-amu.fr/fr/formations/cycle-ingenieur/genie-biologique",target:"_blank",className:"hrefverticalelement",children:"Master’s Degree in Biotechnology Engineering "})}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Aix-Marseille University Engineering school (POLYTECH)"}),e.jsxs("p",{children:["Advanced applications of microbiology and cell biology, such as molecular biology, cell culture, genetic engineering, and bioinformatics. ",e.jsx("br",{})," ",e.jsx("br",{}),"Production, extraction, and purification of compounds derived from processes involving microorganisms, animal or plant cells.",e.jsx("br",{})," ",e.jsx("br",{}),"Mastery of analytical techniques and methodologies for ensuring the quality control and safety of compounds derived from bioprocesses."]})]}),e.jsxs(g,{className:"vertical-timeline-element--education",date:"2013 - 2015",iconStyle:{background:"rgb(128,0,32)",color:"#fff"},contentStyle:{background:"rgb(128,0,32)",color:"#fff"},icon:e.jsx("img",{src:_}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Preparatory class for prestigious engineering schools."}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Carnot High School,Dijon"}),e.jsx("p",{children:"Mathematics, Programming Languages, Physics, Chemistry, Biology, Life Science, Earth Science"})]}),e.jsxs(g,{className:"vertical-timeline-element--education",date:"2013",iconStyle:{background:"rgb(128,0,32)",color:"#fff"},contentStyle:{background:"rgb(128,0,32)",color:"#fff"},icon:e.jsx("img",{src:_}),children:[e.jsx("h3",{className:"vertical-timeline-element-title",children:"Baccalaureate"}),e.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Mâcon"})]})]})}),e.jsxs("div",{className:"sidebarcv",children:[e.jsx("br",{}),e.jsx(Z,{})]})]});export{ye as default};
