import React, { useState, useEffect } from 'react';

const GroupedList = () => {
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

  const categoryColorMap = {
  'Programming Languages': { light: '#6B8FC7', dark: '#3C495A' },
  'Data Engineering': { light: '#7BA0D4', dark: '#4A5F73' },
  'Computing Systems': { light: '#8BB0DC', dark: '#5B7086' },
  'LLM & AI Engineering': { light: '#9BC0E4', dark: '#6B8095' },
  'Applied Data Science': { light: '#ABD0ED', dark: '#7B92AA' },
  // 'Blockchain & Web3 Engineering': { light: '#BBE0F5', dark: '#8BA5BB' },
  'Blockchain & Web3 Engineering': { light: '#BBE0F5', dark: '#6B899C' },
  'Web': { light: '#9BB8D8', dark: '#5A7B95' },
  'Project Management': { light: '#A5C4E0', dark: 'rgba(155, 181, 204, 0.7)' },
  'Life Science': { light: '#B5D4E8', dark: 'rgba(170, 198, 227, 0.6)' }
  };

  const getColor = (categoryName) => {
    const colorSet = categoryColorMap[categoryName];
    return isDark ? colorSet.dark : colorSet.light;
  };

  const getTextColor = () => {
    //return isDark ? '#fff' : '#000';
    return isDark ? '#F5F5F5' : '#262525ff' ;!important;
  };

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
            backgroundColor: getColor(category.name),
            color: getTextColor(),
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
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
