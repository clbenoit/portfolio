import React from 'react';

const skillsData = [
  {
    name: 'Blockchain & Web3',
      items: [
        'Infrastructures for distributed systems & consensus operations',
        'Smart contract interaction',
        'RPC & API-based services',
        'Security & key management',
        'Monitoring & uptime management'      ]
  },
  {
    name: 'Libraries &  Frameworks',
    items: ['Shiny', 'Flask', 'Django', 'FastAPI','Pandas', 'NumPy', 'SciPy',
           'Matplotlib', 'Plotly', 'Spark', 'Pytorch', 'OpenCV', 'scikit-learn' ,
          'LangGraph', 'LangChain', 'LlamaIndex', 'Haystack','OpenAI API']
  },
  {
    name: 'Languages',
    items: ['Python', 'R', 'TypeScript', 'Bash/Shell', 'SQL']
  },
  {
    name: 'Computing Systems',
      items: [
        'Docker / Singularity / Kubernetes',
        'High Performance Computing (Slurm, Torque, PBS, OAR)',
        'Cloud Computing AWS / GCP / Azure',
        'Linux / Windows']
  },
  {
    name: 'Data Engineering',
    items: [
      'ETL',
      'Nextflow',
      'Snakemake',
      'Airflow',
      'n8n',
      'Elasticsearch',
      'Data (Data Wrangling & Delivery)',
      'ISO 27001', 'AI/ML Operations',
      'Retrieval augmented generation'
    ]
  },
  {
    name: 'Applied Data Science',
    items: [
      'Statistics (Quantitative & Qualitative, Descriptive & Inferential, Hypothesis Testing, Experiment Design)',
      'Algorithm Benchmarking',
      'Data (Visualization, Interpretation & Storytelling)',
      'Machine Learning', 'AI/ML Development'
    ]
  },
  {
    name: 'Project Management',
    items: ['Good Software Engineering Practices ',
          'Git', 'CI / CD', 'DevOps', 'Agile', 'Scrum']
  },
  {
    name: 'Life Science',
    items: [
      'Next-Generation Sequencing',
      'Molecular Biology', 'Omics', 'Phylogenetics',
      'Infectious Diseases', 'Oncology',  'Rare Diseases' , 'ISO 15189',
      'Clinical trials and datasets formats',
    ]
  }
];

const SkillsGrid = () => {
  return (
    <div className="skills-grid">
      {skillsData.map((category, i) => (
        <div key={i} className="skill-card">
          <div className="skill-card-title">{category.name}</div>
          <div className="skill-card-items">
            {category.items.map((item, j) => (
              <span key={j} className="skill-tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
