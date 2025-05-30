import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import {FaMoon} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user)
  return (
    <Navbar className='border-b-2 dark:text-white'>
        <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold '>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>pro's</span>
        Blog
        </Link>
        <form>
            <TextInput type='text' placeholder='Search....' rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button color="light" className='w-12 h-10 lg:hidden' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button color="light" className='w-12 h-10 hidden sm:inline'  pill>
                <FaMoon />
            </Button>
            {currentUser ? (
                <Dropdown arrowIcon={false} inline
                label={
                    <Avatar
                    alt='user'
                    img={currentUser.profilePicture}
                    rounded
                    />
                }>
                    <DropdownHeader>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-medium truncate'>{currentUser.email}</span>
                    </DropdownHeader>
                    <Link to={'/dashboard?/tab=profile'}>
                        <DropdownItem>Profile</DropdownItem>
                    </Link>
                    <DropdownDivider/>
                    <DropdownItem>Sign out</DropdownItem>

                </Dropdown>
            ) 
            : 
            (<Link to={'/signin'}>
                <Button className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" outline>SignIn</Button>
            </Link>)}
            
            <NavbarToggle/>
        </div>
        <NavbarCollapse>
    
        <Link className="block px-4 py-2 text-center hover:bg-gray-600 hover:text-white rounded-2xl" to='/'>
        Home
        </Link>
    
        <Link className="block px-4 py-2 text-center hover:bg-gray-600 hover:text-white rounded-2xl" to='/about'>
        About
        </Link>

        <Link className="block px-4 py-2 text-center hover:bg-gray-600 hover:text-white rounded-2xl" to='/projects'>
        Projects
        </Link>
  </NavbarCollapse>


    </Navbar>
  )
}

export default Header