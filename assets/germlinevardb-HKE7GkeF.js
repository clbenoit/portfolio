import{d as a,j as e}from"./index-Cz_WIG0o.js";const o={layout:"deafult",title:"GermlineVarDB",description:"undefined"};function i(t){const n={a:"a",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"germlinevardb",children:["GermlineVarDB",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#germlinevardb",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[e.jsxs("div",{children:[" ",e.jsx("h3",{children:e.jsx("i",{children:"A graphical interface to explore your germline genomic variation database."})})]}),e.jsx("br",{}),`
`,e.jsx(n.img,{src:"/portfolio/somavardb.gif",alt:""})]}),`
`,e.jsxs(n.h2,{id:"why-this-app",children:["Why this app",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-this-app",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Few hospitals do not outsource their bioinformatics analysis to private partners (at least in France). There are many reasons for this:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lack of resources and investment capacity to anticipate rapid technological change."}),`
`,e.jsx(n.li,{children:"The data professions, which are still in their infancy, have not yet fully penetrated these structures."}),`
`,e.jsx(n.li,{children:"Cumbersome legal and administrative constraints on the accreditation of IT solutions for clinical use."}),`
`]}),`
`,e.jsx(n.p,{children:"Turning to an external service provider is therefore a short-term solution. In the long term, however, outsourcing poses two major problems:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The cost of the outsourced service is ultimately much higher than in-house."}),`
`,e.jsx(n.li,{children:`Users (clinical biologists) work free of charge to sort the databases built by these external service providers from the raw data sent to them by the hospitals to which these clinicians belong.
The hospital will therefore once again pay for access to the Ias that have been trained thanks to its work.`}),`
`]}),`
`,e.jsxs(n.p,{children:[`With this in mind, I turned my attention to the question of re-internalising this activity at CHUGA.
The analytical part will be the subject of another article, but briefly,
the `,e.jsx(n.a,{href:"https://nf-co.re/",children:"nf-core community"})," is, in my opinion, the best candidate on which to base this objective."]}),`
`,e.jsx(n.p,{children:`However, there is another blocking point. Bioinformatics providers provide, along with a pipeline.
Graphical interfaces enabling biologists to efficiently process genomic variation data for diagnostic rendering. This being the case, even if you internalize an accredited clinical-quality pipeline, it will be difficult to convince them to go back to a much less attractive Excel spreadsheet. This will be perceived as a step backwards.`}),`
`,e.jsx(n.p,{children:`SomaVarDB therefore aims to plug into the output of a nf-core pipeline, clinically accredited if possible.
It's a package that contains both the tools for building the local database from nf-core output,
and the interface for interacting with this database.`}),`
`,e.jsxs(n.h2,{id:"open-source",children:["Open-source",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#open-source",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://omicsverse.fr/app/GermlineVarDB",children:"Live demo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/clbenoit/GermlineVarDB",children:"Source code"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"can-i-use-it-for-clinical-purposes-",children:["Can I use it for clinical purposes ?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#can-i-use-it-for-clinical-purposes-",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Unfortunately the answer is no at the moment. ",e.jsx(n.strong,{children:`To do so it would first need to meet the compliance and
Regulations in healthcare Software Development`}),e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),",",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),",",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),`.
As you can imagine, this is an unattainable goal for just one person in their spare time.  `,e.jsx("br",{}),e.jsx("br",{}),`
So if you feel like contributing to the project. Don't hesitate to contact me :
`,e.jsx(n.a,{href:"mailto:benoitclement.data@gmail.com",children:"benoitclement.data@gmail.com"}),"."]}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:["Tuomas Granlund; Tommi Mikkonen; Vlad Stirbu (2020). ",e.jsx(n.em,{children:"On Medical Device Software CE Compliance and Conformity Assessment"}),". ",e.jsx(n.strong,{children:"IEEE"}),", ",e.jsx(n.a,{href:"https://doi.org/10.1109/ICSA-C50368.2020.00040/",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(n.p,{children:["Cyrille Michaud (2020). ",e.jsx(n.em,{children:"How to qualify, classify and CE mark software"}),". ",e.jsx(n.strong,{children:"MD101"}),", ",e.jsx(n.a,{href:"https://blog.cm-dm.com/pages/How-to-qualify%2C-classify-and-CE-mark-software",children:"URL"})," ",e.jsx(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(n.p,{children:["Małgorzata Kruszynska (2021). ",e.jsx(n.em,{children:"CE marking for Medical Device Software: a step-by-step guide"}),". ",e.jsx(n.strong,{children:"Spyrosoft"}),", ",e.jsx(n.a,{href:"https://spyro-soft.com/blog/healthcare/ce-marking-for-medical-device-software",children:"URL"})," ",e.jsx(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function s(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{s as default,o as frontmatter};
