import React from 'react';


const Skill = () => {
  const skillList=[{name:'•	Database Design and Development (MSSQL, MySQL, PostgreSQL, SQLite, Mongo DB)'},
                  {name:'API (Laravel, Django Python, Node.js, Express.js, Strapi, Postman)'},
                  {name:'Mobile App, Web Application and Desktop Application (Programming skills: Python Django, React Native, Asp.Net core/ C#, LINQ, Lambda expression, Java, PHP/ Laravel, Angular/React, jQuery, JavaScript, HTML5, CSS, Tailwind, Bootstrap)'},
                  {name:'AWS Cloud, Microsoft Azure Cloud and Goggle Cloud Configuration '},
                  {name:'Apple and Google play console configuration to deploy mobile app'},
                  {name:'Mobile and Webbased Plateform Screen Design in Figma'},
                  {name:'Computer troubleshooting'},
                  {name:'Ability to work in a team based environment'},
                  {name:'Independent judgment within programmed and policy guidelines'}]
  return (
    <div className='flex items-center justify-center pt-10 flex-col'>        
    <h1 className='font-semibold text-xl mt-5'>Technical Skill List</h1>
      <div className='bg-white shadow-lg border-gray-600 rounded-lg p-10 mt-2 w-10/12'>
      {
        skillList.map((lst,i)=>(
          <h4 className='py-2 text-teal-600 hover:text-teal-900 duration-200'>{i+1}. {lst.name}</h4>
        ))
      }          
      </div>

    </div>
  )
}

export default Skill;