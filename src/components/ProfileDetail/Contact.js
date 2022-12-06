import React from 'react';
import ContactImg from '../../assets/contact.jpg'


const Contact = () => {
  return (
    <div class="w-full">
        <div class="flex flex-col md:flex-row md:w-full rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ContactImg} alt="" />
            <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Contact</h5>
                <p class="text-gray-700 text-base mb-4">Name: Indra Shrestha</p>
                <p class="text-gray-700 text-base mb-4">Contact No: 0436 382 645</p>       
                <p class="text-gray-600 text-xs">Email: ind_stha@yahoo.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact;