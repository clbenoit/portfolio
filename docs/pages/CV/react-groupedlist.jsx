import React, { useState } from 'react';

const GroupedList = () => {
  const [categories] = useState([
    { 
      name: 'Programming Languages',
      items: ['TypeScript', 'Python', 'R']
    },
    { 
      name: 'Data Engineering',
      items: [
        'ETL',
        'Nextflow',
        'Snakemake',
        'PostgreSQL',
        'SQL'
      ]
    },
    { 
      name: 'Computing Systems',
      items: [
        'Docker',
        'Kubernetes',
        'Singularity',
        'High Performance Computing',
        'Cloud Computing',
        'Linux',
        'Windows'
      ]
    },
    {
      name: 'LLM & AI Engineering',
      items: [
        'LLM integration',
        'Light fine-tuning',
        'LLMOps',
        'AI services deployment',
        'API-based models',
        'Monitoring & scalability'
      ]
    },
    { 
      name: 'Applied Data Science',
      items: [
        'Descriptive statistics',
        'Inferential statistics',
        'Machine Learning',
        'Graph Theory'
      ]
    },
    { 
      name: 'Blockchain & Web3 Engineering',
      items: [
        'Blockchain infrastructure (home staking)',
        'Validator node operations',
        'Distributed systems & consensus',
        'Smart contract interaction',
        'On-chain data analysis',
        'Wallets & transaction lifecycle',
        'RPC & API-based blockchain services',
        'Security & key management',
        'Monitoring & uptime management',
        'DeFi & Web3 ecosystem knowledge'
      ]
    },
    { 
      name: 'Web',
      items: ['React', 'CSS', 'HTML']
    },
    { 
      name: 'Project Management',
      items: ['Git', 'CI / CD', 'Teams']
    },
    { 
      name: 'Life Science',
      items: ['Molecular Biology', 'Genomics', 'Phylogenetics']
    }
  ]);

  const [expandedCategory, setExpandedCategory] = useState(
    categories.map((_, index) => index)
  );

  const handleCategoryClick = (index) => {
    setExpandedCategory((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index)
        : [...prevExpanded, index]
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-box"
          style={{
            backgroundColor: 'var(--vocs-color_background2)',
            color: 'var(--vocs-color_text)',
            border: '1px solid var(--vocs-color_border)',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
            }}
            onClick={() => handleCategoryClick(index)}
          >
            {category.name}
          </div>
          {expandedCategory.includes(index) && (
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {category.items.map((item, i) => (
                <li key={i} style={{ margin: '5px' }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupedList;
