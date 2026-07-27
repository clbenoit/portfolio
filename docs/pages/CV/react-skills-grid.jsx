import React from 'react';

const skillsData = [
  { 
    name: 'Languages',
    items: ['Python', 'R', 'TypeScript', 'Bash/Shell', 'SQL']
  },
  { 
    name: 'Data Engineering',
    items: ['ETL', 'Nextflow', 'Snakemake', 'Airflow', 'n8n']
  },
  { 
    name: 'Computing Systems',
    items: ['Docker / Singularity / K8s', 'HPC (Slurm, Torque, PBS, OAR)', 'Cloud Computing', 'Linux / Windows']
  },
  {
    name: 'LLM & AI Engineering',
    items: ['LLMDev: feature eng. - fine tuning', 'LLMOps: deployment, n8n workflows', 'Monitoring (Grafana / Prometheus)']
  },
  { 
    name: 'Applied Data Science',
    items: ['Descriptive & Inferential stats', 'Machine Learning', 'Graph Theory']
  },
  { 
    name: 'Project Management',
    items: ['Git', 'CI / CD', 'DevOps', 'Agile', 'Scrum', 'Kanban']
  },
  { 
    name: 'Life Science',
    items: ['Molecular Biology', 'Genomics', 'Phylogenetics']
  },
  { 
    name: 'Web',
    items: ['Shiny', 'Flask', 'Django', 'FastAPI']
  },
  {
    name: 'Data & Viz Libraries',
    items: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Plotly', 'ggplot2', 'Spark']
  },
  { 
    name: 'Blockchain & Web3',
    items: ['Infrastructure ops', 'Distributed systems', 'Smart contracts', 'On-chain analytics', 'DeFi ecosystem']
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
