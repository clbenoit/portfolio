import 'react-vertical-timeline-component/style.min.css';

import VerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

import WorkLogo from '../../public/WorkIcon.png'; // with import
import EducationLogo from '../../public/EducationIcon.png'; // with import
import InternshipLogo from '../../public/InternshipIcon.png'; // with import
import TravelingLogo from '../../public/TravelingIcon.png'; // with import
import BlogLogo from '../../public/BlogIcon.png'; // with import

import '../../styles.css';

const listStyle = {
     listStyleType: 'disc',
     listStylePosition: 'inside',
     textJustify: 'auto', 
    //  height: '0.5em'
};

const Timeline = () => {
  return (
    <VerticalTimeline
    layout = "1-column-left">
    {/* layout = "2-columns"> */}
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2024"
        iconStyle={{ background: 'rgb(128,193,157)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,193,157)', color: '#fff' }}        
        icon={ <img className="flag-sizeS" src ={BlogLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Create Omicsverse and personnal website</h3>
        <h4 className="vertical-timeline-element-subtitle">Home</h4>
      </VerticalTimelineElement>       
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2022 - Present"
        iconStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
        contentStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
        contentStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(128,193,157)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,193,157)', color: '#fff' }}        
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
        date="2006 - 2008"
        contentStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}
        iconStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}        
        icon={ <img className="flag-sizeS" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        contentStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}
        iconStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}        
        icon={ <img className="flag-sizeS" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2017 - 2018"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}   
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Dual Master's degree in omics data analysis</h3>
        <h4 className="vertical-timeline-element-subtitle">Aix-Marseille University</h4>
        <p>
        <a href="https://formations.univ-amu.fr/fr/master/5SBG" target="_blank" className="hrefverticalelement">This master's </a> program aims to offer biology students a training project that enables them to acquire the necessary skills to pursue a career as a scientist in the field of omics data analysis, both in academia and industry. <br/><br/>
        The skills obtained by the graduate during this training will allow them to implement biochemical or genomic approaches to solve complex molecular problems or design innovative solutions to a range of biological issues. This training project provides students with theoretical, methodological, practical, and interpersonal skills related to the field of genomics.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2018"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Master’s Degree in Biotechnology Engineering </h3>
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
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
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
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Baccalaureate</h3>
        <h4 className="vertical-timeline-element-subtitle">Mâcon</h4>
      </VerticalTimelineElement>            
    </VerticalTimeline>
  )
}

export default Timeline