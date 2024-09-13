
"use client"
import Image from "next/image";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpenNew, setIsOpenNew] = useState(false)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
    {/* hero section  */}
    <div className="relative overflow-hidden md:h-dvh md:min-h-[600px]  w-full select-none ">
      <Swiper 
      className="mySwiper1  h-full [&_.swiper-pagination]:!w-auto [&_.swiper-pagination]:flex [&_.swiper-pagination]:lg:px-16 [&_.swiper-pagination]:px-6 [&_.swiper-pagination]:sm:pb-10 [&_.swiper-pagination]:pb-7 [&_.swiper-pagination-bullet]:flex [&_.swiper-pagination-bullet]:items-center [&_.swiper-pagination-bullet]:justify-center  [&_.swiper-pagination-bullet]:text-sm [&_.swiper-pagination-bullet]:text-white/80 [&_.swiper-pagination-bullet-active]:text-white [&_.swiper-pagination-bullet]:size-6 [&_.swiper-pagination-bullet]:p-1  [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:border-2 [&_.swiper-pagination-bullet-active]:border-amber-500  [&_.swiper-pagination-bullet]:bg-transparent [&_.swiper-pagination-bullet]:opacity-100  [&_.swiper-button-prev]:absolute [&_.swiper-button-prev]:bottom-9 [&_.swiper-button-prev]:left-[auto] [&_.swiper-button-prev]:lg:right-32 [&_.swiper-button-prev]:right-24 [&_.swiper-button-prev]:top-[auto]
      [&_.swiper-button-next]:absolute [&_.swiper-button-next]:bottom-9 [&_.swiper-button-next]:left-[auto] [&_.swiper-button-next]:lg:right-20 [&_.swiper-button-next]:right-10  [&_.swiper-button-next]:top-[auto] [&_.swiper-button-next:after]:size-8 [&_.swiper-button-next:after]:text-lg [&_.swiper-button-next:after]:bg-white [&_.swiper-button-next:after]:flex [&_.swiper-button-next:after]:items-center [&_.swiper-button-next:after]:justify-center [&_.swiper-button-next:after]:rounded-full [&_.swiper-button-next:after]:text-slate-900 [&_.swiper-button-next:after]:font-bold [&_.swiper-button-next:after]:flex-shrink-0 [&_.swiper-button-prev:after]:size-8 [&_.swiper-button-prev:after]:text-lg [&_.swiper-button-prev:after]:bg-white [&_.swiper-button-prev:after]:flex [&_.swiper-button-prev:after]:items-center [&_.swiper-button-prev:after]:justify-center [&_.swiper-button-prev:after]:rounded-full [&_.swiper-button-prev:after]:text-slate-900 [&_.swiper-button-prev:after]:font-bold [&_.swiper-button-prev:after]:flex-shrink-0 [&_.swiper-button-prev]:max-sm:hidden [&_.swiper-button-next]:max-sm:hidden
      "
      pagination={pagination}
      loop={true}
      Pagination
      modules={[Pagination, Navigation]}
      navigation={true}

      >
      <SwiperSlide className="relative h-full group">
     <div className="absolute inset-0 h-full w-full after:absolute after:bg-black/50 after:inset-0 after:size-full after:z-10">
       <Image src="/img/slider-1.jpg" height={1000} width={1000} alt="hero 1" className="size-full object-cover"/>
     </div>
 

     <div className="mx-auto max-w-7xl lg:px-8 px-6 relative z-50 h-full">
     <div className="relative z-10 flex items-center h-full max-md:py-24 pt-10">
       <div className="text-5xl lg:text-[120px] sm:text-[80px] font-thin text-white/10 absolute inset-0 lg:top-36 sm:top-40 top-20 lg:-left-14 -left-5  [font-family:'Caveat'] group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:0s]">
         Wedding Photography!
       </div>
       <div className="text-white relative z-20">
         <div className="text-lg  font-light uppercase tracking-wide mb-4 group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.3s]">
           Welcome to Wedding Photography!
         </div>
         <div className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.6s]">
           Memories Made Beautiful:
           <br className="md:block !hidden" />
           Your Unforgettable Wedding Day
         </div>
         <button className="flex justify-between text-white sm:text-lg text-sm uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8 group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.9s]">
           <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
         </button>
       </div>
     </div>
     </div>
   </SwiperSlide>
   <SwiperSlide className="relative h-full group">
     <div className="absolute inset-0 h-full w-full after:absolute after:bg-black/50 after:inset-0 after:size-full after:z-10">
       <Image src="/img/slider-2.webp" height={1000} width={1000} alt="hero 1" className="size-full object-cover"/>
     </div>
 

     <div className="mx-auto max-w-7xl lg:px-8 px-6 relative z-50 h-full">
     <div className="relative z-10 flex items-center h-full max-md:py-24 pt-10">
       <div className="text-5xl lg:text-[120px] sm:text-[80px] font-thin text-white/10 absolute inset-0 lg:top-36 sm:top-40 top-20 lg:-left-14 -left-5  [font-family:'Caveat'] group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:0s]">
         Wedding Photography!
       </div>
       <div className="text-white relative z-20">
         <div className="text-lg  font-light uppercase tracking-wide mb-4 group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.3s]">
           Welcome to Wedding Photography!
         </div>
         <div className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.6s]">
           
         Relive Your Unforgettable Wedding 								
           <br className="md:block !hidden" />
           Day through Captivating Images			
         </div>
         <button className="flex justify-between text-white sm:text-lg text-sm uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8 group-[.swiper-slide-active]:animate-fade-in-up opacity-0 group-[.swiper-slide-active]:[animation-delay:.9s]">
           <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
         </button>
       </div>
     </div>
     </div>
   </SwiperSlide>
      </Swiper>
    
       

    </div>
    {/* hero section end  */}

    {/* 2nd section  */}
    <section className="lg:py-20 py-12  overflow-hidden ">
    <div className="w-full lg:text-left relative z-[1] overflow-hidden md:gap-10 gap-8 flex flex-col">
        <div className="w-max flex group/marquee gap-3 *:flex *:items-center *:gap-3 *:duration-700 *:[animation-duration:50s] *:animate-marquee-h lg:*:*:w-[1700px] ">
        <div className="group-hover/marquee:[animationplay-state:paused]">

        <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>

                </div>

        <div className="group-hover/marquee:[animationplay-state:paused]">
          <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
            <div className="text-[#f3f4f6] text-[150px] sm:text-[190px] inline-block font-bold uppercase leading-[150px] ">
            CandidShutters
            </div>
        </div>
        </div>
    </div>
  
    <div className="mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="col-auto">
        <div className="size-full">
          <div className="-rotate-6 relative z-10 sm:ps-4 size-full">
            <Image width={500} height={500} className="object-cover size-full" src="/img/2nd.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="col-auto">
        <div className="size-full">
          <div className="text-[#ec9a96] text-[45px] sm:text-[70px] leading-[100%] font-normal font-cursive relative z-10 md:-ms-28 -mt-9">
            CandidShutters</div>
          <div className="text-[#686e78] text-lg sm:text-2xl font-workSans text-pretty pb-4">
          Artistic Story Telling Celebrating YOU!
          </div>
          <div className="font-workSans text-pretty max-sm:text-sm">
            Welcome to CandidShutters, where we infuse magic into your wedding memories turning them into timeless tales of love and companionship.
          </div>
          <div className="font-workSans text-pretty max-sm:text-sm py-4">
            We are an award-winning premium wedding photography and films brand, known for our artistic, professional and customer centric approach.
          </div>
          <div className="font-workSans text-pretty max-sm:text-sm">
            We believe in and exist to showcase the most beautiful and heartfelt stories of your life in their true magnificence.
          </div>
        </div>
      </div>
      </div>
    </div>
</section>

{/* end  */}

{/* 3rd section  */}
<section className=" py-20 h-dvh relative before:absolute before:inset-0 before:bg-slate-900 before:bg-top before:h-[80%]">
    <div className="h-[calc(100vh-50px)] relative   max-w-7xl mx-6 lg:mx-8  
    [&_.hoverTarget1]:[&:has(.hover1:hover)]:opacity-100  [&_.hoverTarget1]:[&:has(.hover1:hover)]:duration-300   [&_.hoverTarget1]:[&:has(.hover1:hover)]:transition-all   [&_.hoverTarget1]:[&:has(.hover1:hover)]:ease-in-out
    [&_.hoverTarget2]:[&:has(.hover2:hover)]:opacity-100  [&_.hoverTarget2]:[&:has(.hover2:hover)]:duration-300   [&_.hoverTarget2]:[&:has(.hover2:hover)]:transition-all   [&_.hoverTarget2]:[&:has(.hover2:hover)]:ease-in-out
    [&_.hoverTarget3]:[&:has(.hover3:hover)]:opacity-100  [&_.hoverTarget3]:[&:has(.hover3:hover)]:duration-300   [&_.hoverTarget3]:[&:has(.hover3:hover)]:transition-all   [&_.hoverTarget3]:[&:has(.hover3:hover)]:ease-in-out
    [&_.hoverTarget4]:[&:has(.hover4:hover)]:opacity-100  [&_.hoverTarget4]:[&:has(.hover4:hover)]:duration-300   [&_.hoverTarget4]:[&:has(.hover4:hover)]:transition-all   [&_.hoverTarget4]:[&:has(.hover4:hover)]:ease-in-out">

       <div className="opacity-100 bg-cover duration-500 ease-in-out transition-all hoverTarget1 inset-0 absolute bg-center bg-[url(https://templatekit.jegtheme.com/hibride/wp-content/uploads/sites/205/2021/11/bridesmaids-helping-bride-put-on-lace-wedding-dress-e1636695128877.jpg)]"></div>
       <div className="opacity-0 bg-cover  duration-500 ease-in-out transition-all hoverTarget2 inset-0 absolute bg-center bg-[url(https://templatekit.jegtheme.com/hibride/wp-content/uploads/sites/205/2021/11/wedding-couple-e1636695172118.jpg)]"></div>
       <div className="opacity-0 bg-cover  duration-500 ease-in-out transition-all hoverTarget3 inset-0 absolute bg-center bg-[url(https://templatekit.jegtheme.com/hibride/wp-content/uploads/sites/205/2021/11/beatuful-wedding-rings.jpg)]"></div>
       <div className="opacity-0 bg-cover  duration-500 ease-in-out transition-all hoverTarget4 inset-0 absolute bg-center bg-[url(https://templatekit.jegtheme.com/hibride/wp-content/uploads/sites/205/2021/11/handsome-elegant-young-fashion-man-in-coat-tuxedo-classical-costume-suit.jpg)]"></div>
       
       <div className="size-full relative z-10">
        <div className="grid grid-cols-2  md:grid-cols-4 h-full bg-black/10">
          <div className="col-auto hover1 h-full group">
           <div className="size-full">
            <div className="text-2xl text-white z-20 pt-10 pb-8 text-center relative before:absolute before:-z-10 before:inset-0 before:bg-slate-900 before:h-0 group-hover:before:h-full before:transition-all before:duration-300 before:ease-in-out">
              Casual Suit
            </div>
           </div>
          </div>
          <div className="col-auto hover2 h-full group">
           <div className="size-full border-l border-solid border-l-gray-50/30">
            <div className="text-2xl text-white z-20 pt-10 pb-8 text-center relative before:absolute before:-z-10 before:inset-0 before:bg-slate-900 before:h-0 group-hover:before:h-full before:transition-all before:duration-300 before:ease-in-out">
             Grooms Suit
            </div>
           </div>
          </div>
          <div className="col-auto hover3 h-full group">
           <div className="size-full border-l border-solid max-md:border-t max-md:border-t-gray-50/30 border-l-gray-50/30">
            <div className="text-2xl text-white z-20 pt-10 pb-8 text-center relative before:absolute before:-z-10 before:inset-0 before:bg-slate-900 before:h-0 group-hover:before:h-full before:transition-all before:duration-300 before:ease-in-out">
              Basic Suit
            </div>
           </div>
          </div>
          <div className="col-auto hover4 h-full group">
           <div className="size-full border-l border-solid max-md:border-t max-md:border-t-gray-50/30 border-l-gray-50/30">
            <div className="text-2xl text-white z-20 pt-10 pb-8 text-center relative before:absolute before:-z-10 before:inset-0 before:bg-slate-900 before:h-0 group-hover:before:h-full before:transition-all before:duration-300 before:ease-in-out">
              Business Suit
            </div>
           </div>
          </div>
        </div>
        </div>
    </div>
</section>
{/* end  */}


{/* counter  */}

<div className="mx-auto max-w-7xl px-6 lg:px-8 w-full lg:py-20 py-10">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-y-4 md:gap-4 items-center sm:mt-14 mt-5">
                <div class="col-span-3">
                    <div class="py-6">
                        <div class="text-[#ec9a96] text-[45px] sm:text-[70px] leading-[100%] font-normal font-cursive pb-8">
                            Nurtured to perfection
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-10 md:gap-y-20">
                            <div class="">
                                <div class="font-semibold text-7xl text-gray-300">
                                    75+
                                </div>
                                <div class="text-2xl pt-6 font-bold uppercase text-black/80">
                                    Cities travelled
                                </div>
                                <div class="text-base text-black/60 pt-2">
                                    Spread across the globe
                                </div>
                            </div>
                            <div class="">
                                <div class="font-semibold text-7xl text-gray-300">
                                    1000+
                                </div>
                                <div class="text-2xl pt-6 font-bold uppercase text-black/80">
                                    Happy Couples
                                </div>
                                <div class="text-base text-black/60 pt-2">
                                    Hailing from varied cultures, regions and religions.
                                </div>
                            </div>
                            <div class="">
                                <div class="font-semibold text-7xl text-gray-300">
                                    1 M+
                                </div>
                                <div class="text-2xl pt-6 font-bold uppercase text-black/80">
                                    Photos delivered
                                </div>
                                <div class="text-base text-black/60 pt-2">
                                    Edited pictures of life defining moments.
                                </div>
                            </div>
                            <div class="">
                                <div class="font-semibold text-7xl text-gray-300">
                                    850+
                                </div>
                                <div class="text-2xl pt-6 font-bold uppercase text-black/80">
                                    Videos produced
                                </div>
                                <div class="text-base text-black/60 pt-2">
                                    Edited videos that are a real tribute to love and companionship.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="aspect-[1/1.2] lg:aspect-[1/1.4]">
                        <Image class="size-full" width={500} height={500} src="https://www.candidshutters.com/maintenance/wp-content/uploads/2022/10/best-wedding-photographers-india-home.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>

{/* coun  */}


    {/* <!-- video section  --> */}
        <section>
            <div
                className="mx-auto max-w-7xl px-6 lg:px-8 w-full group overflow-hidden sm:h-dvh md:h-auto sm:py-10  flex justify-center">
                <div className="md:flex justify-center w-full">
                    <div
                        className="w-full relative">
                        <div
                            className="group border-8 border-white items-center rounded-3xl inline-flex w-full aspect-[2/1] :w-full :h-full *:object-cover overflow-hidden relative before:absolute before:size-full before:-z-10 before:rotate-180 before:shadow-2xl">
                            <Image width={1920} height={1000} className="group-hover:scale-105 duration-500 "
                                src="/img/video.jpg" alt="" />
                            <span className="absolute cursor-pointer inset-0 z-30 flex items-center justify-center *:size-8 sm:*:size-12 md:*:size-20 *:rounded-full last:*:bg-white *:text-black last:*:shadow-lg last:*:shadow-black last:*:relative last:*:z-30 first:*:z-20 first:*:absolute first:*:inset-0 first:*:m-auto first:*:animate-ping first:*:[animation-duration:4s;]">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                            </span>
                        </div>
                        <div className="absolute w-1/4 lg:w-1/5 top-0 right-0 sm:-right-14 animate-bounce [animation-duration:7s;] aspect-square">
                            <Image width={1920} height={1000} src="/img/video-shape.webp" alt="" className="size-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- video section end  --> */}

        {/* <!-- wedding section --> */}
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 overflow-hidden">

        <div className="grid md:grid-cols-2  items-center gap-10">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl font-semibold text-slate-600">
                    Ashna Makhijani + Aashay Shah
                </h2>
                <p className="text-base mt-4 text-slate-600">
                    A sweet tale of love, from fighting as colleagues to falling in love. Their love story is no less of a Bollywood tale. Everything about this wedding looked like it was taken out of a movie.
                </p>
                <button className="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-950'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
              </button>
            </div>
            <div className="w-full order-1 md:order-2 aspect-[1/.6] border-2 border-gray-200 shadow-2xl rounded-lg overflow overflow-hidden shadow-black/50 relative after:rotate-180 after:-z-10 after:absolute after:w-full after:h-1/2 after:shadow-xl after:bg-white after:inset-0  :size-full :object-cover">
                <Image width={700} height={550} src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?t=st=1726137195~exp=1726140795~hmac=b963ce434dd4884a83d8356d14cbd495663f3cb89a09e65216b8090eee470e86&w=740" alt=""/>
            </div>

        </div>
        <div className="grid md:grid-cols-2  mt-10 items-center gap-10">
            <div className="order-2">
                <h2 className="text-3xl font-semibold text-slate-600">
                    Ashna Makhijani + Aashay Shah
                </h2>
                <p className="text-base mt-4 text-slate-600">
                    A sweet tale of love, from fighting as colleagues to falling in love. Their love story is no less of a Bollywood tale. Everything about this wedding looked like it was taken out of a movie.
                </p>
                <button className="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-950'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
              </button>
            </div>
            <div className="w-full order-1 aspect-[1/.6] border-2 border-gray-200 shadow-2xl rounded-lg overflow overflow-hidden shadow-black/50 relative after:rotate-180 after:-z-10 after:absolute after:w-full after:h-1/2 after:shadow-xl after:bg-white after:inset-0  :size-full :object-cover">
            <Image width={700} height={550} src="https://img.freepik.com/premium-photo/these-pieces-jewelry-symbolize-our-forever-cropped-shot-unrecognizable-couple-holding-their-wedding-rings-together-their-wedding-day_590464-43616.jpg?w=740" alt=""/>
            </div>
        </div>
      </div> */}
     {/* <!-- wedding section --> */}

     <div className="w-full  py-10">
      <div className="max-w-7xl px-6 lg:px-8 mx-auto">
          <div className=" grid md:grid-cols-2 md:gap-4 gap-2 items-center relative">
                <div class=" bg-white p-6 *:size-full z-50 *:object-cover h-full shadow-2xl relative before:absolute before:w-full  before:bg-white before:h-full before:inset-0 before:shadow-2xl  before:rotate-180 before:-z-10">
                    <Image width={300} height={500}  src="/img/wedding-1.jpeg" alt="" />
                    
                </div>
                <div class=" bg-white pt-40 lg:pt-10 h-full z-50 p-6 ps-10 flex justify-center shadow-2xl flex-col relative before:absolute before:w-full before:bg-white before:h-full before:inset-0 before:shadow-2xl  before:rotate-180 before:-z-10">
                  <p class="[font-family:'Caveat']  font-semibold sm:text-6xl text-4xl text-slate-700">How we meet</p>
                  <p class="text-lg font-normal mt-4 text-slate-500">
                  A sweet tale of love, from fighting as colleagues to falling in love. Their love story is no less of a Bollywood tale. Everything about this wedding looked like it was taken out of a movie.
                  </p>
                  <button className="flex  text-slate-500 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                    <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-500'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
                  </button>
                  <div class="size-36 :size-full :object-cover">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/flower.svg" alt="" />
                  </div>
                  <div class="absolute w-32 h-max top-0 right-6 bg-amber-50 rotate-12 shadow-2xl motion-safe:animate-spin duration-1000">
                    <div class="bg-amber-100 p-3"></div>
                    <div class="p-2 font-semibold [font-family:Yesteryear] text-slate-700 text-3xl text-center">
                        <p>15 July 2024</p>
                    </div>
                </div>
                <div class="absolute size-16 *:size-full -top-6 right-14">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/pin.svg" alt="" />
                </div>
            </div>
            <div class="absolute  h-full py-6 w-10 bg- z-[999] opacity-0 md:opacity-100 left-1/2 -translate-x-1/2">
              <div class="h-full overflow-hidden">
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                <div class="py-2 size-10 *:size-full">
                    <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                </div>
                
                
              </div>
            </div>
     </div>
         <div className="sm:pt-20 pt-16">
            <div className=" grid md:grid-cols-2 md:gap-4 gap-2 items-center relative">
                 
                    <div className=" bg-white pt-40 lg:pt-10 h-full z-50 p-6 ps-10 flex justify-center shadow-2xl flex-col relative before:absolute before:w-full before:bg-white before:h-full before:inset-0 before:shadow-2xl  before:rotate-180 before:-z-10">
                      <p class="[font-family:'Caveat']  font-semibold sm:text-6xl text-4xl text-slate-700">How we meet</p>
                      <p class="text-lg font-normal mt-4 text-slate-500">
                      A sweet tale of love, from fighting as colleagues to falling in love. Their love story is no less of a Bollywood tale. Everything about this wedding looked like it was taken out of a movie.
                      </p>
                      <button className="flex  text-slate-500 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                        <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-500'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> explore my portfolio</span>
                      </button>
                      <div class="size-36 :size-full :object-cover">
                        <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/flower.svg" alt="" />
                      </div>
                      <div class="absolute w-32 h-max top-0 right-6 bg-amber-50 rotate-12 shadow-2xl motion-safe:animate-spin duration-1000">
                        <div class="bg-amber-100 p-3"></div>
                        <div class="p-2 font-semibold [font-family:Yesteryear] text-slate-700 text-3xl text-center">
                            <p>15 July 2024</p>
                        </div>
                    </div>
                    <div class="absolute size-16 *:size-full -top-6 right-14">
                        <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/pin.svg" alt="" />
                    </div>
                </div>
                    <div className="absolute  h-full py-6 w-10 bg- z-[999] opacity-0 md:opacity-100 left-1/2 -translate-x-1/2">
                      <div class="h-full overflow-hidden">
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        <div class="py-2 size-10 *:size-full">
                            <Image width={300} height={500}  src="https://wpolive.com/habibi/wp-content/uploads/2023/09/ring.svg" alt="" />
                        </div>
                        
                        
                      </div>
                  </div>
                    <div className=" bg-white p-6 *:size-full z-50 *:object-cover h-full shadow-2xl relative before:absolute before:w-full  before:bg-white before:h-full before:inset-0 before:shadow-2xl  before:rotate-180 before:-z-10">
                        <Image width={300} height={500}  src="/img/wedding-2.jpeg" alt="" />
                        
                    </div>
            </div>

         </div>
     </div>
     </div>



{/* cat  */}
<section>
<div className="categories-button select-none z-[99999999999999999] cursor-pointer fixed right-0 top-1/2 -translate-y-1/2 sm:w-16 w-12 h-[200px] whitespace-nowrap bg-black text-white" onClick={()=> setIsOpenNew(!isOpenNew)}>
    <span className="open absolute top-1/2 left-1/2 text-[14px] font-bold tracking-[0.1em] uppercase transform -rotate-90 -translate-x-1/2 -translate-y-1/2  after:w-4 after:h-[1px] after:inline-block after:align-middle after:mx-2.5 after:absolute after:bg-white after:top-1/2  before:w-4 before:h-[1px] before:inline-block before:align-middle before:mx-2.5 before:absolute before:bg-white before:bottom-1/2 before:-left-9">
        {isOpenNew ? 'close' : 'Categories'}
    </span>
</div>


<div className={` h-full fixed inset-0 size-full  md:hiden duration-300 z-[99999] ${isOpenNew ? "translate-x-0" : "translate-x-full" }`}>
      <div className={`absolute inset-0 bg-gray-800/50 px-4 h-full size-full `}  onClick={()=> setIsOpenNew(!isOpenNew)}></div>
      <div className='flex flex-col overflow-hidden w-full relative z-10 ms-auto'>

        <div className='relative flex w-full  flex-auto overflow-y-auto flex-col -z-20 bg-white'>
        <Swiper 
        navigation={true}
        loop={true} 
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={0} 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 0 },
          640: { slidesPerView: 2.3, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        className="mySwiper h-screen w-full [&_.swiper-pagination]:z-50 [&_.swiper-button-prev:after]:size-8 [&_.swiper-button-prev:after]:text-lg [&_.swiper-button-prev:after]:bg-white [&_.swiper-button-prev:after]:flex [&_.swiper-button-prev:after]:items-center [&_.swiper-button-prev:after]:justify-center [&_.swiper-button-prev:after]:rounded-full [&_.swiper-button-prev:after]:text-slate-900 [&_.swiper-button-prev:after]:font-bold [&_.swiper-button-prev:after]:flex-shrink-0  [&_.swiper-button-next]:left-[9px] [&_.swiper-button-next]:top-[57%]  [&_.swiper-button-next:after]:size-8 [&_.swiper-button-next:after]:text-lg [&_.swiper-button-next:after]:bg-white [&_.swiper-button-next:after]:flex [&_.swiper-button-next:after]:items-center [&_.swiper-button-next:after]:justify-center [&_.swiper-button-next:after]:rounded-full [&_.swiper-button-next:after]:text-slate-900 [&_.swiper-button-next:after]:font-bold [&_.swiper-button-next:after]:flex-shrink-0  ">
          <SwiperSlide className="h-full">            
            <div class="h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/15179843/pexels-photo-15179843/free-photo-of-bridal-makeup.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/28210866/pexels-photo-28210866/free-photo-of-a-couple-in-traditional-indian-attire-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>
                <Image width={500} height={1000} src="https://images.pexels.com/photos/21881566/pexels-photo-21881566/free-photo-of-bride-in-casual-pose-drinking-lemon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class="h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/15179843/pexels-photo-15179843/free-photo-of-bridal-makeup.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/28210866/pexels-photo-28210866/free-photo-of-a-couple-in-traditional-indian-attire-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">            
            <div class=" bg-red-900 h-full *:size- *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>
                <Image width={500} height={1000} src="https://images.pexels.com/photos/21881566/pexels-photo-21881566/free-photo-of-bride-in-casual-pose-drinking-lemon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full object-cover" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white md:text-4xl text-3xl font-semibold relative z-[999]">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
          </SwiperSlide>

        </Swiper>
    {/* <div class="overflow-hidden">
        <div class="grid-cols-4 grid">
            <div class="h-screen *:size-full *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white text-4xl font-semibold">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>
            <div class="h-screen *:size-full *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/15179843/pexels-photo-15179843/free-photo-of-bridal-makeup.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white text-4xl font-semibold">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>

            <div class="h-screen *:size-full *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/28210866/pexels-photo-28210866/free-photo-of-a-couple-in-traditional-indian-attire-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white text-4xl font-semibold">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>

            <div class="h-screen *:size-full *:object-cover group relative before:absolute before:inset-0 before:bg-black/30 before:hover:backdrop-blur-sm before:duration-300 ">
                <p class="absolute text-7xl inset-6 !size-full text-white opacity-0 group-hover:opacity-100 duration-300">+</p>

                <Image width={500} height={1000} src="https://images.pexels.com/photos/21881566/pexels-photo-21881566/free-photo-of-bride-in-casual-pose-drinking-lemon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div class="absolute !w-full !h-max p-4 left-0 bottom-6">
                 <p class="text-white text-4xl font-semibold">WEDDING PHOTOGRAPHY</p>
                </div>
            </div>


        </div>
    </div> */}
        </div>
      </div>
   Name </div>
</section>


{/* end  */}



{/* blog  */}

<div className="max-w-7xl mx-auto px-6 lg:px-8 sm:py-16 py-10">
<div className="text-5xl relative  text-balance md:w-1/2 w-full font-bold text-slate-800 pb-14">
  We are Top  Skilled <br /> at Everything
    <div className="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">Our Expertise</div>
</div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2   gap-8">
            <div className="w-full group/main aspect-[1/1.1] :hover:scale-105 :duration-500 overflow-hidden  *:size-full *:object-cover relative after:absolute after:size-full after:bg-black/40 after:inset-0 after:hover:backdrop-blur-sm after:duration-500	">
                <Image width={300} height={300} src="https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <div className=" p-2 bottom-6  overflow-hidden   absolute z-50 !h-max !w-[90%] left-1/2 -translate-x-1/2">

                   <div className="translate-y-28 group-hover/main:-translate-y-0 duration-300">
                    <h2 className="text-2xl w-2/3 font-semibold text-white">
                        WEDDING PHOTOGRAPHY
                    </h2>
                    <p className="text-white font-medium text-sm mt-1">#PHOTOGRAPHY</p>
                    <p className="text-xs text-white mt-2">Our pet shop carry a wide variety of supplies, from food and toys to bedding and cages</p>
                    <button className="flex justify-between text-white uppercase text-sm items-center overflow-hidden group/btn gap-4 z-20 relative mt-5">
                    <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> Learn More</span>
                  </button>
                   </div>
                </div>
            </div>
            <div className="w-full group/main aspect-[1/1.1] *:hover:scale-105 *:duration-500 overflow-hidden  *:size-full *:object-cover relative after:absolute after:size-full after:bg-black/40 after:inset-0 after:hover:backdrop-blur-sm after:duration-500	">
                <Image width={300} height={300} src="https://plus.unsplash.com/premium_photo-1682090811844-e0a89fb2c780?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
                <div className=" p-2 bottom-6  overflow-hidden   absolute z-50 !h-max !w-[90%] left-1/2 -translate-x-1/2">

                   <div className="translate-y-28 group-hover/main:-translate-y-0 duration-300">
                    <h2 className="text-2xl w-2/3 font-semibold text-white">
                        WEDDING PHOTOGRAPHY
                    </h2>
                    <p className="text-white font-medium text-sm mt-1">#PHOTOGRAPHY</p>
                    <p className="text-xs text-white mt-2">Our pet shop carry a wide variety of supplies, from food and toys to bedding and cages</p>
                    <button className="flex justify-between text-white uppercase text-sm items-center overflow-hidden group/btn gap-4 z-20 relative mt-5">
                    <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> Learn More</span>
                  </button>
                   </div>
                </div>
            </div>
            <div className="w-full group/main aspect-[1/1.1] :hover:scale-105 :duration-500 overflow-hidden  *:size-full *:object-cover relative after:absolute after:size-full after:bg-black/40 after:inset-0 after:hover:backdrop-blur-sm after:duration-500	">
                <Image width={300} height={300} src="https://plus.unsplash.com/premium_photo-1724762184456-002573e89988?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className=" p-2 bottom-6  overflow-hidden   absolute z-50 !h-max !w-[90%] left-1/2 -translate-x-1/2">

                   <div className="translate-y-28 group-hover/main:-translate-y-0 duration-300">
                    <h2 className="text-2xl w-2/3 font-semibold text-white">
                        WEDDING PHOTOGRAPHY
                    </h2>
                    <p className="text-white font-medium text-sm mt-1">#PHOTOGRAPHY</p>
                    <p className="text-xs text-white mt-2">Our pet shop carry a wide variety of supplies, from food and toys to bedding and cages</p>
                    <button className="flex justify-between text-white uppercase text-sm items-center overflow-hidden group/btn gap-4 z-20 relative mt-5">
                    <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-white'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> Learn More</span>
                  </button>
                   </div>
                </div>
            </div>

        </div>

       </div>

{/* end  */}






    </>



  );
}
