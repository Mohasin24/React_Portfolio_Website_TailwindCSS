import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImg from '../assets/heroimage.jpg';

const Home = () => {
    return (
        <div className='bg-gradient-to-b from-black via-black to-gray-800  pt-32 h-[120vh] md:h-screen  w-full'>

            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row '>

                <div className='flex flex-col justify-center h-full mx-auto'>

                    <h1 className='text-white text-4xl sm:7xl font-bold'>
                        I'm a Full Stack Developer
                    </h1>

                    <p className=' text-gray-100 py-4 text-justify max-w-md0'>
                        A enthusiastic and skilled recent graduate with a B.E. in Information Technology, equipped with a diverse range of technical skills including Java (core and advanced), C, C++, Data Structures and Algorithms, and full-stack web development using the MERN stack. Eager to contribute to a dynamic team and apply my proficiency in Java frameworks (Spring, Spring Boot, Spring MVC, Hibernate, Spring Security) and database technologies (SQL, MongoDB) in a challenging software development role.
                    </p>

                    <div>

                        <button className='group text-white w-fit px-6 py-3 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-bold rounded-xl cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </button>

                    </div>

                </div>

                <div className='p-4 md:p-10'>
                    <img src={HeroImg} 
                    alt="Profile" 
                    className='rounded-full  mx-auto w-2/5 md:w-full'    
                />
            </div>

            </div>

        </div>
    );
}

export default Home;
