import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
{/* <!-- hero section start --> */}
    <div className="relative">
        <div
            className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b from-slate-900/20 via-slate-900/30 to-slate-900">
            <Image width={1000} height={1000} src="https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" className="h-full w-full object-cover overflow-hidden object-top" />
        </div>
        <div
            className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
            <div className="w-full">
                <div
                    className="text-6xl md:text-[100px] font-bold !leading-[130%] tracking-[2rem] md:tracking-[5rem] text-center uppercase">
                    Blog
                </div>
            </div>
        </div>
    </div>
    {/* <!-- hero section ends --> */}

       {/* <!-- blogUpper Start --> */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 pt-20">
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
            <div className="sm:order-2">
                <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                    <Image width={1920} height={1000} className="size-full absolute top-0 start-0 object-cover object-top rounded-lg"
                        src="https://images.unsplash.com/photo-1555447405-057915b40299?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image" />
                </div>
            </div>
            <div className="sm:order-1">
                <p
                    className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    Business insight
                </p>

                <h2
                    className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
                    <a className="hover:text-amber-500 focus:outline-none focus:text-amber-500" href="#">
                        7 Tips for Hiring a Good Wedding Photographer
                    </a>
                </h2>

                <div className="mt-6 sm:mt-10 flex items-center">
                    <div className="shrink-0">
                        <Image width={600} height={600} className="size-10 sm:h-14 sm:w-14 rounded-full"
                            src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Blog Image" />
                    </div>

                    <div className="ms-3 sm:ms-4">
                        <p className="sm:mb-1 font-semibold text-gray-800">
                            Louise Donadieu
                        </p>
                        <p className="text-xs text-gray-500">
                            Strategic Marketing Consultant
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <a className="inline-flex items-center gap-x-1.5 text-amber-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                        href="#">
                        Read more
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- blogUpper Ends --> */}

    {/* <!-- blog Cards Main start --> */}
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 pt-20">
        <div
            className="uppercase text-5xl relative  text-balance flex items-center justify-center  w-full font-bold text-slate-800 pb-14 mx-auto">
            Blogs
            <div
                className="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">
                Latest
                Blogs
            </div>
        </div>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <Link href={'/blog-details'} className="group flex flex-col focus:outline-none" >
                <div className="aspect-[1/0.6] aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
                    <Image width={500} height={500} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl size-full"
                        src="https://images.unsplash.com/photo-1641279676778-3c94588147fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image" />
                </div>

                <div className="pt-4">
                    <h3
                        className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-amber-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                        eYoga
                    </h3>
                    <p className="mt-1 text-gray-600">
                        A revamped and dynamic approach to yoga analytics
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Discovery
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Brand Guidelines
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Yoga
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={'/blog-details'} className="group flex flex-col focus:outline-none" >
                <div className="aspect-[1/0.6] aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
                    <Image width={500} height={500} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl size-full"
                        src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image" />
                </div>

                <div className="pt-4">
                    <h3
                        className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-amber-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                        Nike React
                    </h3>
                    <p className="mt-1 text-gray-600">
                        Rewriting sports playbook for billions of athletes
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Brand Strategy
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Visual Identity
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={'/blog-details'} className="group flex flex-col focus:outline-none" >
                <div className="aspect-[1/0.6] aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
                    <Image width={500} height={500} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl size-full"
                        src="https://images.unsplash.com/photo-1587271449604-04bb40332709?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image" />
                </div>

                <div className="pt-4">
                    <h3
                        className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-amber-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                        Day Spa
                    </h3>
                    <p className="mt-1 text-gray-600">
                        Designing a new cocktail can
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Brand Strategy
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Visual Identity
                        </span>
                    </div>
                </div>
            </Link>
            <Link href={'/blog-details'} className="group flex flex-col focus:outline-none" >
                <div className="aspect-[1/0.6] aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
                    <Image width={500} height={500} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl size-full"
                        src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image" />
                </div>

                <div className="pt-4">
                    <h3
                        className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-amber-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                        Diamond Dynamics
                    </h3>
                    <p className="mt-1 text-gray-600">
                        From cutting-edge equipment to stylish apparel
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Sports Gear
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Equipment
                        </span>
                        <span
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                            Discovery
                        </span>
                    </div>
                </div>
            </Link>
            </div>
    </section>
    {/* <!-- blog Cards Main Ends --> */}


    </div>
  )
}

export default Blog
