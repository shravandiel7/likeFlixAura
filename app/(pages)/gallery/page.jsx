import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <section className="relative overflow-x-hidden py-40 w-full bg-light bg-center bg-cover from-slate-500/10" style={{backgroundImage: `url('/img/gallerybanner.png')`}}>
        <div className="bg-slate-900/50 absolute w-full h-full top-0 bottom-0 left-0 right-0"></div>
        <div className="container">
            <div className="grid grid-cols-1 items-center justify-center text-center">
                <div className="text-sm relative z-20">
                    <h4 className="text-white text-[28px] font-semibold tracking-[1px] pb-2"> Projects &amp; Works </h4>

                    <ol className="flex items-center  whitespace-nowrap text-center justify-center mb-0 mt-4 py-2 px-6 bg-none" aria-label="Breadcrumb">
                     
                        <li className="inline-flex items-center uppercase">
                        <a className="flex items-center text-sm font-bold text-white hover:text-primary" href={"/"}>Home
                            <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                        </a>
                        </li>
                        <li className="inline-flex items-center uppercase text-sm text-white font-bold text-primary truncate z-30 relative" aria-current="page">Portfolio</li>
                    </ol>

                </div>
            </div>
        </div>
    </section>

    <section className='mx-auto max-w-7xl lg:px-8 px-6 lg:py-20 py-12'>
    <div class="text-5xl relative  text-balance flex items-center justify-center  w-full font-bold text-slate-800 pb-14 mx-auto">
    Explore Our Visual Collection
    <div class="absolute -top-7 [font-family:Yesteryear] [-webkit-text-stroke:_0.8px_#000] opacity-40 text-transparent md:text-[120px] sm:text-[90px] text-[80px] font-light">Gallery</div>
</div>

    <div id="gallery-wrapper" class="md:flex justify-center  flex-wrap" >

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible"  >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                  <Image width={400} height={400} src="/img/gallery1.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 h-full" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Iphone mockup</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">Branding</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery1.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                  <Image width={400} height={400} src="/img/gallery2.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Mockup Collection</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">Mockup</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery2.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">                    
                  <Image width={400} height={400} src="/img/gallery3.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Abstract images</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">Abstract</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery3.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div>
                  <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                      <Image width={400} height={400} src="/img/gallery4.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full" alt=""/>
                      <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                      <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                          <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Company V-card</a>
                          <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">V-card</h6>
                      </div>
                      <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                          <a href="/img/gallery4.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                  <Image width={400} height={400} src="/img/gallery5.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Company V-card</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">V-card</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery5.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                  <Image width={400} height={400} src="/img/gallery6.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Mockup box with paints</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">Photography</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery6.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>

      <div class="lg:w-1/3 md:w-1/3 p-4 picture-item shuffle-item shuffle-item--visible" >
          <div>
              <div class="relative overflow-hidden rounded-lg shadow-2xl group">
                  <Image width={400} height={400} src="/img/gallery7.jfif" class="!h-80 object-cover group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt=""/>
                  <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
                      <a class="text-white group-hover:text-white font-semibold text-lg" href="/tailwind/queue/layout/page-portfolio-detail">Yellow bg with Books</a>
                      <h6 class="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">Books</h6>
                  </div>
                  <div class="absolute z-10 opacity-0 group-hover:opacity-80 left-1/2 top-1/2 -translate-y-1/2 duration-500 text-center">
                      <a href="/img/gallery7.jfif" class="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera fea icon-sm h-4 w-4"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></a>
                  </div>
              </div>
          </div>
      </div>



</div>
    </section>
    </div>
  )
}

export default Gallery
