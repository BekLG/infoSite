import React from 'react'
import Button from '../../components/ui/Button.jsx';

const whoWeAre= ()=> {
    return(
        <div className="container md:max-w-6xl md:mx-20 mx-10 w-auto md:mt-[50px] mt-[100px] ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-center">
         Who We Are
        </h2>
      
            <p className='mb-4'>Welcome to NGO Name, where passion meets purpose to create positive change in the world. Founded in 2001, our non-profit organization is driven by a collective commitment to making a meaningful impact on the lives of those in need.</p>

            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laudantium iure facere corporis sequi illo, quae necessitatibus quas qui quasi accusamus excepturi, distinctio id quos quis quisquam ratione eos voluptate vitae labore error consequuntur nostrum! At nam voluptates laborum? Nostrum! accusamus excepturi, distinctio id quos quis quisquam ratione eos voluptate vitae labore error consequuntur nostrum! At nam voluptates laborum? Nostrum! </p>
        
            <Button className='w-full' text="Read More" type="filled" color="yellow" />

        </div>
    )
}

export default whoWeAre;