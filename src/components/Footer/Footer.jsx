import React from 'react';
import FooterLogo from "../../assets/food-logo.png"; 
import{
      FaFacebook,
      FaInstagram,
      FaLinkedin,
      FaLocationArrow,
      FaMobileAlt,
} from "react-icons/fa";



const  Footer = () =>  {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-600'>
              <div className='max-w-[1200px] mx-auto'>
                  <div className='grid md:grid-cols-3 py-5'>
                      <div className='py-8 px-4'>
                          <h1
                          className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>

                             <img src={FooterLogo} alt="" className='max-w-[50px]'/>
                            FOODIE
                          </h1>
                          <p className=''>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sunt modi alias incidunt facilis tenetur tempora doloribus. Tempore, doloribus molestias.

                          </p>
                          <br />

                          <div className='flex items-center gap-3'>
                             <FaLocationArrow />
                             <p>Noida, Uttarpradesh</p>
                          </div>

                          <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt /> 
                            <p>+91 123456789 </p>
                          </div>

                          {/* Social handle  */}
                          <div className='flex items-center gap-3 mt-6'>
                             <a href="#">

                                <FaInstagram className='text-3xl' />
                             </a>
                             <a href="#">
                               <FaFacebook className='text-3xl' />

                             </a>
                             <a href="#">
                               <FaLinkedin className='text-3xl' /> 

                             </a>


                          </div>




                      </div>

                      <div
                      className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'
                      >
                        <div className="">
                              <div className='py-8 px-4'>
                                 <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                    Importants Links 

                                 </h1>
                                 <ul className={`flex flex-col gap-3`}>
                                    <li className='curson-pointer'>Home </li>
                                    <li className='curson-pointer'>About  </li>
                                    <li className='curson-pointer'>Services </li>
                                    <li className='curson-pointer'>Login  </li>


                                 </ul>

                              </div>

                        </div>
                             
                        <div className="">
                              <div className='py-8 px-4'>
                                 <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                     Links 

                                 </h1>
                                 <ul className="flex flex-col gap-3">
                                    <li className='curson-pointer'>Home </li>
                                    <li className='curson-pointer'>About  </li>
                                    <li className='curson-pointer'>Services </li>
                                    <li className='curson-pointer'>Login  </li>


                                 </ul>

                              </div>

                        </div>


                        <div className="">
                              <div className='py-8 px-4'>
                                 <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                     Links 

                                 </h1>
                                 <ul className={`flex flex-col gap-3`}>
                                    <li className='curson-pointer'>Home </li>
                                    <li className='curson-pointer'>About  </li>
                                    <li className='curson-pointer'>Services </li>
                                    <li className='curson-pointer'>Login  </li>


                                 </ul>

                              </div>

                        </div>


                      </div>
                  </div>

                   <div>
                       <div className='text-center py-10 border-t-2 border-gray-300/50'>
                       @copyright 2024 all rights reserved  || made with by aadi 


                       </div>

                   </div>


              </div>
        </div>
    </>
  )
}

export default Footer
