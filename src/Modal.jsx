import './index.css'
import {useEffect} from 'react'

const SignInForm = ({onSwitchType}) => {
    return (
        <div className="h-full bg-white p-6 rounded-xl font-['Poppins']">
            <div className="flex gap-2 items-center justify-center cursor-default">
                <img src="/Logo.svg" alt="" />
                <span className='font-semibold text-2xl'>Chef's kitchen.</span>
            </div>
            <div className='flex justify-center gap-6 font-normal mt-8'>
                <button className='w-1/2 flex justify-center  gap-1.5 border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100'>
                    <span>Sign In</span>
                    <img src="/google.svg" alt=""  width={24} height={24}/>
                </button>
                <button className='w-1/2 flex justify-center gap-1.5 border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100'>
                    <span>Sign In</span>
                    <img src="/github.svg" alt="" width={24} height={24}/>
                </button>
            </div>
            <div className='my-6'>
                <span className='flex gap-2 items-center before:inline-block before:w-1/2 before:content-[""] before:border-b before:border-gray-300 after:inline-block after:w-1/2 after:content-[""] after:border-b after:border-gray-300'>OR</span>
            </div>
            <form action="#" className='flex flex-col gap-6'>
                <input type="text" placeholder='Email' name='email' className='p-3 border border-gray-200 rounded-lg outline-0 focus:border-[#de6752]' />
                <input type="password" placeholder='Password' name='password' className='p-3 border border-gray-200 rounded-lg outline-0 focus:border-[#de6752]' />
                <input type="submit" value='Sign In' className='text-white bg-[#de6752] p-3 border border-[#de6752] rounded-lg hover:bg-transparent hover:text-[#de6752]' />
            </form>
            <div className='flex flex-col items-center gap-2 mt-8'>
                <button className='cursor-pointer capitalize hover:text-[#de6752] hover:underline'>
                    <span>forgot password?</span>
                </button>
                <span>
                    Not a member yet? <button onClick={()=> onSwitchType ('signUp')} className='text-[#de6752] hover:underline'>Sign Up</button>
                </span>
            </div>
            
        </div>
    )
    
}

const SignUpForm= ({onSwitchType}) => {
    return (
        <div className="h-full bg-white p-6 rounded-xl font-['Poppins']">
            <div className="flex gap-2 items-center justify-center cursor-default">
                <img src="/Logo.svg" alt="" />
                <span className='font-semibold text-2xl'>Chef's kitchen.</span>
            </div>
            <div className='flex justify-center gap-6 font-normal mt-8'>
                <button className='w-1/2 flex justify-center  gap-1.5 border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100'>
                    <span>Sign Up</span>
                    <img src="/google.svg" alt=""  width={24} height={24}/>
                </button>
                <button className='w-1/2 flex justify-center gap-1.5 border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100'>
                    <span>Sign Up</span>
                    <img src="/github.svg" alt="" width={24} height={24}/>
                </button>
            </div>
            <div className='my-6'>
                <span className='flex gap-2 items-center before:inline-block before:w-1/2 before:content-[""] before:border-b before:border-gray-300 after:inline-block after:w-1/2 after:content-[""] after:border-b after:border-gray-300'>OR</span>
            </div>
            <form action="#" className='flex flex-col gap-6'>
                <input type="text" placeholder='Name' name='name' className='p-3 border border-gray-200 rounded-lg outline-0 focus:border-[#de6752]' />
                <input type="text" placeholder='Email' name='email' className='p-3 border border-gray-200 rounded-lg outline-0 focus:border-[#de6752]' />
                <input type="password" placeholder='Password' name='password' className='p-3 border border-gray-200 rounded-lg outline-0 focus:border-[#de6752]' />
                <input type="submit" value='Sign In' className='text-white bg-[#de6752] p-3 border border-[#de6752] rounded-lg hover:bg-transparent hover:text-[#de6752]' />
            </form>
            <div className='flex flex-col items-center gap-4 mt-8'>
                <span className='text-center'>By creating an account you are agree with our <button className='text-[#de6752] hover:underline'>Privacy</button> and <button className='text-[#de6752] hover:underline'>Policy</button></span>
                <span>
                Already have an account? <button onClick={()=> onSwitchType ('signIn')} className='text-[#de6752] hover:underline'>Sign In</button>
                </span>
            </div>
            
        </div>
    )
}

const Menu= ()=> {
    return (
        <div className="bg-white rounded-xl font-['Poppins'] px-10 py-6">
            <div className='flex justify-center my-4'>
                <span className='text-xl font-semibold'>Full Menu</span>
            </div>
            <div className='h-70 overflow-y-scroll'>
            <table >
                
                <thead className='border border-gray-300 bg-gray-300'>
                    <th className='p-2 text-left'>Dish</th>
                    <th className='text-left'>Description</th>
                    <th className='text-left ml-8'>Price</th>
                </thead>
                <tbody className='border-b border-gray-500'>
                    <td>Grilled Salmon</td>
                    <td className='p-2'>Served with lemon butter sauce and grilled vegetables.</td>
                    <td>$18.99</td>
                </tbody>
                <tbody className='border-b border-gray-500'>
                    <td>GCaesar Salad</td>
                    <td className='p-2'>Crisp romaine with parmesan, croutons, and Caesar dressing.</td>
                    <td>$9.99</td>
                </tbody>
                <tbody className='border-b border-gray-500'>
                    <td>Margherita Pizza</td>
                    <td className='p-2'>Classic pizza with tomato, mozzarella, and fresh basil.</td>
                    <td>$13.49</td>
                </tbody>
                <tbody className='border-b border-gray-500'>
                    <td>Tomato Basil Soup</td>
                    <td className='p-2'>Creamy tomato soup with a hint of garlic and fresh basil.</td>
                    <td>$6.99</td>
                </tbody>
                <tbody className='border-b border-gray-500'>
                    <td>Chocolate Lava Cake</td>
                    <td className='p-2'>Warm chocolate cake with a molten center served with vanilla ice cream.</td>
                    <td>$7.99</td>
                </tbody>
                <tbody className='border-b border-gray-500'>
                    <td>Spaghetti Carbonara</td>
                    <td className='p-2'>Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.</td>
                    <td>$15.25</td>
                </tbody>
            </table>
            </div>   
        </div>    
    )
}

const Modal = ({type, onClose, onSwitchType}) => {
    useEffect( ()=> {
        document.body.classList.add('no-scroll')
        return () => {
            document.body.classList.remove('no-scroll')
        }
    } ,[])
    let ContentComponent
    if (type=== 'signIn') {
        ContentComponent= SignInForm
    } else if (type=== 'signUp') {
        ContentComponent= SignUpForm
    } else if (type=== 'menu') {
        ContentComponent= Menu
    } else {
        return null
    }
    return (
        <div className="fixed inset-0  z-100 flex items-center justify-center  bg-[rgba(0,0,0,0.6)]"
        onClick={onclose}>
            <div 
                className="max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()} // 🛑 EMPÊCHE le clic de fermer le modal
            >
                 <button 
                    onClick={onClose} 
                    className="absolute top-0.5 right-4 cursor-pointer text-black text-3xl font-light p-1 hover:text-[#de6752]"
                >
                    &times; {/* Symbole "x" */}
                </button>
                
                {/* Affichage du contenu dynamique (le formulaire) */}
                <ContentComponent onSwitchType={onSwitchType}/>
            </div>

        </div>    
    )
}
export default Modal