import React, { useState } from 'react';

const GroupedList = () => {
  const [categories, setCategories] = useState([
    { name: 'Web', items: ['React', 'CSS', 'HTML'], color: 'rgb(44,62,80)' },
    { name: 'Programming languages', items: ['TypeScript', 'R', 'Python'], color: 'rgb(44,62,80)' },
    { name: 'Data science', items: ['Statistics', 'Machine Learning', 'Graph theory'], color: 'rgb(44,62,80)'},
    { name: 'Data management & engineering', items: ['Nextflow','Snakemake','PostgreSQL', 'SQL', 'ETL'], color: 'rgb(44,62,80)'},
    { name: 'Computing systems', items: ['Docker', 'Singularity', 'High performance computing', 'Cloud computing', 'Linux', 'Windows'], color: 'rgb(44,62,80)' },
    { name: 'Life Science', items: ['Molecular Biology', 'Genomics', 'Phylogenetics'], color: 'rgb(44,62,80)'},
    { name: 'Project Management', items: ['Git','Teams'], color: 'rgb(44,62,80)'},
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
          className="category-box"
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
