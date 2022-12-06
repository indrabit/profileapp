import React from 'react';


const Skill = () => {
  const skillList=[{name:'Database Design and Development (MSSQL, MySQL)'},
                  {name:'Software Programming (Asp.Net core, Java, C#, Angular/React, React Native, Django, JQuery, JavaScript, HTML5, CSS)'},
                  {name:'Problem solving abilities'},
                  {name:'Business analysis'},
                  {name:'Proficiency in core programming language'},
                  {name:'Ability to work in a team based environment'},
                  {name:'Independent judgment within programmed and policy guidelines'}]
  return (
    <div className='flex items-center justify-center pt-10 flex-col'>        
    <h1 className='font-semibold text-xl mt-5'>Technical Skill List</h1>
      <div className='bg-white shadow-lg border-gray-600 rounded-lg p-10 mt-2  w-10/12'>
      {
        skillList.map((lst,i)=>(
          <h4 className='py-4 text-teal-300 hover:text-teal-900 duration-200'>{i+1}. {lst.name}</h4>
        ))
      }          
      </div>

    </div>
  )
}

export default Skill;