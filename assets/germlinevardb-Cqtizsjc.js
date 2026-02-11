import{u as r,j as e}from"./index-CGJSN20D.js";const s={layout:"default",title:"GermlineVarDB",description:"undefined"};function n(t){const i={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"germlinevardb",children:["GermlineVarDB",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#germlinevardb",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:[e.jsxs("div",{children:[" ",e.jsx("h3",{children:e.jsx("i",{children:"A graphical interface to explore your germline genomic variation database."})})]}),e.jsx("br",{}),`
`,e.jsx(i.img,{src:"/portfolio/somavardb.gif",alt:""})]}),`
`,e.jsxs(i.h2,{id:"why-this-app",children:["Why this app",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-this-app",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Few hospitals do not outsource their bioinformatics analysis to private partners (at least in France). There are many reasons for this:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Lack of resources and investment capacity to anticipate rapid technological change."}),`
`,e.jsx(i.li,{children:"The data professions, which are still in their infancy, have not yet fully penetrated these structures."}),`
`,e.jsx(i.li,{children:"Cumbersome legal and administrative constraints on the accreditation of IT solutions for clinical use."}),`
`]}),`
`,e.jsx(i.p,{children:"Turning to an external service provider is therefore a short-term solution. In the long term, however, outsourcing poses two major problems:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"The cost of the outsourced service is ultimately much higher than in-house."}),`
`,e.jsx(i.li,{children:`Users (clinical biologists) work free of charge to sort the databases built by these external service providers from the raw data sent to them by the hospitals to which these clinicians belong.
The hospital will therefore once again pay for access to the Ias that have been trained thanks to its work.`}),`
`]}),`
`,e.jsxs(i.p,{children:[`With this in mind, I turned my attention to the question of re-internalising this activity at CHUGA.
The analytical part will be the subject of another article, but briefly,
the `,e.jsx(i.a,{href:"https://nf-co.re/",children:"nf-core community"})," is, in my opinion, the best candidate on which to base this objective."]}),`
`,e.jsx(i.p,{children:`However, there is another blocking point. Bioinformatics providers provide, along with a pipeline.
Graphical interfaces enabling biologists to efficiently process genomic variation data for diagnostic rendering. This being the case, even if you internalize an accredited clinical-quality pipeline, it will be difficult to convince them to go back to a much less attractive Excel spreadsheet. This will be perceived as a step backwards.`}),`
`,e.jsx(i.p,{children:`SomaVarDB therefore aims to plug into the output of a nf-core pipeline, clinically accredited if possible.
It's a package that contains both the tools for building the local database from nf-core output,
and the interface for interacting with this database.`}),`
`,e.jsxs(i.h2,{id:"open-source",children:["Open-source",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#open-source",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://omicsverse.fr/app/GermlineVarDB",children:"Live demo"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/clbenoit/GermlineVarDB",children:"Source code"})}),`
`]})]})}function o(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{o as default,s as frontmatter};
