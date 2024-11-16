import { useState } from 'react'
import banner from './assets/Frame.png'
import './App.css'
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";

function App() {
  const [login, setLogin] = useState(true)
  const [user,setUser] = useState("Brand");

  return (
    <div className='relative h-screen w-full flex font-bold'>
        <div className='absolute md:relative md:block flex-[3]'>
          <img src={banner} alt="banner" className='h-screen w-full bg-cover'/>
          <div className='hidden md:block absolute font-poppinsBold top-[43%] right-[5%]'>
            <h1 className='md:text-[40px] lg:text-5xl text-white'>BUZZVERSE</h1>
            <p className='md:text-[17px] lg:md:text-xl font-poppinsBold font-medium text-white'>The very first to connect talents to brands.</p>
          </div>
        </div>

        <div className=' z-20 flex-[2] flex flex-col justify-center items-center'>
          <div>
            <h2 className='text-white md:text-black font-poppinsBold font-bold text-[19px] md:text-[22px] lg:text-2xl'>{login?"Hello, Again!":"Hello!"}</h2>
            <p className='font text-white lg:text-[17px] md:text-[16px] text-[14px] '>{login?"Welcome Back":"Sign Up to Get Started"}</p>
          </div>

          <div className='mt-[24px] md:mt-[30px]'>
            {!login && 
              <div className='mb-[10px] md:mb-[14px] relative w-[260px]'>
                <div className='absolute top-[10px] left-[18px]'>
                <svg width="24" className='lg:w-[24px] md:w-[22px] w-[20px]' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.3">
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z" fill="#333333"/>
                  </g>
                </svg>

                </div>
                <input 
                type="text" 
                name="fullname" 
                className='py-2 pl-12 pr-4 w-full text-[14px] md:text-[15px] lg:text-[16px] rounded-3xl font-normal 
                border border-solid borderColor'
                placeholder='Full Name' />
              </div>
            }
            <div className='relative w-[260px]'>
              <div className='absolute top-[12px] lg:top-[14px] left-[18px]'>
              <svg width="" className='lg:w-[22px] md:w-[20px] w-[18px]' height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1.25L1.25 0.5H20.75L21.5 1.25V14.75L20.75 15.5H1.25L0.5 14.75V1.25ZM2 2.8025V14H20V2.804L11.465 9.35H10.55L2 2.8025ZM18.545 2H3.455L11 7.8035L18.545 2Z" fill="rgba(51, 51, 51, 0.5)"/>
              </svg>
              </div>
              <input 
              type="email" 
              name="email" 
              className='py-2 pl-12 pr-4 w-full text-[14px] md:text-[15px] lg:text-[16px] rounded-3xl font-normal 
              border border-solid borderColor'
              placeholder='Email Address' />
            </div>  

            <div className='relative w-[260px]'>  
              <div className='absolute top-[20px] md:top-[22px] lg:top-[22px] left-[22px]'>
                <svg width="" className='lg:w-[18px] md:w-[17px] w-[16px]' height="22" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 10C16 8.897 15.103 8 14 8H13V5C13 2.243 10.757 0 8 0C5.243 0 3 2.243 3 5V8H2C0.897 8 0 8.897 0 10V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V10ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5V5Z" fill="rgba(51, 51, 51, 0.5)"/>
                </svg>
              </div>
              <input 
              type="password" 
              name="password" 
              className='py-2 pl-12 pr-4 w-full mt-[11px] md:mt-[15px] rounded-3xl font-normal 
              border border-solid borderColor'
              placeholder='Password' />
            </div>
          </div>

                {login ? (
                      <div className=" font-poppinsBold mt-[16px] w-[260px]">
                        <button
                          className="py-2 w-full mt-[11px] md:mt-[15px] text-[14px] md:text-[15px] lg:text-[16px] text-white rounded-3xl font-normal border border-solid borderColor"
                          style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
                        >
                          Login
                        </button>
                        <p style={{ color: "rgba(51, 51, 51, 1)" }} className="flex justify-center cursor-pointer text-center font-normal text-[12px] md:text-[14px] lg:text-[16px] hover:opacity-45 mt-[5px] md:mt-[8px]">
                          Forgot Password
                        </p>
                      </div>
                    ) : (
                      <div className="w-[260px] gap-[16px] md:gap-[20px] mt-[15px] flex justify-between items-center">
                      <button
                        onClick={() => setUser('Brand')}
                        className="text-[16px] md:text-[15px] lg:text-[14px] py-[6px] md:py-2 flex-1 rounded-md text-center border-2"
                        style={
                          user === 'Brand'
                            ? { backgroundColor: "rgba(43, 43, 43, 1)", color: "white", borderColor: "rgba(43, 43, 43, 1)" }
                            : { backgroundColor: "transparent", borderColor: "rgba(238, 238, 238, 1)", color: "rgba(194, 194, 194, 1)", fontWeight: 'bolder' }
                        }
                      >
                        Brand
                      </button>
                      <button
                        onClick={() => setUser('Talent')}
                        className="text-[16px] md:text-[15px] lg:text-[14px] py-[6px] md:py-2 flex-1 rounded-md text-center border-2"
                        style={
                          user === 'Talent'
                            ? { backgroundColor: "rgba(43, 43, 43, 1)", color: "white", borderColor: "rgba(43, 43, 43, 1)" }
                            : { backgroundColor: "transparent", borderColor: "rgba(238, 238, 238, 1)", color: "rgba(194, 194, 194, 1)", fontWeight: 'bolder' }
                        }
                      >
                        Talent
                      </button>
                    </div>
                    
               )}


          <div className='font-poppinsBold w-[310] md:w-[300px] lg:w-[330px]'>
            {login?<p style={{color: "rgba(51, 51, 51, 1)"}} className='text-[13px] md:text-[15px] lg:text-[17px] mb-[10px] md:mb-[18px] text-center font-normal mt-[8px] md:mt-[12px]'>Don't have an account? <span onClick={()=>setLogin(prev=>!prev)} className=' cursor-pointer font-bold text-black hover:opacity-45'>Sign Up</span> here.</p>
              :<p style={{color: "rgba(51, 51, 51, 1)"}} className='text-[13px] md:text-[15px] lg:text-[17px] mb-[10px] md:mb-[18px] text-center font-normal mt-[10px] md:mt-[12px]'>Already have an account? <span onClick={()=>setLogin(prev=>!prev)} className=' cursor-pointer font-bold text-black hover:opacity-45'>Login</span> here.</p>}
              
              <button
                  className=' relative py-2 w-full mt-[10px] text-[16px] md:text-[18px] lg:text-xl text-white rounded-3xl font-medium hover:shadow-md
                  border border-solid borderColor' style={{backgroundColor:"rgba(24, 119, 242, 1)"}}>
                    <div className='absolute top-[10px] md:top-[11px] lg:top-[12px] left-5'>
                    <BsLinkedin size={20}/> 
                </div>
                    Continue with Linkedin
              </button>
              
              <button
                  className='relative py-2 w-full mt-[15px] text-[16px] md:text-[18px] lg:text-xl rounded-3xl font-medium
                  border border-solid borderColor hover:shadow-md' style={{color:" rgba(0, 0, 0, 0.54)"}}>
                <div className='absolute top-[8px] md:top-[9] lg:top-[10px] left-5'>
                <FcGoogle size={24}/> 
                </div>   
                Continue with Google
              </button>

          </div>

          <div>

          </div>

        </div>
    </div>
  )
}

export default App
