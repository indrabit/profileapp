import React,{useContext} from 'react';
import { DataContext } from './ProfileHeader';
import Introduction from '../ProfileDetail/Introduction';
import Contact from '../ProfileDetail/Contact';
import Education from '../ProfileDetail/Education';
import Career from '../ProfileDetail/Career';
import Skill from '../ProfileDetail/Skill';
const Profile = () => {
  const Ctx=useContext(DataContext);
  return (
    <div className=' bg-slate-300 auto shadow-2xl'>
        <div className='self-center hover:leading-loose'>
          {
            (()=>{
              switch(Ctx){
                case 'introduction':
                  return <Introduction/>;
                case 'education':
                  return <Education/>;
                case 'career':
                  return <Career/>;
                case 'skills':
                  return <Skill/>;
                default:
                return  <Contact/>;
              }
            })()
          }          
        </div>                                              
    </div>
    
  )
}

export default Profile;