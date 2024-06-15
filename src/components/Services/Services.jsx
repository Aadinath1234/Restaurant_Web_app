import React from 'react';
import Img2 from '../../assets/biryani2.png';
import { ImGift } from 'react-icons/im';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi natus minima magnam, quos nesciunt dolorem cum tenetur temporibus voluptas! ",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus sit nulla a unde voluptatem tenetur distinctio illum quam dolorum?",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Coffee",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, corrupti?",
  },
];

const Services = () => {
  return (
    <>
      <div className='py-10'>
        <div className='container'>
          {/* Header section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
              Our Services
            </p>
            <h1 className='text-3xl font-bold'>Services</h1>
            <p className='text-xs text-gray-400'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde ad laborum fugiat molestiae tempora atque in! Voluptate, voluptatibus quas.
            </p>
          </div>
          {/* Card section */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
              {ServicesData.map(({ id, img, name, description }) => (
                <div
                data-aos="zoom-in"
                data-aos-duration="300"
                

                  key={id}
                  className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl'
                >
                  <div className='h-[100px]'>
                    <img
                      src={img}
                      alt={name}
                      className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                    />
                  </div>
                  <div className='p-4 text-center'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
