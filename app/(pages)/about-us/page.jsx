import Image from 'next/image'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div>
      {/* <!-- hero section start --> */}
        <div class="relative">
            <div
                class="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b from-slate-900/20 via-slate-900/30 to-slate-900">
                <Image width={1920} height={700}
                    src="https://shaadisquad.com/wp-content/uploads/2024/02/1.jpeg"
                    alt=""
                    class="h-full w-full object-cover overflow-hidden object-top" />
            </div>
            <div
                class="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
                <div class="w-full">
                    <div
                        class="text-5xl md:text-[100px] font-bold !leading-[130%] tracking-[2rem] md:tracking-[5rem] text-center uppercase">
                        ABOUT US
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- hero section ends --> */}

        <section class="py-10  lg:py-20 relative overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">

            <div class="grid grid-cols-12 items-center gap-y-10 lg:gap-8 group">
                <div data-aos="fade-right" data-aos-duration="1000" class="col-span-12 lg:col-span-6 ">
                <div class="size-full relative flex items-center justify-center group">
                    <div class=" h-full w-[70%]">
                    <Image width={500} height={500} class="aspect-[1/1]  object-cover rounded-3xl" src="/img/about-us.jpeg" alt="" />
                    </div>

                    <div class=" absolute -top-7  z-[3] w-[40%] right-0 sm:group-hover:right-[58%]  duration-300 ">
                    <Image width={500} height={500} class="aspect-[1/.8] pointer-events-none rounded-3xl object-cover" src="/img/about-us2.jpeg" alt="" />
                    </div>
                    <div class=" absolute -bottom-5 pointer-events-none z-[3] w-[40%] left-0 sm:group-hover:left-[58%]  duration-300 ">
                    <Image width={500} height={500} class="aspect-[1/.8] rounded-3xl object-top" src="/img/about-us3.webp" alt="" />
                    </div>
                </div>
                </div>
                <div data-aos="fade-left"  class="col-span-12 lg:col-span-6 ">
                <div class="size-full">
                    <div className="text-5xl relative  text-balance  w-full font-bold text-slate-800 pb-14">
                            welcome to wedding photography!
                        <div className="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">AboutUs</div>
                    </div>
                
                    <div data-aos="zoom-out-up"  class="text-base mt-4 text-slate-600 text-balance ">
                    FLIX
                    AURA is a Market Place for On-Demand Creative professionals Full-filling The Photography and Videography Needs Of everyone. We are specialized in Innovative Films & Commercials. Flixaura offers a huge list of categories to choose from Corporate Films, Hospitality, Advertisements, Real Estate, Personal Portfolio, Family, Food, Products, and Events Etc... Flixaura Always Works with Professional Personals Each Having Intensive skills In their Special Genre to Satisfy your Requirements Every time you Book US.
                    </div>
                </div>
                </div>

            </div>
            </div>
        </section>


        {/* <!-- vission mission section --> */}
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            <div class="grid md:grid-cols-2  items-center gap-10">
                <div class="order-2 md:order-1">
                <div className="text-5xl relative  text-balance  w-full font-bold text-slate-800 pb-14">
                VISION
                        <div className="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">OUR</div>
                    </div>
                    <h2 class="text-3xl font-semibold text-slate-600">
                        OUR VISION
                    </h2>
                    <p
                        class="text-base mt-4 text-slate-600 text-balance text-ellipsis line-clamp-4">
                        A wedding is such a special and intimate celebration; a
                        sweetly constructed dream brought to life. It is
                        something you will capture carefully in pictures, talk
                        and laugh about with your friends and family, reminisce
                        about with your children and look back on through the
                        years. We, at Weeding planner, are here to give you the
                        perfect wedding. An experience that will remain etched
                        in the minds of everyone who attends it. With a team
                        passionately dedicated to translating your wishes into
                        reality, we will use our creativity and experience to
                        craft you a wedding as unique as can be. So breathe,
                        relax. You’ve found us, we’re meant to be, your job is
                        done; we’ll take it from here. All you have to do is
                        soak in every brilliant moment.
                    </p>
                    <button className="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-950'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> Explore
                Wedding Films</span>
              </button>
                </div>
                <div
                    class="w-full order-1 md:order-2 aspect-[1/.6] border-2 border-gray-200 shadow-2xl rounded-lg overflow overflow-hidden shadow-black/50 relative after:rotate-180 after:-z-10 after:absolute after:w-full after:h-1/2 after:shadow-xl after:bg-white after:inset-0 :size-full :object-cover object-top">
                    <Image width={700} height={550}
                        src="https://img.freepik.com/free-psd/3d-rendering-indian-wedding-characters_23-2151305901.jpg?t=st=1726136914~exp=1726140514~hmac=7d65788fff48a2af655ec6f62f05fed5df20c6449e72cfcc273c9c987f7abff0&w=740"
                        alt="`" />
                </div>
            </div>
            <div class="grid md:grid-cols-2  mt-10 items-center gap-10">
                <div class="order-2">
                    <h2 class="text-3xl font-semibold text-slate-600">
                        OUR MISSION
                    </h2>
                    <p
                        class="text-base mt-4 text-slate-600 text-balance text-ellipsis line-clamp-4">
                        A sweet tale of love, from fighting as colleagues to
                        falling in love. Their love story is no less of a
                        Bollywood tale. Everything about this wedding looked
                        like it was taken out of a movie.
                    </p>
                    <button className="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative mt-8">
                <span className='group-hover/btn:-translate-x-7 duration-300 w-7 h-[2px] bg-slate-950'></span> <span className='group-hover/btn:-translate-x-7 duration-300'> Explore
                Wedding Films</span>
              </button>
                </div>
                <div
                    class="w-full order-1 aspect-[1/.6] border-2 border-gray-200 shadow-2xl rounded-lg overflow overflow-hidden shadow-black/50 relative after:rotate-180 after:-z-10 after:absolute after:w-full after:h-1/2 after:shadow-xl after:bg-white after:inset-0  :size-full :object-cover">
                    <Image width={700} height={550}
                        src="https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                " alt="`" />
                </div>

            </div>
        </div>
        {/* <!-- vission mission section --> */}
        {/* <!-- Team --> */}
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2
                    class="text-2xl font-bold md:text-4xl md:leading-tight">THE SQUAD
                </h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            David Forren
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Founder / CEO
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Amil Evara
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            UI/UX Designer
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Ebele Egbuna
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Support Consultant
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Maria Powers
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Director of sales
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Delia Pawelke
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Front-end Developer
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Tom Lowry
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            UI/UX Designer
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Louise Donadieu
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Support Consultant
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Jeff Fisher
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Project Manager
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <Image width={300} height={300} class="rounded-xl sm:size-48 lg:size-60 mx-auto"
                        src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                         alt="Avatar" />
                    <div class="mt-2 sm:mt-4">
                        <h3
                            class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                            Sophia Harrington
                        </h3>
                        <p
                            class="text-xs text-gray-600 sm:text-sm lg:text-base">
                            Project Manager
                        </p>
                    </div>
                </div>            </div>
            {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Team --> */}
    </div>
  )
}

export default AboutUsPage
