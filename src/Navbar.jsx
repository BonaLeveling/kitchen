import { Link as ScrollLink} from 'react-scroll'
import { useState, useEffect} from 'react'
import { RxCross2 } from "react-icons/rx";


function Navbar({setModalType}) {
    const [MenuOpen , setMenuOpen]= useState(false)
    const [scrolled, setScrolled]= useState(false)

    useEffect(()=> {
        if (MenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return ()=> {
            document.body.classList.remove('no-scroll');
        };
    }, [MenuOpen])
    
    const ToggleMenu= ()=> {
        setMenuOpen (prev => !prev)
    }

    const menuClasses=` 
        fixed top-0 right-0 z-50 bg-white max-w-xs h-screen bg-white shadow-lg 
        flex flex-col gap-6 p-4 transform transition-transform duration-300 ease-in-out
        ${MenuOpen ? `translate-x-0`:`translate-x-full`}
    `
    useEffect( ()=> {
        const handlescroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        } 
        window.addEventListener('scroll',handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])
    const headerClasses= `
        flex justify-between items-center font-['Poppins'] p-4 fixed z-5 top-0 w-full 
        transition-all duration-300 ease-in bg-[#f7f9fa]
        ${scrolled 
          ?'bg-white shadow-lg'
          :'bg-transparent'}
        `
    return (
        <>        
            
            <div className={headerClasses}>
                <div className="flex gap-2 items-center cursor-default">
                    <img src="/Logo.svg" alt="" />
                    <span className='font-semibold text-2xl'>Chef's kitchen.</span>
                </div>
                <div className="hidden lg:flex lg:gap-4">
                    <ScrollLink to='aboutUs' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-medium text-lg text-[#7c7d7d] cursor-pointer hover:text-[#de6752] hover:duration-300'>About us</ScrollLink>
                    <ScrollLink to='menu' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-medium text-lg text-[#7c7d7d] cursor-pointer hover:text-[#de6752] hover:duration-300'>Menu</ScrollLink>
                    <ScrollLink to='reserveTable' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-medium text-lg text-[#7c7d7d] cursor-pointer hover:text-[#de6752] hover:duration-300'>Reserve Table</ScrollLink>
                </div>
                <div className="hidden lg:flex lg:gap-4">
                    <div className='hidden xl:flex xl:items-center gap-2 cursor-pointer'>
                        <img src="/phone.svg" alt="" className='w-6'/>
                        <span className='text-black font-medium text-lg hover:text-[#de6752]'>+1(909) 235-9814</span>
                    </div>
                    <span onClick={()=> {setModalType('signIn')}} className='bg-[#f5e3e1] font-medium text-lg text-[#de6752] px-6 py-2 rounded-full cursor-pointer hover:bg-[#de6752] hover:text-white hover:duration-300'>Sign In</span>
                    <span onClick={()=> {setModalType('signUp')}} className='px-6 py-2 rounded-full bg-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#f5e3e1] hover:text-[#de6752] hover:duration-300'>Sign Up</span>
                </div>
                <div>
                    {MenuOpen && (
                    <div 
                        // fixed inset-0 couvre tout l'écran
                        // z-40 est juste en dessous du menu (z-50)
                        // bg-black bg-opacity-40 donne l'effet rgba(0,0,0,0.4)
                        className="fixed inset-0 bg-black/40 bg-opacity-40 z-10 " 
                        onClick={ToggleMenu} // Ferme le menu si on clique en dehors
                        />
                    )}
                    <button className='cursor-pointer lg:hidden' onClick={ToggleMenu}>
                        <span className="flex before:content-[''] before:w-6 before:h-0.5 before:bg-black"></span>
                        <span className="flex before:content-[''] before:w-6 before:h-0.5 before:bg-black before:my-1.5"></span>
                        <span className="flex before:content-[''] before:w-6 before:h-0.5 before:bg-black"></span>
                    </button>
                    <ul className={menuClasses}>
                        <li className='flex justify-between items-center'>
                            <div className="flex gap-2 items-center cursor-pointer w-1/2">
                                <img src="/Logo.svg" alt="" />
                                <span className='font-semibold text-2xl'>Chef's kitchen.</span>
                            </div>
                            <RxCross2 className='text-xl hover:text-[#de6752]' onClick={ToggleMenu}/>
                        </li>
                        <li className='mt-6'>
                            <ScrollLink to='aboutUs' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-normal text-lg text-black cursor-pointer'>About us</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='menu' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-normal text-lg text-black cursor-pointer'>Menu</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='reserveTable' spy={true} offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-normal text-lg text-black cursor-pointer'>Reserve Table</ScrollLink>
                        </li>
                        <li onClick={()=> {setModalType('signIn')}} className='text-center border border-[#de6752] rounded-md p-1 bg-[#de6752] text-white font-normal text-lg cursor-pointer hover:bg-transparent hover:text-[#de6752] hover:border hover:border-[#de6752] hover:duration-300'>
                            <span>Sign In</span>
                        </li>
                        <li onClick={()=> {setModalType('signUp')}} className='text-center border border-[#de6752] rounded-md p-1 bg-[#de6752] text-white font-normal text-lg cursor-pointer hover:bg-transparent hover:text-[#de6752] hover:border hover:border-[#de6752] hover:duration-300'>
                            <span>Sign Up</span>
                        </li>
                    </ul>
                </div>
            </div>
           
        </>
    )
}
export default Navbar