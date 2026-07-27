import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';

import VerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

import WorkLogo from '../../public/WorkIcon.png'; // with import
import EducationLogo from '../../public/EducationIcon.png'; // with import
import InternshipLogo from '../../public/InternshipIcon.png'; // with import
import TravelingLogo from '../../public/TravelingIcon.png'; // with import
import BlogLogo from '../../public/BlogIcon.png'; // with import

import '../../styles.css';

import GroupedList from './react-groupedlist';

const listStyle = {
     listStyleType: 'disc',
     listStylePosition: 'inside',
     textJustify: 'auto',
    //  height: '0.5em'
};

const Timeline = () => {
  const cardStyle = {
    background: 'var(--vocs-color_background2)',
    color: 'var(--vocs-color_text)',
    border: '1px solid var(--vocs-color_border)',
    boxShadow: 'none'
  };

  const iconStyle = {
    background: 'var(--vocs-color_background3)',
    color: 'var(--vocs-color_text)',
    border: '1px solid var(--vocs-color_border)'
  };

  return (
    <div className="two-column-layout">
    <div className="main-content">
    <VerticalTimeline
    layout = "1-column-left">
    {/* layout = "2-columns"> */}
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2022 - Present"
            iconStyle={iconStyle}
            contentStyle={cardStyle}
        icon={ <img className="flag-sizeL" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Clinical Bioinformatics Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Grenoble Alpes University Hospital (CHUGA)</h4>
          <ul style={listStyle}>
          <li>
            <b>Designed and operationalized end-to-end clinical-grade bioinformatics workflows</b> from sequencing processing and quality control to variant calling, annotation, interpretation, and reporting - ensuring production-ready, reliable processing of sensitive health data within highly regulated hospital environments.
          </li>
          <li>
            Deployed and operationalized a <b>deep learning-based brain tumor classification pipeline</b> using the model:{' '}
            <a
              href="https://github.com/UMCUGenetics/sturgeon"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              Sturgeon
            </a>
            {' '}for clinical routine, enabling sovereign, on-premises molecular diagnostics using Oxford Nanopore sequencing as an alternative to external Illumina/DKFZ-based workflows; integrated real-time sequencing data while ensuring compliance with hospital infrastructure, cybersecurity, data governance, and NF ISO 15189 accreditation requirements.
          </li>
          <li>
            <b>Supported multidisciplinary diagnostic activities</b>  across virology, hematology, solid tumors, rare diseases, reproductive medicine &amp; infertility, prenatal diagnostics, and neuro-oncology.
          </li>
          <li>
            <b> Collaborated closely with clinicians, molecular biologists, pathologists</b> , engineers, and laboratory teams to transform complex diagnostic and research requirements into reliable operational solutions.
          </li>
          <li>
            Contributed to workflow validation, standardization, traceability, continuous improvement processes, and quality compliance under NF ISO 15189 and secure infrastructure practices inspired by ISO 27001 standards.
          </li>
          <li>
            Delivered reproducible bioinformatics analyses and{' '}
            <a
              href="https://clbenoit.github.io/portfolio/blog/nanodiag"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              AI-driven workflows
            </a>
            {' '}for translational research, generating results that supported{' '}
            <a
              href="https://doi.org/10.1016/j.omtn.2024.102259"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              peer-reviewed publications
            </a>
            ,{' '}
            <a
              href="https://github.com/clbenoit/CutOneStrand"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              open-source software
            </a>
            , and a{' '}
            <a
              href="https://clbenoit.github.io/portfolio/blog/circRNAs"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              doctoral dissertation (coming soon)
            </a>
            .
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2019 - March 2022"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img className="flag-sizeL" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Research Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Institut Curie</h4>
        <ul style={listStyle}>
          <li>
            <b>Developed</b>{' '}
            <a
              href="https://clbenoit.github.io/portfolio/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hrefverticalelement clinical-card-link"
            >
              R Shiny web applications
            </a>
            {' '}for interactive processing and visualization of multi-omics datasets, enabling non-technical researchers and biologists to explore large-scale biological results without computational expertise.
          </li>

          <li>
            <b>Built and maintained</b> automated omics analysis pipelines supporting a wide range of research projects: bulk &amp; single-cell RNA-Seq, ChIP-Seq, ATAC-Seq, and targeted gene panels — ensuring reproducibility and scalability.
          </li>

          <li>
            <b>Conducted benchmarking of omics analysis tools</b>, evaluated methodological alternatives, and provided structured feedback to support model optimization and pipeline improvement decisions.
          </li>

          <li>
            <b>Processed and statistically analyzed</b> large-scale biological datasets in a research environment, ensuring analytical rigor, AI-readiness, and reproducibility across diverse project contexts.
          </li>

          <li>
            <b>Collaborated remotely within a multidisciplinary bioinformatics team</b>, providing training, documentation, and technical support to enable effective adoption of computational tools by researchers and project leads.
          </li>
        </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2026"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img className="flag-sizeS" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Co-founder & Technical Lead - CNC Web3 Developers Colletive</h3>
        <h4 className="vertical-timeline-element-subtitle">Web3 & Blockchain Development</h4>
        <p>Leading a collaborative developer collective focused on Web3 technologies, smart contracts development, DeFi protocols, and decentralized application architecture. Cross-functional team coordination and technical leadership.</p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2024"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img className="flag-sizeS" src ={BlogLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Creation of <a href="https://omicsverse.fr/" target="_blank"  className="hrefverticalelement" >Omicsverse </a> and this personnal website</h3>
        <h4 className="vertical-timeline-element-subtitle">Home</h4>
        <p>Web development, Open source, Blogging, Cloud computing and hosting </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2019 - March 2022"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img className="flag-sizeM" src ={TravelingLogo} />}
      >
        <h3 className="vertical-timeline-element-title">BackPacker</h3>
        <h4 className="vertical-timeline-element-subtitle">Europe</h4>
        <p>
        Culture Discovering, Time management, Projects collaboration, Communication,
        Following ML/DL online courses on my freetime<br/>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2018 - Jul 2018"
        contentStyle={cardStyle}
        iconStyle={iconStyle}
        icon={ <img className="flag-sizeS" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Research and Development Intern</h3>
        <h4 className="vertical-timeline-element-subtitle"><a href="https://www.firalis.com/" target="_blank"  className="hrefverticalelement">FIRALIS S.A </a></h4>
        <ul style={listStyle}>
        <li>
          <b>Contributed to the</b>{' '}
          <a
            href="https://www.firalis.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="hrefverticalelement clinical-card-link"
          >
            design of a diagnostic test using transcriptomic biomarkers (lncRNAs) to predict heart failure risk within 6 months post-myocardial infarction
          </a>
          {' '} bridging genomics and clinical diagnostics.
        </li>

        <li>
          <b>Curated, processed, and analyzed</b> high-throughput transcriptomic datasets to support predictive modeling, ensuring data quality and reproducibility throughout the pipeline.
        </li>

        <li>
          <b>Collaborated with cross-functional teams</b> to translate biological questions into computational analyses, with thorough documentation for scientific reporting and internal knowledge transfer.
        </li>
      </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="May 2017 - Jul 2017"
        contentStyle={cardStyle}
        iconStyle={iconStyle}
        icon={ <img className="flag-sizeS" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Fundamental research Intern</h3>
        <h4 className="vertical-timeline-element-subtitle"> <a href="https://tagc.univ-amu.fr/"  target="_blank" className="hrefverticalelement">TAGC/TGML U1090 </a></h4>
        <p>
        Benchmarking of a pipeline which combine quantitative and qualitative transcriptome analysis
        to reveal isoforms expression switchs between two experimental conditions.<br/> <br/>

       Main genomics tools : <br/>
       <a href="https://pachterlab.github.io/kallisto/" target="_blank" className="hrefverticalelement"> - Kallisto </a> <br/>
       <a href="https://pachterlab.github.io/sleuth_walkthroughs/trapnell/analysis.html" target="_blank" className="hrefverticalelement"> - Sleuth </a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2017 - 2018"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title"><a href="https://formations.univ-amu.fr/fr/master/5SBG" target="_blank" className="hrefverticalelement">Dual Master's degree in omics data analysis </a> </h3>
        <h4 className="vertical-timeline-element-subtitle">Aix-Marseille University</h4>
        <p>
        This master's program aims to offer biology students a training project that enables them to acquire the necessary skills to pursue a career as a scientist in the field of omics data analysis, both in academia and industry. <br/><br/>
        The skills obtained by the graduate during this training will allow them to implement biochemical or genomic approaches to solve complex molecular problems or design innovative solutions to a range of biological issues. This training project provides students with theoretical, methodological, practical, and interpersonal skills related to the field of genomics.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2018"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title"><a href="https://polytech.univ-amu.fr/fr/formations/cycle-ingenieur/genie-biologique" target="_blank"  className="hrefverticalelement">Master’s Degree in Biotechnology Engineering </a></h3>
        <h4 className="vertical-timeline-element-subtitle">Aix-Marseille University Engineering school (POLYTECH)</h4>
        <p>
        Advanced applications of microbiology and cell biology, such as molecular biology, cell culture, genetic engineering, and bioinformatics. <br/> <br/>
        Production, extraction, and purification of compounds derived from processes involving microorganisms, animal or plant cells.<br/> <br/>
        Mastery of analytical techniques and methodologies for ensuring the quality control and safety of compounds derived from bioprocesses.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2015"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Preparatory class for prestigious engineering schools.</h3>
        <h4 className="vertical-timeline-element-subtitle">Carnot High School,Dijon</h4>
        <p>
          Mathematics, Programming Languages, Physics, Chemistry, Biology, Life Science, Earth Science
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013"
        iconStyle={iconStyle}
        contentStyle={cardStyle}
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Baccalaureate</h3>
        <h4 className="vertical-timeline-element-subtitle">Mâcon</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
      <div className="sidebarcv">
         <br />
          <GroupedList/>
      </div>
    </div>
  )
}

export default Timeline
