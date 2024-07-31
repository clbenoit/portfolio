import{d as i,j as e}from"./index-DqZhg8K9.js";const a={layout:"minimal",authors:["[cbenoit](www.linkedin.com/in/clement-benoit)"],date:"2024-02-15",title:"A quick overview of Gene sets enrichment analysis",description:"undefined"};function s(t){const n={a:"a",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"a-quick-overview-of-gene-sets-enrichment-analysis",children:["A quick overview of Gene sets enrichment analysis",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-quick-overview-of-gene-sets-enrichment-analysis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"why-gsea-analysis-",children:["Why GSEA Analysis ?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-gsea-analysis-",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`Genome wide expression analysis has become become a mainstay of genomics research. However, there is still a wide range of tools for interpreting these gene expression profiles.
They all have pros, cons, and are still evolving. This, coupled with the fact that these studies rely on the testing of a large number of hypotheses and relatively small sample sizes, lead that whole-genome expression studies in particular, to be often not reproducible.
This is why reproducibility is one of the major challenges facing studies involving whole-genome expression data. `,e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),", ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),", ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),`
`,e.jsx(n.p,{children:"Finally, interpreting lists of thousands of differentially expressed genes is a tedious exercise for the biologist."}),`
`,e.jsx(n.p,{children:`The GSEA, by dezooming from the scale of the gene to that of the pathway. Improves the reproducibility of studies,
while facilitating their interpetation.`}),`
`,e.jsxs(n.h2,{id:"principles",children:["Principles",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#principles",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"what-is-the-question-",children:["What is the question ?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-the-question-",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Let's says you have ranked a gene list ",e.jsx("b",{children:e.jsx("i",{children:"L"})})," according to your favourite metric. The GSEA tries to answer the following question : ",e.jsx("br",{})]}),`
`,e.jsx("p",{className:"popacity",children:e.jsxs(n.p,{children:["Given a gene set ",e.jsx("b",{children:e.jsx("i",{children:"S"})})," : Does the genes belonging to ",e.jsx("b",{children:e.jsx("i",{children:"S"})})," tends to occur toward the top (or the bottom) of the list ",e.jsx("b",{children:e.jsx("i",{children:"L"})}),`,
in which case the gene set is correlated with the phenotypic class distinction.`]})}),`
`,e.jsxs(n.p,{children:[`Of course we will do as many independant tests as we have genes sets to try.
A `,e.jsx(n.a,{href:"https://www.firalis.com/products/fimics-cardiac-ruo-kit-panel",children:"multiple testing correction"})," should then be considered."]}),`
`,e.jsxs(n.h3,{id:"the-method",children:["The Method",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-method",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 1 : Compute an enrichment score (ES)"}),e.jsx("br",{}),`
This score reflects the degree to which the set S is overrepresented at the extremes top (ES > 0) or bottom (ES < 0) of the ranked list R. It is calculated by walking down the list L,
increasing the running sum when we encounter a gene in S and decreasing it when we encounter genes not in S. Finally the maximum deviation from zero encountered during the random walk is kept as ES. `,e.jsx("br",{}),e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Step 2 : Estimation of significance level of ES"}),e.jsx("br",{}),`
The nominal P-Value is estimates the statistical significance of the ES by using an empirical phenotype-based permutation test that
preserves the correlation structure of the gene expression data. Phenotype labels are permuted and the ES recomputed to generate a null distribution for the ES. The empirical nominal P Value of the observed ES is then calculated relative to
this null distribution. Permutation of class labels preserves gene-gene correlations and thus, provide a more biologically reasonable assessment of significance than would be obtained by permuting genes.`,e.jsx("br",{}),e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Step 3 : Adjustment of Multiple Hypothesis Testing."}),e.jsx("br",{}),`
The enrichment scores for each set are normalized and a false discovery rate is calculated`]}),`
`,e.jsxs("p",{className:"popacitydanger",children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx("strong",{children:"It is usefull to keep in mind that"})}),e.jsx("br",{}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"That the GSEA official software will not complain if you provide them with raw gene expression data. However your results will get totally incorrect results."}),`
`,e.jsx(n.li,{children:"You can perform a pre ranked GSEA, which can be very helpful for performing gene set enrichment analysis on data that do not conform to the typical GSEA scenario. For example, it can be used when the ranking metric choices provided by GSEA are not appropriate for the data, or when a ranked list of genomic features deviates from traditional gene expression data (e.g., GWAS results, ChIP seq, etc.). Also if you lack computing power and have access to pre-ranked list, this solution can be your best option."}),`
`,e.jsx(n.li,{children:"Clearly define the question your are trying to address and choose the appropriate ranking metrics."}),`
`,e.jsx(n.li,{children:"Genes sets curation could be useful as a pre-processing step. Indeed you do not need to perform test on genes set you are not interested in. It will increase your need for computing resources and create supplementary noise for the Adjustment of Multiple Hypothesis Testing procedure."}),`
`]})]}),`
`,e.jsxs(n.h3,{id:"to-go-further-with-theory",children:["To go further with theory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#to-go-further-with-theory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["There exists a variant of GSEA called FGSEA for ",e.jsx("u",{children:"F"}),"ast ",e.jsx("u",{children:"G"}),"ene ",e.jsx("u",{children:"S"}),"et ",e.jsx("u",{children:"E"}),"nrichment ",e.jsx("u",{children:"A"}),"nalysis.",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["Another common approach to perform pathways analysis is the ",e.jsx(n.a,{href:"https://geneontology.org/docs/go-enrichment-analysis/",children:"Gene Ontology Enrichment analysis"}),"."]}),`
`,e.jsxs(n.h2,{id:"available-programs-for-practice",children:["Available programs for practice",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#available-programs-for-practice",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.gsea-msigdb.org/gsea/downloads.jsp",children:"Official Broad institute tools"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"WEB-based GEne SeT AnaLysis Toolkit"}),`
`,e.jsx(n.a,{href:"https://www.webgestalt.org/",children:"GUI"}),`
`,e.jsx(n.a,{href:"https://cran.r-project.org/web/packages/WebGestaltR/index.html",children:"R package"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://bioconductor.org/packages/release/bioc/html/fgsea.html",children:"Fast Gene Set Enrichment Analysis"})," (Pre-ranked only)"]}),`
`]}),`
`,`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:[`Timothy E. Sweeney , Winston A. Haynes , Francesco Vallania , John P. Ioannidis
and Purvesh Khatri. (2017). `,e.jsx(n.em,{children:"Methods to increase reproducibility in differential gene expression via meta-analysis"}),". ",e.jsx(n.strong,{children:"Nucleic Acids Research"}),", Volume 45(Issue 1), Page Range. ",e.jsx(n.a,{href:"https://doi.org/10.1093/nar/gkw797",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(n.p,{children:["Steven N Goodman , Daniele Fanelli , John P A Ioannidis. (2016). *What does research reproducibility mean? *. ",e.jsx(n.strong,{children:"Sci Transl Med"}),", 8(341),12. ",e.jsx(n.a,{href:"https://doi.org/10.1126/scitranslmed.aaf5027",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(n.p,{children:["Lianbo Yu. (2020). ",e.jsx(n.em,{children:"RNA-Seq Reproducibility Assessment of the Sequencing Quality Control Project"}),". ",e.jsx(n.strong,{children:"Cancer Inform"}),", Volume 19 ",e.jsx(n.a,{href:"https://doi.org/10.1177/1176935120922498",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{o as default,a as frontmatter};
