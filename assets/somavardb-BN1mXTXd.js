import{d as a,j as e}from"./index-D-AN-HFx.js";const o={layout:"deafult",title:"SomaVarDB",description:"undefined"};function i(n){const t={a:"a",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"somavardb",children:["SomaVarDB",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#somavardb",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:[e.jsxs("div",{children:[" ",e.jsx("h3",{children:e.jsx("i",{children:"A graphical interface to explore your somatic genomic variation database."})})]}),`
`,e.jsx(t.img,{src:"/portfolio/somavardb.gif",alt:""})]}),`
`,e.jsxs(t.h2,{id:"why-this-app",children:["Why this app",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-this-app",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Few hospitals do not outsource their bioinformatics analysis to private partners (at least in France). There are many reasons for this:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Lack of resources and investment capacity to anticipate rapid technological change."}),`
`,e.jsx(t.li,{children:"The data professions, which are still in their infancy, have not yet fully penetrated these structures."}),`
`,e.jsx(t.li,{children:"Cumbersome legal and administrative constraints on the accreditation of IT solutions for clinical use."}),`
`]}),`
`,e.jsx(t.p,{children:"Turning to an external service provider is therefore a short-term solution. In the long term, however, outsourcing poses two major problems:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The cost of the outsourced service is ultimately much higher than in-house."}),`
`,e.jsx(t.li,{children:`Users (clinical biologists) work free of charge to sort the databases built by these external service providers from the raw data sent to them by the hospitals to which these clinicians belong.
The hospital will therefore once again pay for access to the Ias that have been trained thanks to its work.`}),`
`]}),`
`,e.jsxs(t.p,{children:[`With this in mind, I turned my attention to the question of re-internalising this activity at CHUGA.
The analytical part will be the subject of another article, but briefly,
the `,e.jsx(t.a,{href:"https://nf-co.re/",children:"nf-core community"})," is, in my opinion, the best candidate on which to base this objective."]}),`
`,e.jsx(t.p,{children:`However, there is another blocking point. Bioinformatics providers provide, along with a pipeline.
Graphical interfaces enabling biologists to efficiently process genomic variation data for diagnostic rendering. This being the case, even if you internalize an accredited clinical-quality pipeline, it will be difficult to convince them to go back to a much less attractive Excel spreadsheet. This will be perceived as a step backwards.`}),`
`,e.jsx(t.p,{children:`SomaVarDB therefore aims to plug into the output of a nf-core pipeline, clinically accredited if possible.
It's a package that contains both the tools for building the local database from nf-core output,
and the interface for interacting with this database.`}),`
`,e.jsxs(t.h2,{id:"open-source",children:["Open-source",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#open-source",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://localhost:8080/app/SomaVarDB",children:"Live demo"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/clbenoit/SomaVarDB",children:"Source code"})}),`
`]}),`
`,e.jsxs(t.h2,{id:"can-i-use-it-for-clinical-purposes-",children:["Can I use it for clinical purposes ?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#can-i-use-it-for-clinical-purposes-",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Unfortunately the answer is no at the moment. ",e.jsx(t.strong,{children:`To do so it would first need to meet the compliance and
Regulations in healthcare Software Development`}),e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),",",e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),",",e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),`.
As you can imagine, this is an unattainable goal for just one person in their spare time.  `,e.jsx("br",{}),e.jsx("br",{}),`
So if you feel like contributing to the project. Don't hesitate to contact me :
`,e.jsx(t.a,{href:"mailto:benoitclement.data@gmail.com",children:"benoitclement.data@gmail.com"}),"."]}),`
`,e.jsxs(t.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(t.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(t.p,{children:["Tuomas Granlund; Tommi Mikkonen; Vlad Stirbu (2020). ",e.jsx(t.em,{children:"On Medical Device Software CE Compliance and Conformity Assessment"}),". ",e.jsx(t.strong,{children:"IEEE"}),", ",e.jsx(t.a,{href:"https://doi.org/10.1109/ICSA-C50368.2020.00040/",children:"DOI"})," ",e.jsx(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(t.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(t.p,{children:["Cyrille Michaud (2020). ",e.jsx(t.em,{children:"How to qualify, classify and CE mark software"}),". ",e.jsx(t.strong,{children:"MD101"}),", ",e.jsx(t.a,{href:"https://blog.cm-dm.com/pages/How-to-qualify%2C-classify-and-CE-mark-software",children:"URL"})," ",e.jsx(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(t.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(t.p,{children:["Małgorzata Kruszynska (2021). ",e.jsx(t.em,{children:"CE marking for Medical Device Software: a step-by-step guide"}),". ",e.jsx(t.strong,{children:"Spyrosoft"}),", ",e.jsx(t.a,{href:"https://spyro-soft.com/blog/healthcare/ce-marking-for-medical-device-software",children:"URL"})," ",e.jsx(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function s(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{s as default,o as frontmatter};
