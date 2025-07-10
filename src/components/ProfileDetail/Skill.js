import React from 'react';

const Skill = () => {
  const skillCategories = [
    {
      category: 'Programming Languages & Frameworks',
      skills: [
        'JavaScript/TypeScript (React, React Native, Node.js, Express.js)',
        'Python (Django)',
        'PHP (Laravel)',
        'C# (ASP.NET Core)',
        'Java',
        'HTML5, CSS (Tailwind, Bootstrap)'
      ]
    },
    {
      category: 'Database Technologies',
      skills: [
        'Relational: MSSQL, MySQL, PostgreSQL, SQLite',
        'NoSQL: MongoDB',
        'Database Design & Optimization',
        'Advanced SQL (Stored Procedures, Triggers)'
      ]
    },
    {
      category: 'API Development',
      skills: [
        'RESTful API Design',
        'Laravel API Development',
        'Django REST Framework',
        'Node.js + Express.js',
        'Strapi CMS',
        'Postman for API Testing'
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS Cloud Services (In progress: Cloud Practitioner Certification)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Docker Containerization',
        'CI/CD Pipelines',
        'Git Version Control'
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        'React Native (Native & Hybrid Apps)',
        'App Store Deployment (Apple & Google Play Console)',
        'Mobile UI/UX Implementation',
        'Third-party API Integration (Stripe, PayPal)'
      ]
    },
    {
      category: 'Additional Skills',
      skills: [
        'Figma for UI/UX Design',
        'Computer Troubleshooting',
        'Agile Methodologies',
        'Team Collaboration',
        'Problem Solving & Analytical Thinking',
        'Project Documentation'
      ]
    }
  ];

  return (
    <div className='flex items-center justify-center pt-10 flex-col'>
      <h1 className='font-semibold text-2xl mt-5 mb-6'>Technical Skills</h1>
      <div className='w-full max-w-4xl px-4 space-y-6'>
        {skillCategories.map((category, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <h2 className='text-lg font-bold text-teal-600 mb-4'>{category.category}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='flex items-start'>
                  <span className='text-teal-500 mr-2'>•</span>
                  <span className='text-gray-700'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;