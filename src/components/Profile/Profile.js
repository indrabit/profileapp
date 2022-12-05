import React from 'react';
import backgroundImg from '../../assets/profile-bg.webp'
import profileImg from '../../assets/profile-img.jpg'

const Profile = () => {
  return (
    <div className='px-10 md:px-40 w-full'>
        <div>
            <div className='h-12 '><img src={backgroundImg} alt='Background' className=' h-40 w-full' /></div>          
            <div className='flex justify-center'>
                <img src={profileImg} alt='Profile' className='shadow-md rounded-full max-w-full align-middle border-none'/>
            </div>            
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Profile;