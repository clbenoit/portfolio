import{u as o,j as e}from"./index-Bzhcl7oH.js";const a={layout:"minimal",authors:["[cbenoit](www.linkedin.com/in/clement-benoit)"],date:"2024-02-15",title:"Experimental design in the context of next generation sequencing",description:"undefined"};function t(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"experimental-design-in-the-context-of-next-generation-sequencing",children:["Experimental design in the context of next generation sequencing",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#experimental-design-in-the-context-of-next-generation-sequencing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"introduction",children:["Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coming from a biotechnology background, I was sensitized to the problems of experimental design. I then spent a few years as a bioinformatician, leaving this task to my platform colleagues."}),`
`,e.jsxs(n.p,{children:[`As a bioinformatician, you focus on producing quality pipelines and algorithms for processing sequencer output.
But we sometimes forget that, without good experimental design, we run the risk of being unable to draw conclusions,
or even of unwittingly producing false positives. `,e.jsx("br",{})]}),`
`,e.jsx(n.p,{children:"Here's a brief overview of the main considerations for experience designers."}),`
`,e.jsxs(n.h2,{id:"next-generation-sequencing-specificities",children:["Next generation sequencing specificities",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#next-generation-sequencing-specificities",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["We need to bear in mind that everything starts with biological material, from which we want to extract ",e.jsx(n.strong,{children:"informative"}),` biological sequences, to answer a precise question.
The difficulty lies in extracting useful information without confusing it with other factors: background noise, bias...`]}),`
`,e.jsx(n.p,{children:`The sample is first taken from its environment, by which it will have been impacted.
The interaction of the biological material with its environment,
as well as the sampling carried out, already constitute a first source of variance.`}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"methodology",children:["Methodology",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methodology",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clearly define the question posed and the technology chosen to answer it."})," ",e.jsx("br",{}),`
Many confounding factors will depend on the technology chosen. They will have a greater or lesser impact depending on the question asked.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Control the experimental variables"})," ",e.jsx("br",{}),`
Variables to control can include sample preparation techniques, sequencing parameters and environmental conditions. Ensure that the impact of this factors
on your data is minimized and controled to isolate the impact of the specific variables of interest, enhancing ythe reliability of the results.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Randomization techniques"})," ",e.jsx("br",{}),`
Applying randomization techniques will prevent your experiment to capture `,e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Systemic_bias",children:"systemic bias"})," in your data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Replication Strategies"}),e.jsx("br",{}),`
Replicating the experiment with different samples or under different conditions enhances the robustness of the results.
It allows for the identification of consistent patterns and aids in generalizing findings to a broader context.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Factorial design"}),e.jsx("br",{}),`
Factorial design is a statistical experimental method that explores the effects of multiple independent variables simultaneously.
It allows researchers to assess the individual effects of each factor and any potential interactions between them, providing a more comprehensive understanding
of experimental outcomes.`]}),`
`]}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"conclusion",children:["Conclusion",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:`Experimental design is not so complicated in terms of methodology, and is essential to get the most out of sequencing your biological samples.
However, a thorough knowledge of the different technologies available and of experimental design techniques and strategies is required to apply it effectively...`}),`
`,`
`,`
`]})}function r(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{r as default,a as frontmatter};
