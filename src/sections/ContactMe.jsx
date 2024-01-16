import React from 'react';
import { Button } from '../components/Button';

export const ContactMe = () => {
  return (
    <section className='w-full max-container px-5 py-5'>
      <h1 className='mb-5 text-4xl text-pink-600 font-bold font-montserrat' >Contact Me</h1>
      <div>
        <form action="mailto:indicgamer@gmail.com" method="post" className="form flex flex-col gap-10 px-5 py-5">
        <div className="fname flex gap-3 ">
        <label htmlFor="name" className='text-lg sm:text-xl text-pink-600 font-palanquin font-bold'>First Name: </label>
        <input type="text" id='name' className='focus-visible:outline-pink-600' autoComplete='on' />
        </div>
        <div className="lname flex gap-3">
          <label htmlFor="name" className='text-lg sm:text-xl text-pink-600 font-palanquin font-bold'>Last Name: </label>
          <input type="text" id='name' className='focus-visible:outline-pink-600' autoComplete='on'  />
        </div>
        <div className='w-full flex flex-col gap-5'>
          <label htmlFor="desc" className='text-lg sm:text-xl text-pink-600 font-palanquin font-bold'>Message: </label>
          <textarea name="Message" id="desc" cols="30" rows="8" className='focus-visible:outline-pink-600' autoComplete='on' ></textarea>
        </div>

        <div>
        <Button label="Submit" bgColor="bg-pink-600"/>
        </div>

        </form>
        
        
        
      </div>

    </section>
  )
}
