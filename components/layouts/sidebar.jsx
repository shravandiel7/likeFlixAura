import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <div className={` h-full fixed inset-0 size-full  md:hiden duration-300 z-[99999] ${isOpen ? "translate-x-0" : "translate-x-full" }`}>
      <div className={`absolute inset-0 bg-gray-800/50 px-4 h-full size-full `}  onClick={()=> setIsOpen(!isOpen)}></div>
      <div className='flex flex-col overflow-hidden h-full sm:w-80 relative z-10 ms-auto'>
        <div className='flex items-center justify-between p-3 bg-slate-950'>
          <Link href={'./'}>
            <Image src='/img/logo.png' alt="logp" width={100} height={100} className=' w-32'/>
          </Link>
          <div>
            <button className='text-white size-10 flex items-center justify-center' onClick={()=> setIsOpen(!isOpen)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
            </button>
          </div>
        </div>
        <div className='relative flex w-full p-3 flex-auto overflow-y-auto flex-col z-20 bg-white'>
          <ul>
            <li>
              <Link href={"/"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
                 HOME
              </Link>
            </li>
            <li>
              <Link href={"/about-us"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
              About Us
              </Link>
            </li>
            <li>
              <Link href={"/our-services"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
              Our Services
              </Link>
            </li>
            <li>
              <Link href={"/gallery"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
              Gallery
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
              Blog
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className='flex items-center gap-2 border-b group relative px-2 py-1.5 w-full text-slate-950/70 hover:text-slate-950 text-sm font-semibold'>
              Contact Us
              </Link>
            </li>
            <li>
            <button className="flex justify-between text-white items-center overflow-hidden group gap-4">
                <span className='group-hover:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover:-translate-x-7 duration-300'> Book a  Now</span>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
