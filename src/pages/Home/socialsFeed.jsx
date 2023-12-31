import React from 'react'


const SocialsFeed = () => {
  return (
    <div className='bg-primary'>

    <div className="relative text-center">
        <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-5 inline-block mt-8">
          Socials
        </h2>
        <span className="block w-20 h-1 bg-gray-100 mx-auto mt-2 mb-8"></span>
      </div>

    <div className=" md:flex md:justify-center md:mx-20 md:p-10 p-5">
      <div className="w-full md:w-1/3 p-4">
        
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="330" 
        height="400" 
        className='border-none overflow-hidden rounded-md'
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
      
      <div className="w-full md:w-1/3 p-4">
        
        <iframe width="330" height="400" 
        src="https://www.youtube.com/embed/osCUTGkKVRg?si=_6v_emwWssdyLOkd" 
        title="YouTube video player" 
        className='rounded-md'
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
      </div>
    </div>
    </div>
  )
}

export default SocialsFeed;