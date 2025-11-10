import './index.css'
import { Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink } from 'react-router'
import { useEffect, useState, useRef } from 'react'
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Modal from './Modal.jsx'
import Caroussel from './Caroussel.jsx'


function App() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  const imgRef = useRef(null)
  const img2Ref = useRef(null)

  gsap.registerPlugin(ScrollTrigger);
  useEffect (()=> {
    if (section1Ref.current) {
      gsap.fromTo(section1Ref.current.children, 
        {
          // Anime le conteneur principal de Features
          y:80, 
          opacity: 0, 
        },
        {
          // Anime les enfants de la section (titre, cartes)
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          stagger: 0.2, // Apparition décalée des éléments enfants
          scrollTrigger: {
              trigger: section1Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
          }
      });
  }
  if (section2Ref.current) {
    gsap.fromTo(section2Ref.current.children, 
      {
        // Anime le conteneur principal de Features
        y:80, 
        opacity: 0, 
      },
      {
        // Anime les enfants de la section (titre, cartes)
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        stagger: 0.2, // Apparition décalée des éléments enfants
        scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
        }
    });
  }
  if (section3Ref.current) {
    gsap.fromTo(section3Ref.current.children, 
      {
        // Anime le conteneur principal de Features
        y:80, 
        opacity: 0, 
      },
      {
        // Anime les enfants de la section (titre, cartes)
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        stagger: 0.2, // Apparition décalée des éléments enfants
        scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
        }
    });
  }
  if (section4Ref.current) {
    gsap.fromTo(section4Ref.current.children, 
      {
        // Anime le conteneur principal de Features
        y:80, 
        opacity: 0, 
      },
      {
        // Anime les enfants de la section (titre, cartes)
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        stagger: 0.2, // Apparition décalée des éléments enfants
        scrollTrigger: {
            trigger: section4Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
        }
    });
  }
  }, [])
useEffect (()=>{
  gsap.fromTo(imgRef.current,
    {opacity: 0, scale: 0.5,},
    {opacity: 1, scale: 1, duration: 1.5, ease: "back.inOut",
  } 
  )
},[])

useEffect (()=>{
  gsap.fromTo(img2Ref.current,
    {opacity: 0, scale: 0.5,},
    {opacity: 1, scale: 1, duration: 1.2, ease: "back.in",
    scrollTrigger: {
      trigger: img2Ref.current,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
  }
  } 
  )
},[])

  
  const [isVisible, setIsVisible]= useState(false)
  const [modalType, setModalType] = useState(null)

  useEffect(()=> {
    const togglevisible = ()=> {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', togglevisible)
    return () => {
      window.removeEventListener('scroll', togglevisible)
    }
  })
  const buttonClasses = `
  bg-[#de6752] rounded-xl p-2 fixed  bottom-8 right-6 shadow-lg
  ${isVisible?'opacity-100 visible':'opacit-0 hidden'}
  `
  const closeModal = () => {
    setModalType(null)
  }
  const handleSwitchType = (newType) => {
    setModalType(newType)
  }
  return (
    <div className='relative'>
      {modalType && (
        <Modal type={modalType} onClose={closeModal} onSwitchType={handleSwitchType} />  
      )}
      <Navbar setModalType={setModalType} />
      <div className='pt-24 p-4 bg-[#f7f9fa]' id='home'>
        <div className='bg-[#f7f9fa] lg:flex items-center'>
          <div className='lg:w-1/2'>
            <h1 className='font-semibold text-5xl font-["Poppins"] w-[90%] leading-16 text-center mt-4 mb-6 mx-auto md:text-6xl lg:text-left lg:mx-0'>Elevated Dining at Chef’s Kitchen</h1>
            <p className='font-["Poppins"] text-[18px] text-center mb-6 w-[85%] text-black/50 mx-auto lg:text-left lg:mx-0 lg:w-full'>
              Indulge in an elegant culinary journey, crafted with locally sourced ingredients and world-class flavors — served fresh, every day.
            </p>
            <div className='flex max-sm:flex-col gap-4 items-center justify-center lg:justify-start'>
              <ScrollLink spy={true} to='menu' offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='bg-[#de6752] font-["Poppins"] font-medium text-2xl text-white px-6 py-2 rounded-full cursor-pointer w-48 text-center hover:bg-[#f5e3e1] hover:text-[#de6752] hover:duration-300'>View Menu</ScrollLink>
              <ScrollLink spy={true} to='reserveTable' offset={-150} smooth={true} ease='easeInOutQuad' duration={500} className='font-["Poppins"] font-medium text-2xl  px-6 py-2 rounded-full cursor-pointer border border-[#de6752] text-[#de6752] w-65 text-center hover:text-white hover:duration-300 hover:bg-[#de6752]'>Reserve a Table</ScrollLink>
            </div>
          </div>
          <div className='relative lg:w-1/2'>
            <img src="/banner-image.webp" alt="" className='mx-auto lg:mx-0' ref={imgRef}/>
            <div className='absolute bottom-10 left-10 z-1 bg-white font-["Poppins"] flex gap-4 items-center w-65 p-2 rounded-lg'>
                <img src='/pizza.webp' alt=''/>
                <span>Over 50+<br/>signature dishes</span>
            </div>
          </div>
        </div> 
      </div>
      <div className='bg-white font-["Poppins"] p-4' ref={section1Ref}>
        <h1 className='uppercase text-[#de6752] text-xl text-center tracking-[10px] mt-4'>Why Choose Us</h1>
        <div className='flex justify-center mt-4'>
          <h1 className='text-4xl text-center font-semibold leading-12 lg:w-[60%] lg:text-5xl'>Experience More Than Just a Meal</h1>
        </div>
        <div className='sm:flex sm:justify-center sm:gap-6 max-lg:flex-wrap '>
          <div className='flex flex-col items-center bg-linear-to-b from-[#f7ece9] to-white cursor-pointer relative mt-30 p-4 rounded-2xl shadow-lg hover:scale-105 hover:duration-300 hover:ease-in-out sm:w-[48%] lg:w-[24%] xl:w-[24%]'>
            <img src='/featureOne.svg' alt='' className='absolute -top-[45%] left-[15%]  lg:left-0 lg:-top-[35%] xl:left-[8%]'/>
            <h2 className='text-2xl font-medium text-center pt-16 w-[80%]'>Elegant Dining Atmosphere</h2>
            <p className='text-black/60 mt-4 text-center mb-2 w-[80%]'>Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.</p>
          </div>

          <div className='flex flex-col items-center bg-linear-to-b from-[#f7ece9] to-white cursor-pointer relative mt-30 p-4 rounded-2xl shadow-lg hover:scale-105 hover:duration-300 hover:ease-in-out sm:w-[48%] lg:w-[24%] xl:w-[24%]'>
            <img src='/featureThree.svg' alt='' className='absolute -top-[45%] left-[15%] lg:left-0 lg:-top-[35%] xl:left-[8%]'/>
            <h2 className='text-2xl font-medium text-center pt-16 w-[80%]'>Signature Chef Creations</h2>
            <p className='text-black/60 mt-4  text-center mb-2 w-[80%]'>Taste one-of-a-kind dishes crafted with passion by our top culinary team.</p>
          </div>

          <div className='flex flex-col items-center bg-linear-to-b from-[#f7ece9] to-white cursor-pointer relative mt-30 p-4 rounded-2xl shadow-lg hover:scale-105 hover:duration-300 hover:ease-in-out sm:w-[48%] lg:w-[24%] xl:w-[24%]'>
            <img src='/featureTwo.svg' alt='' className='absolute -top-[45%] left-[15%] lg:left-0 lg:-top-[35%] xl:left-[8%]'/>
            <h2 className='text-2xl font-medium text-center pt-16 w-[80%]'>Fresh, Local Ingredients</h2>
            <p className='text-black/60 mt-4  text-center mb-2 w-[80%]'>We use locally sourced goods daily for unmatched taste and quality.</p>
          </div>

          <div className='flex flex-col items-center bg-linear-to-b from-[#f7ece9] to-white cursor-pointer relative mt-30 p-4 rounded-2xl shadow-lg hover:scale-105 hover:duration-300 hover:ease-in-out sm:w-[48%] lg:w-[24%] xl:w-[24%]'>
            <img src='/featureFour.svg' alt='' className='absolute -top-[45%] left-[15%] lg:left-0 lg:-top-[35%] xl:left-[8%]'/>
            <h2 className='text-2xl font-medium text-center pt-16 w-[80%]'>Hassle-Free Reservations</h2>
            <p className='text-black/60 mt-4  text-center mb-2 w-[80%]'>Reserve online in seconds or walk in anytime — we’re ready when you are.</p>
          </div>
        </div>
        <div className='mt-30 relative lg:flex lg:items-center lg:gap-6'>
          <img src="/cook.webp" alt="" className='lg:h-135 lg:shrink-0' ref={img2Ref}/>
          <div className='lg:w-1/2'>
            <h1 id='aboutUs' className='uppercase text-[#de6752] text-xl text-center tracking-[10px] mt-4 lg:text-left'>About us</h1>
            <div className='flex justify-center mt-4 lg:justify-start'>
              <h1 className='text-4xl text-center font-semibold leading-12 md:text-5xl lg:text-5xl lg:text-left'>Crafted with Passion, Served with Pride</h1>
            </div>
            <div className='my-8'>
              <p className='mb-4 w-[86%] md:w-full text-black/60 md:text-xl'>
                At Chef’s Kitchen, every dish tells a story. Our chefs blend tradition with innovation to deliver a fine dining experience that delights the senses. From handpicked ingredients to exquisite plating, we’re here to make every meal unforgettable.
              </p>
              <p className='w-[85%] md:w-full text-black/60 md:text-xl'>
                Whether you’re celebrating a special occasion or enjoying a casual evening out, our welcoming ambiance and flavorful creations promise something truly special for every guest.
              </p>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <RouterLink to='' className='bg-[#de6752] font-medium text-2xl text-white px-6 py-2 rounded-full cursor-pointer w-48 text-center hover:bg-[#f5e3e1] hover:text-[#de6752] hover:duration-300'>Learn more</RouterLink>
            </div>
            <img src="/burger.webp" alt="" className='hidden absolute right-0 -bottom-68 xl:block w-100'/>
          </div>
        </div>
      </div>
      <div className='bg-[#fcf0ed] p-4 mt-20 font-["Poppins"]' ref={section2Ref}>
        <h1 className='uppercase text-[#de6752] text-xl text-center tracking-[10px] mt-4'>Our chefs</h1>
        <div className='flex justify-center mt-4'>
          <h1 className='text-4xl text-center font-semibold leading-12 capitalize lg:w-[60%] lg:text-5xl'>Meet our culinary experts</h1>
        </div>
        <Caroussel />
      </div>
      <div className='p-8 font-["Poppins"] my-8' ref={section3Ref}>
        <h1 id='menu' className='uppercase text-[#de6752] text-xl text-center tracking-[10px] mt-4'>Our menu</h1>
        <div className='flex justify-center mt-4'>
          <h1 className='text-4xl text-center font-semibold leading-12 capitalize lg:text-5xl'>Explore Our Signature Dishes</h1>
        </div>
        <div className='mt-18 flex gap-6 max-sm:flex-col'>
          <div>
            <div className='relative  mx-auto min-w-50 rounded-3xl group overflow-hidden mb-6'>
              <img src="/foodone.jpg" alt="" className='rounded-3xl w-full'/>
              <div className='p-4 rounded-3xl absolute w-full h-full flex flex-col justify-end text-white  bg-black/40 top-full group-hover:top-0 transition-all duration-500'>
                <span className='text-xl font-normal'>Caesar Salad(187 Kcal)</span>
                <div className='flex items-center justify-between my-4'>
                  <span className='text-xl'>$ 35</span>
                  <button className='px-4 py-1 rounded-full bg-[#de6752] border border-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#de6752]/40 hover:text-[#de6752] hover:duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className='relative rounded-3xl min-w-50 mx-auto group overflow-hidden'>
              <img src="/foodtwo.webp" alt="" className='rounded-3xl w-full' />
              <div className='w-full h-full text-white flex flex-col justify-end absolute p-4 top-full group-hover:top-0 rounded-3xl bg-black/40 transition-all duration-500'>
                <span className='text-xl font-normal'>Christmas salad(118 Kcal)</span>
                <div className='flex items-center justify-between my-4'>
                  <span className='text-xl'>$ 17</span>
                  <button className='px-4 py-1 rounded-full bg-[#de6752] border border-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#de6752]/40 hover:text-[#de6752] hover:duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div> 
          <div>
            <div className='relative mx-auto group overflow-hidden rounded-3xl min-w-50 mb-6'>
              <img src="/foodthree.webp" alt="" className='rounded-3xl w-full'/>
              <div className='absolute w-full h-full p-4 flex flex-col justify-end text-white top-full group-hover:top-0 bg-black/40 transition-all duration-500 rounded-3xl'>
                <span className='text-xl font-normal'>Sauteed mushrooms with pumpkin bowl(238 kcal)</span>
                <div className='flex items-center justify-between my-4'>
                  <span className='text-xl'>$ 45</span>
                  <button className='px-4 py-1 rounded-full bg-[#de6752] border border-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#de6752]/40 hover:text-[#de6752] hover:duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className='mx-auto relative rounded-3xl min-w-50 group overflow-hidden'>
              <img src="/foodfour.webp" alt="" className="rounded-3xl w-full" />
              <div className='text-white absolute  p-4 flex flex-col justify-end w-full h-full top-full group-hover:top-0 bg-black/40 rounded-3xl transition-all duration-500'>
                <span className='text-xl font-normal'>BBQ Chicken Feast Pizza(272 kcal)</span>
                <div className='flex items-center justify-between my-4'>
                  <span className='text-xl'>$ 27</span>
                  <button className='px-4 py-1 rounded-full bg-[#de6752] border border-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#de6752]/40 hover:text-[#de6752] hover:duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='text-center mt-12'>
        <button onClick={()=> {setModalType('menu')}} className="font-['Poppins'] px-6 py-2 rounded-full bg-[#de6752] border border-[#de6752] text-white font-medium text-lg cursor-pointer hover:bg-[#de6752]/40 hover:text-[#de6752] hover:duration-300">
          View More
        </button>
      </div>   
      <div className='font-[Poppins] mt-24 p-4' ref={section4Ref}>
        <h1 id='reserveTable' className='uppercase text-[#de6752] text-xl text-center tracking-[10px] mt-4'>reservation</h1>
        <div className='flex justify-center mt-2'>
          <h1 className='text-4xl text-center font-semibold leading-12 capitalize lg:w-[60%] lg:text-5xl'>Dine With Us</h1>
        </div>
        <form action="" className='border border-gray-400 rounded-3xl p-4 my-8'>
          <div className='md:flex md:flex-wrap'>
            <div className='md:flex md:gap-6 md:w-full'>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="fullName" className='font-normal'>Full Name</label>
                <input type="text" name="fullName" placeholder='John Doe' className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'/>
              </div>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="addressEmail" className='font-normal'>Email Address</label>
                <input type="email" name="addressEmail" placeholder='john.doe@example.com' className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'/>
              </div>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="phoneNumber" className='font-normal'>Phone Number</label>
                <input type="text" name="phoneNumber" placeholder='+1234567890' className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'/>
              </div>
            </div>
            <div className='md:flex md:gap-6 md:w-full'>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="Outlet" className='font-normal'>Outlet</label>
                <select name="phoneNumber" className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'>
                  <option value='selected'>Choose the Outlet</option>
                  <option value='Downtown LA'>Downtown LA</option>
                  <option value='Hollywood'>Hollywood</option>
                  <option value='West Hollywood'>West Hollywood</option>
                  <option value='Beverly Hills'>Beverly Hills</option>
                  <option value='Santa Monica'>Santa Monica</option>
                  <option value='Venice Beach'>Venice Beach</option>
                </select>
              </div>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="time" className='font-normal'>Time</label>
                <input type="time" name="Time" className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'/>
              </div>
              <div className='flex flex-col gap-2 my-4 md:w-1/3'>
                <label htmlFor="nOPeaple" className='font-normal'>NO. Of People</label>
                <input type="number" name="nOPeaple" className='font-normal border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="message">Message</label>
            <textarea name='message' placeholder='Anything else you wanna communicate' className='font-normal h-full w-full border border-gray-400 rounded-xl p-2 outline-0 focus:border-[#de6752] focus:duration-300'></textarea>
          </div>
          <input type="submit" value='Submit' className='cursor-not-allowed mt-4 font-normal p-3 text-xl rounded-full bg-gray-400 text-gray-600' />
        </form>
        <div className="mx-auto relative my-24 p-6 bg-[#de6752] text-white font-['Poppins'] rounded-b-[60px] rounded-tl-[60px] rounded-tr-[600px] lg:w-[90%] lg:flex lg:gap-6 lg:p-30">
          <div className='xl:w-1/2'>
            <h1 className='uppercase text-lg  tracking-[6px]'>reservation</h1>
            <h1 className='text-4xl font-semibold mt-6 lg:text-5xl'>Subscribe our<br/>newsletter</h1>
            <div className='flex relative mt-8'>
              <input type="email" id="email" placeholder="john.doe@example.com" className='px-4 py-3 bg-white text-black w-full rounded-full '/>
              <button className='bg-black rounded-full p-1 absolute right-1.5 mt-1 cursor-pointer hover:scale-110 duration-300 '>
                <img src="/right.svg" alt="" className='w-8' />
              </button>
            </div>
          </div>
          <div className='hidden overflow-x-hidden lg:inline-block xl:w-1/2'>
            <img src="/soup.webp" alt="" className='max-lg:w-110 absolute -top-20 right-0' ref={img2Ref}/>
            <img src='/yellow.svg' alt='' className='absolute bottom-5 right-130'/>
            <img src="/onion.webp" alt="" className='absolute -bottom-25 right-70'/>
            <img src="/blue.svg" alt="" className='absolute bottom-30 right-40'/>
            <img src="/lec.webp" alt="" className='absolute bottom-20 -right-15'/>
          </div>
        </div>
      </div>
      <div>
        <ScrollLink to="home" spy={true} smooth={true} ease='easeInOutQuad' duration={500} offset={-100} className={buttonClasses}>
          <img src="/top1.svg" alt="" className='w-8'/>
        </ScrollLink>
      </div>
      <Footer/>
    </div>
  )
}

export default App
