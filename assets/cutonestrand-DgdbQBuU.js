import{d as o,j as e}from"./index-Cz_WIG0o.js";const i={layout:"minimal",authors:["[cbenoit](www.linkedin.com/in/clement-benoit)"],date:"2024-08-01",title:"How data analysis can help to fix genetic disorders",description:"undefined"};function a(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"how-data-analysis-can-help-to-fix-genetic-disorders",children:["How data analysis can help to fix genetic disorders",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-data-analysis-can-help-to-fix-genetic-disorders",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"introduction",children:["Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Gene therapy as seen a major breakthrough with the development of ",e.jsx(n.strong,{children:"CRISPR-Cas9"}),` technology.
This revolutionary tool allows scientists to precisely edit genes, offering new hope for
treating genetic disorders and diseases. `,e.jsx(n.strong,{children:`With the potential to correct genetic mutations at
the source, CRISPR-Cas9 opens up a world of possibilities for personalized medicine and targeted therapies.`}),`
The future of gene therapy looks brighter than ever,
with the promise of improved treatments and even potential cures for a wide range of conditions.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.genome.gov/genetics-glossary/Autosomal-Dominant-Disorder",children:"Autosomal-dominant disorders"}),` are among the diseases that could see gene treatments in the future.
As the name dominant implies, the presence of a single pathogenic mutated allele is sufficient for
the disease to appear, so some researchers are counting on crispr-cas9 technology to break the mutated allele.
Only the wild-type allele remains, and the disease is thus cured.
Although the effectiveness of this approach looks promising `,e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"  ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"  ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),`, a number of issues still need
to be addressed, two of which we will try to address in this article :`]}),`
`,e.jsx("p",{className:"popacitydanger",children:e.jsx("div",{style:{textAlign:"center"},children:e.jsx("strong",{children:e.jsxs(n.p,{children:["How can the design of these personalized medicine treatments can be effective and quick for each patient ? ",e.jsx("br",{}),e.jsx("br",{}),`
How can we specifically target the mutated allele without breaking the functional allele or another part of
the genome ?`]})})})}),`
`,e.jsxs(n.h2,{id:"data-analysis-can-be-use-to-create-a-list-of-interesting-genomic-regions-for-gene-therapy",children:["Data analysis can be use to create a list of interesting genomic regions for gene therapy",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#data-analysis-can-be-use-to-create-a-list-of-interesting-genomic-regions-for-gene-therapy",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The targeted genome cleavage is achieved by targeting sequence-specific cleavage of S. pyogenes Cas9 (spCas9)
endonuclease with a gRNA. In order for the gRNA to successfully direct Cas9 cleavage,
the corresponding target DNA sequence in the genome must be found next to a PAM site,
also known as a Protospacer Adjacent Motif. The canonical PAM is associated with the spCas9 nuclease is `,e.jsx(n.strong,{children:"5'-NGG-3'"}),`.
We are therefore going to try to draw up an exhaustive list of all the genomic regions that could be used for this
gene therapy.`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`We start by selecting all the SNPs that are frequent in the population (> 5%), for which we can
use the gnomAD database `,e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),`.  We want the list created to be usable to treat as many
patients as possible, so we avoid SNPs that are too rare.`]}),`
`,e.jsxs(n.li,{children:["Only SNPs that induce the disappearance or appearance of the ",e.jsx(n.strong,{children:"5‘-NGG-3’"}),`
motif will allow us to target only the mutated allele while preserving the WT. To do this, we wrote an in-house script in Python.`]}),`
`,e.jsxs(n.li,{children:["We used the ",e.jsx(n.a,{href:"https://github.com/lindenb/jvarkit",children:"jvarkit tools suite"}),` to reconstitute the genomic context of these SNPs, i.e.
to add the flanking sequences to the left and right of our SNPs of interest, according to the human reference genome.`]}),`
`,e.jsxs(n.li,{children:["Finally, we used the ",e.jsx(n.a,{href:"https://github.com/mckennalab/FlashFry",children:"FlashFry"}),` tool to calculate and predict efficiency and specificity
scores for each of the positions we selected. We wanted to cut the diseased gene efficiently,
without altering other regions of the genome.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Using this method, we were able to draw up a list of genomic positions of interest in the treatment of Ryanodine receptor
type 1-related myopathies (RYR1-RM) of the ‘Autosomal-Dominant-Disorder’ type. `,e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),`
Thanks to next-generation sequencing, it is possible to obtain both genomic sequences of a patient
at a reasonable cost. All the positions on our list for which the patient is heterozygous are therefore
candidates for gene therapy!`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/clbenoit/CutOneStrand",children:"Check out the analysis code here !"})}),`
`,e.jsxs(n.h2,{id:"generalization",children:["Generalization",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generalization",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Of course, the implementation of gene therapy has to deal with other obstacles and questions,
but this approach can be generalised to other Autosomal-Dominant-Disorders and enable carers to
screen the genome extensively in order to create a short list of regions
of interest for this type of gene therapy !`}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:["Anzalone A.V, Koblan L.W and Liu D.R . ",e.jsx(n.strong,{children:"Genome editing with CRISPR–Cas nucleases, base editors, transposases and prime editors"})," ",e.jsx(n.a,{href:"https://www.nature.com/articles/s41587-020-0561-9",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(n.p,{children:[`F Chemello, A.C Chai, H Li, C Rodriguez-Caycedo, E Sanchez-Ortiz, A Atmanli, A.A Mireault, N Liu,
R Bassel-Duby, E.N Olson. `,e.jsx(n.strong,{children:`Precise correction of Duchenne muscular dystrophy exon
deletion mutations by base and prime editing`})," ",e.jsx(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/33931459/",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(n.p,{children:["Kelly Godbout, Joël Rousseau, Jacques P Tremblay. ",e.jsx(n.strong,{children:`Successful Correction by Prime Editing of a
Mutation in the RYR1 Gene Responsible for a Myopathy`})," ",e.jsx(n.a,{href:"https://www.mdpi.com/2073-4409/13/1/31",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-4",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://gnomad.broadinstitute.org/about",children:"The Genome Aggregation Database (gnomAD)"})," ",e.jsx(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-5",children:[`
`,e.jsxs(n.p,{children:[`Mathilde Beaufils, Margaux Melka, Julie Brocard, Clement Benoit, Nagi Debbah, Kamel Mamchaoui,
Norma B. Romero, Anne Frédérique Dalmas-Laurent, Susana Quijano-Roy, Julien Fauré, John Rendu
and Isabelle Marty. `,e.jsx(n.strong,{children:"Functional benefit of CRISPR-Cas9-induced allele deletion for RYR1 dominant mutation"})," ",e.jsx(n.a,{href:"https://doi.org/10.1016/j.omtn.2024.102259",children:"DOI"})," ",e.jsx(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function r(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{r as default,i as frontmatter};
