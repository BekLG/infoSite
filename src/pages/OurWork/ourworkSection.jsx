import React from 'react';
import heroBg from '../../assets/heroBg.jpg';

const OurworkSection = () => {
  const images = [
    { src: heroBg, text: 'ELDERLY SUPPORT' },
    { src: heroBg, text: 'EDUCATION' },
    { src: heroBg, text: 'MONTHLY GROCERIES' },
    { src: heroBg, text: 'SUPPORT FAMILY BUSINESS' },
    { src: heroBg, text: 'HELP THE YOUTH' },
    { src: heroBg, text: 'DISASTER RELIEF' },
  ];

  const firstRowImages = images.slice(0, 3);
  const secondRowImages = images.slice(3);

  return (
    <div className="container mx-auto px-10 py-8">
      <div className="flex justify-center space-x-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Past
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Current
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Future
        </button>
      </div>

      <div className="mt-8 md:grid grid-cols-3 gap-5">
        {firstRowImages.map((image, index) => (
          <div className="relative" key={index}>
          <img
            className="w-full h-full object-cover brightness-50 m-2 md:m-0 rounded-md"
            src={image.src}
            alt={`Image ${index + 1}`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            {image.text}
          </div>
        </div>
        ))}
      </div>

      <div className="md:mt-8 md:grid md:grid-cols-3 gap-5">
        {secondRowImages.map((image, index) => (
          <div className="relative" key={index}>
            <img
              className="w-full h-full object-cover brightness-50 m-2 md:m-0 rounded-md"
              src={image.src}
              alt={`Image ${index + 4}`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              {image.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="md:w-2/3 p-4 m-5">
          <p className="text-lg font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            non vel hic sit quod error delectus itaque quaerat soluta labore
            voluptatem, dicta laboriosam voluptatibus iste exercitationem sint
            illo at odio tenetur quisquam corporis neque nulla! Natus itaque
            sequi iure earum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurworkSection;