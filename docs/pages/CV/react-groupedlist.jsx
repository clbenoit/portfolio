import React, { useState } from 'react';

const GroupedList = () => {
  const [categories, setCategories] = useState([
    { name: 'Web', items: ['React', 'CSS', 'HTML'], color: 'rgb(44,62,80)' },
    { name: 'Programming languages', items: ['TypeScript', 'R', 'Python'], color: 'rgb(44,62,80)' },
    { name: 'Data science', items: ['Statistics', 'Machine Learning', 'Graph theory'], color: 'rgb(44,62,80)'},
    { name: 'Data management & engineering', items: ['Nextflow','Snakemake','PostgreSQL', 'SQL', 'ETL'], color: 'rgb(44,62,80)'},
    { name: 'Computing systems', items: ['Docker', 'Singularity', 'High performance computing', 'Cloud computing', 'Linux', 'Windows'], color: 'rgb(44,62,80)' },
    { name: 'Life Science', items: ['Molecular Biology', 'Genomics', 'Phylogenetics'], color: 'rgb(44,62,80)'},
    { name: 'Project Management', items: ['Git'], color: 'rgb(44,62,80)'},
    // Add more categories as needed
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
          style={{
            width: '100%',
            color: 'white',
            background: category.color,
            padding: '10px',
            margin: '5px',
            'margin-bottom': '25px',
            cursor: 'pointer',
            display: 'inline-block',
            borderRadius: '5px',
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
