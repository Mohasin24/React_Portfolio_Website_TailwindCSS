import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'project'
    },
    {
        id: 4,
        link: 'contact'
    },
];

const Navbar = () => {

    const [nav, setNav] = useState(false)

    return (
        <div className="flex justify-between items-center w-full h-20 bg-cyan-600 text-white px-4 fixed">
            <div>
                <h1 className="text-3xl font-signature cursor-pointer capitalize">mohasin patel</h1>
            </div>

            <ul className="hidden md:flex mr-8 items-center justify-between">

                {
                    links.map(
                        ({ id, link }) => (

                            <li key={id} className="flex capitalize px-5  
                            cursor-pointer
                            hover:scale-105 duration-150 hover:underline underline-offset-8 decoration-gray-400">{link}</li>
                        )
                    )
                }
                <button className='bg-blue-500 p-2 rounded-full hover:bg-blue-700 font-bold'>Download CV</button>
            </ul>

            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer px-4 z-10'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                        {
                            links.map(
                                ({ id, link }) => (
                                    <li
                                        key={id}
                                        className='py-3 text-2xl capitalize cursor-pointer hover:scale-110 duration-150 hover:underline underline-offset-8 decoration-gray-400'
                                    >{link}</li>
                                )
                            )
                        }
                    </ul>
                )
            }

        </div>
    )
}

export default Navbar;