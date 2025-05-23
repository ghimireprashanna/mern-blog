import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, Links } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar className='border-b-2'>
        <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>pro's</span>
        Blog
        </Link>
        <form>
            <TextInput type='text' placeholder='Search....' rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to={'/signin'}>
                <Button className="hover:bg-gradient-to-br from-purple-600 to-blue-500 text-white " outline>SignIn</Button>
            </Link>
            <NavbarToggle/>
        </div>
        <NavbarCollapse>
    
        <Link className="block py-2 pl-3 pr-4 md:p-0 text-gray-100 hover:bg-gray-600 rounded-2xl" to='/'>
        Home
        </Link>
    
        <Link className="block py-2 pl-3 pr-4 md:p-0 text-gray-100 hover:bg-gray-600 rounded-2xl" to='/about'>
        About
        </Link>

        <Link className="block py-2 pl-3 pr-4 md:p-0 text-gray-100 hover:bg-gray-600 rounded-2xl" to='/projects'>
        Projects
        </Link>
  </NavbarCollapse>


    </Navbar>
  )
}

export default Header