import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from 'react';

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

// const colors = {
//   work: { light: 'rgb(144,202,249)', dark: '#5B7F9D' },        // Bleu doux
//   // education: { light: 'rgb(200, 80, 120)', dark: '#7B3F52' },    // Rose/Magenta
//   education: { light: 'rgb(189,141,220)', dark: '#7B3F52' },  
//   internship: { light: 'rgb(245, 190, 145)', dark: '#C89070' },  // Orange clair
//   traveling: { light: 'rgb(120, 180, 140)', dark: '#7FB89F' },   // Vert menthe
//   blog: { light: 'rgb(205, 180, 150)', dark: '#7FB89F' }         // Tan/Beige
// };

const colors = {
  work: { light: 'rgb(144,202,249)', dark: '#6B9FBF' },      // Bleu pastel doux
  education: { light: 'rgb(189,141,220)', dark: '#9B7BA8' },  // Mauve pastel
  internship: { light: 'rgb(245, 190, 145)', dark: '#B8936D' }, // Orange pastel
  traveling: { light: 'rgb(120, 180, 140)', dark: '#7FA887' }, // Vert menthe doux
  blog: { light: 'rgb(205, 180, 150)', dark: '#998370' }       // Tan pastel
};

const Timeline = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Check initial dark mode with a small delay to ensure DOM is ready
    setTimeout(checkDarkMode, 100);

    // Listen for class changes on the root element
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getColor = (type) => isDark ? colors[type].dark : colors[type].light;

  const getTextColor = () => {
    //return isDark ? '#fff' : '#000';
    return isDark ? '#F5F5F5' : '#1A1A1A' ;!important;
    //return isDark ? '#eb1446ff' : '#a51616ff' ;  
  };

  return (
    <div className="two-column-layout">
    <div className="main-content">
    <VerticalTimeline
    layout = "1-column-left">
    {/* layout = "2-columns"> */}
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2026"
        iconStyle={{ background: getColor('work'), color: '#fff' }}
        contentStyle={{ background: getColor('work'), color: getTextColor() }}        
        icon={ <img className="flag-sizeS" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Co-founder & Technical Lead - <a href="https://joecnc.github.io/cnc_website/" target="_blank"  className="hrefverticalelement" >CNC Web3 Developer Crew</a></h3>
        <h4 className="vertical-timeline-element-subtitle">Web3 & Blockchain Development</h4>
        <p>Leading a collaborative developer collective focused on Web3 technologies, smart contracts development, DeFi protocols, and decentralized application architecture. Cross-functional team coordination and technical leadership.</p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2024"
        iconStyle={{ background: getColor('blog'), color: '#fff' }}
        contentStyle={{ background: getColor('blog'), color: getTextColor() }}        
        icon={ <img className="flag-sizeS" src ={BlogLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Creation of <a href="https://omicsverse.fr/" target="_blank"  className="hrefverticalelement" >Omicsverse </a> and this personnal website</h3>
        <h4 className="vertical-timeline-element-subtitle">Home</h4>
        <p>Web development, Open source, Blogging, Cloud computing and hosting </p>
      </VerticalTimelineElement>       
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2022 - Present"
        iconStyle={{ background: getColor('work'), color: '#fff' }}
        contentStyle={{ background: getColor('work'), color: getTextColor() }}
        icon={ <img className="flag-sizeL" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Clinical Bioinformatics Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Grenoble Alpes University Hospital (CHUGA)</h4>
        <p>
        Gathering biologist needs, Training, Automation, Databases, nf-core pipelines, Local Laboratory Information Management Systems,
        Data Management, High Performance computing, Software maintenance, <br/>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2019 - March 2022"
        iconStyle={{ background: getColor('work'), color: '#fff' }}
        contentStyle={{ background: getColor('work'), color: getTextColor() }}
        icon={ <img className="flag-sizeL" src ={WorkLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Research Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Institut Curie</h4>
        <p>
        Bioinformatics, Data Pipeline development,
        Statistical analysis, Reporting,
        Data application development,
        High Performance Computing,
        Training,
        Benchmarking,
        Data Pipeline development<br/>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2019 - March 2022"
        iconStyle={{ background: getColor('traveling'), color: '#fff' }}
        contentStyle={{ background: getColor('traveling'), color: getTextColor() }}        
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
        contentStyle={{ background: getColor('internship'), color: getTextColor() }}
        iconStyle={{ background: getColor('internship'), color: '#fff' }}        
        icon={ <img className="flag-sizeS" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Research and Development Intern</h3>
        <h4 className="vertical-timeline-element-subtitle"><a href="https://www.firalis.com/" target="_blank"  className="hrefverticalelement">FIRALIS S.A </a></h4>
        <p>
        Worked on the design of a <a href="https://www.firalis.com/products/fimics-cardiac-ruo-kit-panel" target="_blank" className="hrefverticalelement">diagnostic test </a>  based on transcriptomic biomarkers (lncRNAs), predicting the development of heart failure within 6 months after a first myocardial infarction.      
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="May 2017 - Jul 2017"
        contentStyle={{ background: getColor('internship'), color: getTextColor() }}
        iconStyle={{ background: getColor('internship'), color: '#fff' }}        
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
        iconStyle={{ background: getColor('education'), color: '#fff' }}
        contentStyle={{ background: getColor('education'), color: getTextColor() }}   
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
        iconStyle={{ background: getColor('education'), color: '#fff' }}
        contentStyle={{ background: getColor('education'), color: getTextColor() }}           
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
        iconStyle={{ background: getColor('education'), color: '#fff' }}
        contentStyle={{ background: getColor('education'), color: getTextColor() }}           
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
        iconStyle={{ background: getColor('education'), color: '#fff' }}
        contentStyle={{ background: getColor('education'), color: getTextColor() }}           
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
