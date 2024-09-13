import React from 'react'

const page = () => {
  return (
    <div>     
        <section className="relative overflow-x-hidden py-40 w-full bg-light bg-center bg-cover from-slate-500/10" style={{backgroundImage: `url('/img/contact-us.jpg')`}}>
    <div className="bg-slate-900/70 absolute w-full h-full top-0 bottom-0 left-0 right-0"></div>
    <div className="container">
        <div className="grid grid-cols-1 items-center justify-center text-center">
            <div className="text-sm relative z-20">
                <h4 className="text-white text-[28px] font-semibold tracking-[1px] pb-2"> Contact Us </h4>

                <ol className="flex items-center  whitespace-nowrap text-center justify-center mb-0 mt-4 py-2 px-6 bg-none" aria-label="Breadcrumb">
                 
                    <li className="inline-flex items-center uppercase">
                    <a className="flex items-center text-sm font-bold text-white hover:text-primary" href={"/"}>Home
                        <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                    </a>
                    </li>
                    <li className="inline-flex items-center uppercase text-sm text-white font-bold text-primary truncate z-30 relative" aria-current="page">Contact</li>
                </ol>

            </div>
        </div>
    </div>
</section>


        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {/* <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500"></p>
                    </div> */}
                    <div class="text-5xl relative  text-balance flex items-center justify-center  w-full font-bold text-slate-800 pb-14 mx-auto">
                        Get in Touch with Us
                        <div class="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">Contact us</div>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">+1-316-555-0116</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                                <form action="#" method="POST" className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label for="" className="text-base font-medium text-gray-900"> Your name </label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-slate-900 caret-slate-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                            <div className="mt-2.5 relative">
                                                <input type="email" name="" id="" placeholder="Enter your email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-slate-900 caret-slate-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="text-base font-medium text-gray-900"> Phone number </label>
                                            <div className="mt-2.5 relative">
                                                <input type="tel" name="" id="" placeholder="Phone Number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-slate-900 caret-slate-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="text-base font-medium text-gray-900"> Subject</label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="" id="" placeholder="Type here..." className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-slate-900 caret-slate-900" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label for="" className="text-base font-medium text-gray-900"> Message </label>
                                            <div className="mt-2.5 relative">
                                                <textarea name="" id="" placeholder="Type Here ...." className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-slate-900 caret-slate-900" rows="4"></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-2 mt-2 text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-md focus:outline-none hover:bg-slate-800 focus:bg-slate-800">
                                            Get in Touch 
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default page
