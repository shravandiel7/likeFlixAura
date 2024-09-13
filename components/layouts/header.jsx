
"use client"
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`group/nav py-3 w-full z-[9999] ${
          scroll > 50 ? 'bg-slate-950 fixed animate-fixed-nav shadow-lg' : 'bg-transparent absolute top-0 w-full'
        }`}>
      <header className='mx-auto max-w-7xl lg:px-8 px-6'>
        <div className={`topHeader flex items-center justify-between ${scroll > 50 ? 'hidden' : ''}`}>
          <div className='sm:flex hidden'>
            <ul className='flex items-center gap-3'>
              <li>
                <Link href={'/'} className='size-5 text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='size-5 text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='size-5 text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='size-5 text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"></path></svg>
                </Link> 
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-center py-2'>
            <Link href={"/"}>
            
            <Image src='/img/logo1.png' priority alt="logp" width={100} height={100} className=' sm:size-16 size-12'/>
            </Link>
          </div>
          <div className='flex items-center '>
              <button className="md:flex hidden justify-between text-white items-center overflow-hidden group gap-4">
                <span className='group-hover:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover:-translate-x-7 duration-300'> Book a  Now</span>
              </button>
              <div className='flex items-center gap-3'>
                <button type='button' className="size-6 md:hidden text-white/80 flex items-center *:flex *:items-center *:justify-center *:size-full" onClick={()=> setIsOpen(!isOpen)} href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg></button>
            </div>
          </div>
        </div>
          
        <div className={`bootomheader pt-4 ${scroll > 50 ? 'flex items-center justify-between !pt-0' : ''}`}>
          <div className={`hidden items-center justify-center py-2 ${scroll > 50 ? '!block' : ''}`}>
            <Link href={"/"}>
            
            <Image src='/img/logo1.png' alt="logp" width={100} height={100} className={`${scroll > 50 ? 'size-12' : ''} `}/>
            </Link>
          </div>
          <div className='flex items-center justify-center gap-8'>
          <ul className="list-none md:flex hidden justify-center m-0 space-x-4">
            <li>
              <Link href={'./'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about-us'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
                About 
              </Link>
            </li>
            <li>
              <Link href={'/our-services'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href={'/gallery'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href={'blog'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
                Blog
              </Link>
            </li>
            <li>
              <Link href={'contact'} className={`text-white py-1 text-base font-medium relative after:absolute after:bg-white after:top-full  after:left-0 after:w-full after:h-[2px] after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-right hover:after:transform hover:after:scale-x-100 hover:after:origin-left `}>
              Contact
              </Link>
            </li>
          </ul>
    
            <div className={`hidden ${scroll > 50 ? 'max-md:block' : ''}`}>
                <button type='button' className="size-6  text-white/80 flex items-center *:flex *:items-center *:justify-center *:size-full" onClick={()=> setIsOpen(!isOpen)} href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg></button>
            </div>
          </div>
          
        </div>
    
      </header>
    </div>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Header;
