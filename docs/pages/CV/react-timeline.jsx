import 'react-vertical-timeline-component/style.min.css';

import VerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

import WorkLogo from '../../public/WorkIcon.png'; // with import
import EducationLogo from '../../public/EducationIcon.png'; // with import
import InternshipLogo from '../../public/InternshipIcon.png'; // with import
import TravelingLogo from '../../public/TravelingIcon.png'; // with import

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
        date="Aug 2022 - Present"
        iconStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
        contentStyle={{ background: 'rgb(83,104,120)', color: '#fff' }}
        icon={ <img className="flag-size" src ={WorkLogo} />}
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
        icon={ <img className="flag-size" src ={WorkLogo} />}
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
        icon={ <img className="flag-sizeT" src ={TravelingLogo} />}
      >
        <h3 className="vertical-timeline-element-title">BackPacker</h3>
        <h4 className="vertical-timeline-element-subtitle">Europe</h4>
        <p>
        Blabla,Blili<br/>
        </p>
      </VerticalTimelineElement>           
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        contentStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}
        iconStyle={{ background: 'rgb(221,136,86)', color: '#fff' }}        
        icon={ <img className="flag-sizeT" src ={InternshipLogo} />}
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
        icon={ <img className="flag-sizeT" src ={InternshipLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}   
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>
          Creative Direction, User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          POLYTECH
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          PREPA
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
        contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}           
        icon={ <img src ={EducationLogo} />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          BACCALAUREATE
        </p>
      </VerticalTimelineElement>            
    </VerticalTimeline>
  )
}

export default Timeline