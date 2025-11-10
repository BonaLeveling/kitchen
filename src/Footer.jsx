import { Link as ScrollLink } from 'react-scroll'
function Footer() {
    return (
            <div className="font-['Poppins'] text-[18px] p-4">
                <div className='md:flex md:justify-between md:flex-wrap'>
                    <div className='mb-10'>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <img src="/Logo.svg" alt="" />
                            <span className='font-semibold text-2xl'>Chef's kitchen.</span>
                        </div> 
                        <p className='text-sm w-45 my-6'>
                            Open an account in minutes, get full financial control for much longer.
                        </p>
                        <div className="flex gap-4">    
                            <a href="" className="w-8 bg-white p-2 rounded-full shadow-lg hover:bg-[#de6752]"><img src="/facebook.svg" alt=""/></a>
                            <a href="" className=" w-8 bg-white p-2 rounded-full shadow-lg hover:bg-[#de6752]"><img src="/insta.svg" alt=""/></a>
                            <a href="" className="w-8 bg-white p-2 rounded-full shadow-lg hover:bg-[#de6752]"><img src="/twitter.png" alt=""/></a>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col font-normal md:min-w-60'>
                            <h1 className='font-medium'>Company</h1>
                            <ScrollLink to='' spy={true} className='text-black/60 cursor-pointer hover:text-black font-normal hover:duration-300'>Home</ScrollLink>
                            <ScrollLink to='' spy={true} className='text-black/60 cursor-pointer hover:text-black font-normal hover:duration-300'>About Us</ScrollLink>
                            <ScrollLink to='' spy={true} className='text-black/60 cursor-pointer hover:text-black font-normal hover:duration-300'>Menu</ScrollLink>
                            <ScrollLink to='' spy={true} className='text-black/60 cursor-pointer hover:text-black font-normal hover:duration-300'>Reserve Table</ScrollLink>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium'>Support</h1>
                            <a href='' className='text-black/60 hover:text-black font-normal hover:duration-300'>Help/FAQ</a>
                            <a href='' className='text-black/60 hover:text-black font-normal hover:duration-300'>Press</a>
                            <a href='' className='text-black/60 hover:text-black font-normal hover:duration-300'>Affiliates</a>
                            <a href='' className='text-black/60 hover:text-black font-normal hover:duration-300'>Hotel owners</a>
                            <a href='' className='text-black/60 hover:text-black font-normal hover:duration-300'>Partners</a>
                        </div>
                    </div>
                    <div className='mt-6 md:min-w-80 md:mt-0'>
                        <div className='flex gap-2'>
                            <img src="/address.svg" alt="" className='w-8'/>
                            <span className=''>925 Filbert Street Pennsylvania 18072</span>
                        </div>
                        <div className='flex gap-2 cursor-pointer my-4'>
                            <img src="/phone.svg" alt="" className='w-8'/>
                            <span className='text-black/60 hover:text-black'>+1(909) 235-9814</span>
                        </div>
                        <div className='flex gap-2 cursor-pointer'>
                            <img src="/mailbox.svg" alt="" className='w-8'/>
                            <span className='text-black/60 hover:text-black'>@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='text-sm border-t border-black/30 mt-8 md:flex md:justify-between md:flex-wrap'>
                    <p className='mt-4'>
                     @2025 - Chef's kitchen. All Rights Reserved by Bonaventure and  <a href="" className='hover:text-[#de6752] hover:underline'>GetNextjsTemplates</a> 
                    </p>
                    <div className='mt-4 flex gap-4'>
                        <a href="" className='hover:text-[#de6752] hover:underline'>Privacy policy</a>
                        <span className='flex items-center before:border-l before:border-gray-400 before:content-[""] before:h-5 before:w-1'></span>
                        <a href="" className='-ml-1 hover:text-[#de6752] hover:underline'>Terms & conditions</a>
                    </div>
                </div>
            </div>
        )
}
export default Footer