import React from 'react'

const Career = () => {
  const careerHistory = [
    {
      role: 'Software Developer (Cloud & DevOps Focus)',
      company: 'Civil Safety',
      location: 'Gold Coast, Australia',
      duration: 'March 2023 - Present',
      responsibilities: [
        'Developed native and hybrid mobile applications and web platform applications for educational training and skill assessment',
        'Integrated third-party libraries and APIs including payment systems (Stripe, PayPal)',
        'Managed database design, analysis, and optimization for scalable solutions',
        'Successfully deployed the Online Anytime hybrid app alongside its web platform',
        'Scripting & Automation: PowerShell, VBScript, Bash, Python',
      ],
      skills: ['React Native', 'React.js', 'PHP Laravel', 'MySQL', 'SQLite', 'Postman', 'jQuery', 'JavaScript', 'Bootstrap','AWS', 'GitHub', 'AWS S3', 'AWS CloudFormation', 'AWS EC2', 'Docker','CI/CD']
    },
    {
      role: 'Software Developer',
      company: 'Web4 Pty Ltd',
      location: 'Gold Coast, Australia',
      duration: 'December 2022 – March 2023',
      responsibilities: [
        'Web3 and blockchain development',
        'Contributed to the ezythree app project',
        'AWS configuration and deployment',
      ],
      skills: ['React', 'Node.js', 'React Native', 'Postman', 'Strapi', 'Bootstrap', 'PostgreSQL', 'Cloud Console', 'Tailwind', 'AWS', 'GitHub', 'AWS S3','AWS CloudFormation', 'AWS EC2']
    },
    {
      role: 'Analyst Programmer',
      company: 'AWN Insurance',
      location: 'Tanah Merah, Australia',
      duration: 'June 2022 – September 2022',
      responsibilities: [
        'Developed web-based client software and resolved complex errors (invoice and transaction issues)',
        'Fixed bugs and implemented new features in existing projects',
        'Worked with project management tools and version control systems',
        'Automated manual workflows via PowerShell scripts',
      ],
      skills: ['ASP.NET', 'C#.NET', 'Lambda Expressions', 'LINQ', 'jQuery', 'MS SQL Server', 'Jira', 'Backlog', 'SVN']
    },
    {
      role: 'Assistant In Charge',
      company: 'Pancakes on the Rocks – POTR (QLD) Pty Ltd',
      location: 'Gold Coast, Australia',
      duration: 'May 2011 – June 2022',
      responsibilities: [
        'Analyzed business profits, wages, sales, and product data to create reports for head office',
        'Developed strategies for inventory ordering and production optimization',
        'Generated analysis reports in Supply Chain Management Software',
      ],
      skills: ['Data Analysis', 'Reporting', 'Inventory Management', 'Business Optimization']
    },
    {
      role: 'Database Programmer',
      company: 'Novo Data Pty Ltd',
      location: 'North Sydney, Australia',
      duration: 'January 2009 – January 2010',
      responsibilities: [
        'Performed data de-duplication and data cleansing to ensure data accuracy',
        'Managed database performance, capacity, replication, backups, and security',
        'Designed advanced SQL queries, stored procedures, triggers, and scripts',
      ],
      skills: ['SQL', 'Database Administration', 'Data Cleansing', 'Database Optimization']
    },
    {
      role: 'Junior Software Programmer',
      company: 'Procit BV(IT Himalaya)',
      location: 'Nepal',
      duration: 'July 2007 – July 2008',
      responsibilities: [
        'Developed web applications and SQL scripts',
        'Created DLLs and Crystal Reports for reporting and data visualization',
        'Managed application testing, implementation, and database management',
      ],
      skills: ['ASP.NET', 'C#', 'MSSQL Server', 'JavaScript', 'ASP Classic', 'VB6', 'Crystal Reports']
    },
    {
      role: 'Junior Software Programmer',
      company: 'IMS',
      location: 'Nepal',
      duration: 'May 2006 – July 2007',
      responsibilities: [
        'Developed desktop applications for production management and attendance systems',
        'Conducted application testing and implementation',
        'Created reports and database solutions',
      ],
      skills: ['VB6', 'MSSQL Server', 'MySQL', 'PHP', 'JavaScript', 'ASP Classic', 'Crystal Reports']
    }
  ];

  return (
    <div className='flex items-center justify-center pt-10 flex-col'>
      <h1 className='font-semibold text-2xl mt-5 mb-6'>Professional Experience</h1>
      <div className='w-full max-w-4xl space-y-6 px-4'>
        {careerHistory.map((job, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-baseline mb-4'>
              <h3 className='text-lg font-bold text-gray-800'>{job.role}</h3>
              <span className='text-sm text-gray-600'>{job.duration}</span>
            </div>
            <h4 className='text-md font-semibold text-teal-600 mb-3'>{job.company} - {job.location}</h4>
            
            <ul className='list-disc pl-5 space-y-1 mb-4 text-sm text-gray-700'>
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <div className='mt-3'>
              <span className='text-xs font-semibold text-gray-500'>Technologies: </span>
              <div className='flex flex-wrap gap-2 mt-1'>
                {job.skills.map((skill, i) => (
                  <span key={i} className='bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Career;