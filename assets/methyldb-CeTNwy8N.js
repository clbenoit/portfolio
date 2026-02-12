import{u as r,j as e}from"./index-C7fxtPC8.js";const o={layout:"default",title:"MethylDB",description:"undefined"};function s(i){const n={a:"a",br:"br",div:"div",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"methyldb",children:["MethylDB",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methyldb",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx("div",{children:e.jsx("h3",{children:e.jsx("i",{children:"An open-source platform to explore and interpret DNA methylation data locally."})})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/portfolio/methyldb.gif",alt:""})}),`
`,e.jsxs(n.h2,{id:"why-this-app",children:["Why this app",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-this-app",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["DNA methylation profiling has become a cornerstone of modern molecular pathology,",e.jsx(n.br,{}),`
`,"especially for tumor classification, where reference classifiers (notably those developed at the DKFZ) have profoundly changed diagnostic practices."]}),`
`,e.jsxs(n.p,{children:["For many years, access to these analyses was facilitated by the availability of ",e.jsx(n.strong,{children:"free, centralized, online tools"}),e.jsx(n.br,{}),`
`,e.jsx("a",{href:"#ref-1",className:"vocs_Anchor",children:"[1]"}),".",e.jsx(n.br,{}),`
`,"This model enabled rapid dissemination, harmonization of practices, and massive community adoption."]}),`
`,e.jsxs(n.p,{children:["However, recent shifts towards ",e.jsx(n.strong,{children:"restricted access, licensing models, or commercial spin-offs"}),e.jsx(n.br,{}),`
`,e.jsx("a",{href:"#ref-2",className:"vocs_Anchor",children:"[2]"})," ",e.jsx("a",{href:"#ref-3",className:"vocs_Anchor",children:"[3]"}),e.jsx(n.br,{}),`
`,"have revealed a structural weakness of this approach:",e.jsx(n.br,{}),`
`,"many laboratories have become ",e.jsx(n.strong,{children:"dependent on external infrastructures"})," for a core diagnostic activity."]}),`
`,e.jsx(n.p,{children:"As with variant analysis, outsourcing methylome analysis is often driven by:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Limited local bioinformatics resources."}),`
`,e.jsx(n.li,{children:"The complexity of maintaining up-to-date analytical pipelines."}),`
`,e.jsx(n.li,{children:"Regulatory and administrative constraints in clinical environments."}),`
`]}),`
`,e.jsx(n.p,{children:"While understandable, this strategy raises long-term issues:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Loss of autonomy over data and methods."}),`
`,e.jsx(n.li,{children:"Rising costs for tools that were historically community-driven."}),`
`,e.jsx(n.li,{children:"Stagnation of local expertise, despite increasing methodological complexity."}),`
`]}),`
`,e.jsx(n.p,{children:"MethylDB was born from this observation."}),`
`,e.jsxs(n.h2,{id:"project-philosophy",children:["Project philosophy",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-philosophy",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["MethylDB aims to provide a ",e.jsx(n.strong,{children:"local, transparent, and extensible solution"})," for the exploration of DNA methylation results,",e.jsx(n.br,{}),`
`,"without relying on external black-box services."]}),`
`,e.jsxs(n.p,{children:["The goal is ",e.jsx(n.strong,{children:"not"})," to replace existing classifiers or pipelines,",e.jsx(n.br,{}),`
`,"but to ",e.jsx(n.strong,{children:"re-internalize the interpretation layer"}),", which is where most of the added value for biologists actually lies."]}),`
`,e.jsx(n.p,{children:"In short:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pipelines can remain standardized (nf-core, in-house, or commercial)."}),`
`,e.jsx(n.li,{children:"Raw or processed methylation outputs remain within the institution."}),`
`,e.jsx(n.li,{children:"Interpretation, comparison, annotation, and curation are performed locally."}),`
`]}),`
`,e.jsx(n.p,{children:"This mirrors the same logic that motivated the development of GermlineVarDB."}),`
`,e.jsxs(n.h2,{id:"what-methyldb-does",children:["What MethylDB does",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-methyldb-does",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"MethylDB is designed to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Import DNA methylation results (e.g. IDAT-derived matrices, classifier outputs, QC metrics)."}),`
`,e.jsxs(n.li,{children:["Build a ",e.jsx(n.strong,{children:"local methylation database"})," across samples, projects, and time."]}),`
`,e.jsxs(n.li,{children:["Provide a ",e.jsx(n.strong,{children:"graphical interface"})," to:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Explore sample similarity and clustering."}),`
`,e.jsx(n.li,{children:"Inspect classifier scores and confidence metrics."}),`
`,e.jsx(n.li,{children:"Compare new cases to historical local cohorts."}),`
`,e.jsx(n.li,{children:"Flag ambiguous or borderline classifications."}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The focus is deliberately on ",e.jsx(n.strong,{children:"usability for molecular biologists and pathologists"}),",",e.jsx(n.br,{}),`
`,"not on replacing notebooks or command-line workflows."]}),`
`,e.jsxs(n.h2,{id:"open-source-and-community-driven",children:["Open-source and community-driven",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#open-source-and-community-driven",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["MethylDB is released as an ",e.jsx(n.strong,{children:"open-source project"}),", with the same conviction as my previous work:",e.jsx(n.br,{}),`
`,"tools used daily in diagnostics should be understandable, auditable, and improvable by their users."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/clbenoit/MethylDB",children:"Source code"})}),`
`,e.jsx(n.li,{children:"Live demo (coming soon)"}),`
`]}),`
`,e.jsx(n.p,{children:"The project is intentionally modular, allowing users to adapt it to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Different array technologies."}),`
`,e.jsx(n.li,{children:"Different classifiers or reference datasets."}),`
`,e.jsx(n.li,{children:"Research versus routine diagnostic contexts."}),`
`]}),`
`,e.jsxs(n.h2,{id:"call-for-contributions",children:["Call for contributions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-for-contributions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A laboratory affected by recent changes in access to methylome classifiers,"}),`
`,e.jsx(n.li,{children:"A bioinformatician tired of re-implementing the same internal tools,"}),`
`,e.jsx(n.li,{children:"Or simply interested in open and sustainable molecular diagnostics,"}),`
`]}),`
`,e.jsx(n.p,{children:"then contributions, feedback, and discussions are more than welcome."}),`
`,e.jsxs(n.p,{children:["📩 Contact: ",e.jsx(n.a,{href:"mailto:benoitclement.data@gmail.com",children:"benoitclement.data@gmail.com"})]}),`
`,e.jsxs(n.h2,{id:"acknowledgements",children:["Acknowledgements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#acknowledgements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["I would like to warmly thank ",e.jsx(n.a,{href:"https://www.linkedin.com/in/valentin-ripoche-02bb721b5",children:"Valentin Ripoche"})," for his valuable help and contributions throughout the design and development phases of MethylDB.",e.jsx(n.br,{}),`
`,"His feedback, technical discussions, and hands-on involvement were instrumental in bringing this project to completion."]}),`
`,e.jsxs(n.p,{children:["This project also benefited from the use of ",e.jsx(n.strong,{children:"public datasets"})," during development and testing, in particular:"]}),`
`,e.jsxs(n.p,{children:["This project also benefited from the use of ",e.jsx(n.strong,{children:"public datasets"})," during the development and testing phases, in particular:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the ",e.jsx(n.strong,{children:"GSE109381"})," dataset (",e.jsx(n.a,{href:"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE109381",children:"NCBI GEO"}),")"]}),`
`,e.jsxs(n.li,{children:["the ",e.jsx(n.strong,{children:"GSE225810"})," dataset (",e.jsx(n.a,{href:"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE225810",children:"NCBI GEO"}),")"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx("p",{id:"ref-1",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"[1]"})," Capper D. et al. (2018).",e.jsx(n.br,{}),`
`,e.jsx("i",{children:"DNA methylation-based classification of central nervous system tumours"}),".",e.jsx(n.br,{}),`
`,e.jsx("b",{children:"Nature"}),", 555, 469–474.",e.jsx(n.br,{}),`
`,e.jsx("a",{href:"https://doi.org/10.1038/nature26000",className:"vocs_Anchor",target:"_blank",rel:"noopener noreferrer",children:"DOI"})]})}),`
`,e.jsx("p",{id:"ref-2",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"[2]"})," German Cancer Research Center (DKFZ).",e.jsx(n.br,{}),`
`,e.jsx("i",{children:"AI-supported molecular cancer diagnosis for brain tumors"}),".",e.jsx(n.br,{}),`
`,"DKFZ press release describing the transition of the methylation classifier towards industrial exploitation via a spin-off.",e.jsx(n.br,{}),`
`,e.jsx("a",{href:"https://www.dkfz.de/en/news/press-releases/detail/ai-supported-molecular-cancer-diagnosis-for-brain-tumors",className:"vocs_Anchor",target:"_blank",rel:"noopener noreferrer",children:"URL"})]})}),`
`,e.jsx("p",{id:"ref-3",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"[3]"})," Heidelberg Epignostix GmbH.",e.jsx(n.br,{}),`
`,e.jsx("i",{children:"Our Technology – CNS Tumor Classifier"}),".",e.jsx(n.br,{}),`
`,"Official commercial portal describing access to the methylation classifier under defined terms of use.",e.jsx(n.br,{}),`
`,e.jsx("a",{href:"https://epignostix.com/our-technology/our-technology-cns-tumor-classifier/",className:"vocs_Anchor",target:"_blank",rel:"noopener noreferrer",children:"URL"})]})})]})}function a(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default,o as frontmatter};
