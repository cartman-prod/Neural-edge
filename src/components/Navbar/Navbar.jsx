import React from 'react';
import Logo from '../../assets/logo.png';
import DarkMode from './DarkMode';
import {HiMenuAlt1, HiMenuAlt3} from'react-icons/hi';
import ResposiveMenu from './ResposiveMenu';

export const MenuLinks = [
    {
        id: 1,
        name: 'About',
        url: '/about'

    },
    {
        id: 2,
        name: 'Services',
        url: '/services'

    },
    {
        id: 3,
        name: 'Projects',
        url: '/projects'

    },
    {
        id: 4,
        name: 'Contact',
        url: '/contact'

    }
]
 
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);

    }

  return (
    <>
        <nav className='duration-300 bg-white dark:bg-black dark:text-white '>
            <div className='container py-3 md:py-2'>
                <div className='flex justify-between items-center'>
                    {/*Logo */}
                    <div>
                        <a href='#' className='flex items-center gap-3'>
                        <img className='w-7' src={Logo} alt='logo Neural-Edge' />
                            <span className='text-2xl sm:text-3xl font-semibold'>Neural-Edge</span>
                            </a>
                    </div>
                    {/*Desltop NavLinks*/}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {MenuLinks.map(({id, name, url}) => {
                                return (
                                    <li key={id} className='cursor-pointer py-4'>
                                    <a href={url} className='text-lg font-medium py-2 hover:text-primary
                                    hover:border-b-2 hover:border-primary transition-all duration-100'>
                                        {name}
                                    </a>
                                </li>
                            )})}
                            <button className='btn-primary'>Get Start</button>
                            <DarkMode/>
                        </ul>
                    </div>
                    {/* Mob view */}
                    <div className='flex items-center gap-4 md:hidden'>
                        <DarkMode/>
                        {showMenu ? (<HiMenuAlt1 onClick={toggleMenu}
                        className='cursour-pointer text-2xl'/>) : (<HiMenuAlt3 onClick={toggleMenu}
                            className='cursour-pointer text-2xl'/>)}
                    </div>
                </div>
            </div>
            {/*Mobile Menu section*/}
            <ResposiveMenu showMenu={showMenu}/>
        </nav>
    </>
  )
}

export default Navbar