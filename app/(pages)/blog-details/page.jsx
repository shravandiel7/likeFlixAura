import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="hero h-96  bg-[url(https://wpolive.com/habibi/wp-content/uploads/2023/10/page-title.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="max-auto max-w-7xl px-6 lg:px-8 h-full" >
            <div class="flex flex-col items-center justify-center my-auto h-full">
              <div class="font-medium text-5xl text-slate-950">Blog</div>
              <ul class="flex items-center  gap-4 mt-5 ">
                <li class="relative before:absolute before:-right-2.5 before:top-1/2 before:size-1 before:rounded-full before:bg-slate-600">
                  <a href={"/"} class="text-xl text-slate-600" >Home</a>
                </li>
                <li class="">
                  <a href="#" class="text-xl text-slate-600">Blog</a>
                </li>
              </ul>
            </div>
        </div>
        </section>


      <section className="py-10">
          <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-span-8">
          <div class="size-full">


            <div class="pb-14">
              <div class="size-full">
                <Image width={300} height={300} class="size-full object-cover" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/single-post-3.jpg" alt=""/>
              </div>
              <div class="flex items-center gap-3 py-4 border-b flex-wrap ">
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                  </span>
                  <span class="text-sm text-slate-600 font-bold">BY :</span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">ADMIN</a>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>
                  </span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">COMMENTS (0)</a>
                </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <span class="inline-block size-5 text-slate-700">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Calendar_Date"><path d="M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
                      h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"></path><path d="M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
                      c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
                      c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"></path></g></svg>
                      </span>
                      <a href="" class="inline-block text-sm font-semibold text-slate-500">OCTOBER 9, 2023 </a>
                    </div>
                </div>
                <div class="pt-9 pb-4">
                  <a href="" class=" text-4xl font-semibold">Make sure your wedding gown is the best one.</a>
                </div>
                <div class="pb-6 text-lg text-slate-500">
                  Your wedding bouquet is a beautiful symbol of your love and a stunning accessory that can enhance your bridal look. Choosing the right bouquet arrangement can be just as important as selecting the perfect flowers. Whether you’re going for a traditional, romantic, or modern vibe, there are countless ways to arrange your wedding bouquet to
                </div>
                <div class="">
                    <button class="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative ">
                        <span class='group-hover/btn:-translate-x-7  duration-300 w-7 h-[2px] bg-slate-950'></span> <span class='group-hover/btn:-translate-x-7 duration-300'> read more</span>
                      </button>
                </div>
            </div>
            <div class="pb-14">
              <div class="size-full">
                <Image width={300} height={300} class="size-full object-cover" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/single-post-2.jpg" alt=""/>
              </div>
              <div class="flex items-center gap-3 py-4 border-b flex-wrap ">
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                  </span>
                  <span class="text-sm text-slate-600 font-bold">BY :</span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">ADMIN</a>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>
                  </span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">COMMENTS (0)</a>
                </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <span class="inline-block size-5 text-slate-700">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Calendar_Date"><path d="M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
                      h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"></path><path d="M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
                      c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
                      c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"></path></g></svg>
                      </span>
                      <a href="" class="inline-block text-sm font-semibold text-slate-500">OCTOBER 9, 2023 </a>
                    </div>
                </div>
                <div class="pt-9 pb-4">
                  <a href="" class=" text-4xl font-semibold">You must need a great photographer.</a>
                </div>
                <div class="pb-6 text-lg text-slate-500">
                  Your wedding bouquet is a beautiful symbol of your love and a stunning accessory that can enhance your bridal look. Choosing the right bouquet arrangement can be just as important as selecting the perfect flowers. Whether you’re going for a traditional, romantic, or modern vibe, there are countless ways to arrange your wedding bouquet to
                </div>
                <div class="">
                    <button class="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative ">
                        <span class='group-hover/btn:-translate-x-7  duration-300 w-7 h-[2px] bg-slate-950'></span> <span class='group-hover/btn:-translate-x-7 duration-300'> read more</span>
                      </button>
                </div>
            </div>
            <div class="pb-14">
              <div class="size-full">
                <Image width={300} height={300} class="size-full object-cover" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/single-post-1.jpg" alt=""/>
              </div>
              <div class="flex items-center gap-3 py-4 border-b flex-wrap ">
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                  </span>
                  <span class="text-sm text-slate-600 font-bold">BY :</span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">ADMIN</a>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <span class="inline-block size-5 text-slate-700">
                    <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>
                  </span>
                  <a href="" class="inline-block text-sm font-semibold text-slate-500">COMMENTS (0)</a>
                </div>
                      <div class="flex items-center gap-1 shrink-0">
                        <span class="inline-block size-5 text-slate-700">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Calendar_Date"><path d="M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
                      h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"></path><path d="M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
                      c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
                      c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"></path></g></svg>
                        </span>
                        <a href="" class="inline-block text-sm font-semibold text-slate-500">OCTOBER 9, 2023 </a>
                      </div>
                </div>
                <div class="pt-9 pb-4">
                  <a href="" class=" text-4xl font-semibold">Top 10 wedding bouquet arranging idea</a>
                </div>
                <div class="pb-6 text-lg text-slate-500">
                  Your wedding bouquet is a beautiful symbol of your love and a stunning accessory that can enhance your bridal look. Choosing the right bouquet arrangement can be just as important as selecting the perfect flowers. Whether you’re going for a traditional, romantic, or modern vibe, there are countless ways to arrange your wedding bouquet to
                </div>
                <div class="">
                    <button class="flex justify-between text-slate-950 uppercase items-center overflow-hidden group/btn gap-4 z-20 relative ">
                        <span class='group-hover/btn:-translate-x-7  duration-300 w-7 h-[2px] bg-slate-950'></span> <span class='group-hover/btn:-translate-x-7 duration-300'> read more</span>
                      </button>
                </div>
            </div>


              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4">
              <div className="size-full lg:ps-20">
                <div className="">
                  <div className="text-2xl pb-5  font-semibold">Search</div>
                  <div className="flex items-center gap-4 w-full pb-4">
                    <div className="py-[1.5px] rounded-lg bg-slate-600 w-14 "></div>
                    <div className="py-[1.5px] rounded-lg bg-slate-100 w-full"></div>
                  </div>
                  <div className="pt-5">
                    <div className="flex items-center bg-slate-100 px-4">
                      <input className="h-[70px] bg-transparent w-full " type="text" placeholder="Search..." />
                      <button className="h-12 w-14 *:size-6 bg-slate-800 text-white flex items-center justify-center ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29 448 448"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <div className="text-2xl pb-5 font-semibold">Categories</div>
                  <div className="flex items-center gap-4 w-full pb-4">
                    <div className="py-[1.5px] rounded-lg bg-slate-600 w-14 "></div>
                    <div className="py-[1.5px] rounded-lg bg-slate-100 w-full"></div>
                  </div>
                  <div className="pt-5">
                  <ul>
                    <li>
                      <a href="#" className="font-semibold text-[15px] py-1">Phtography</a>
                    </li>
                      <li className="pt-5">
                      <a href="#" className="font-semibold text-[15px] py-1">Wedding Best Gift</a>
                    </li>
                      <li className="pt-5">
                      <a href="#" className="font-semibold text-[15px] py-1">Wedding Dress</a>
                    </li>
                      <li className="pt-5">
                      <a href="#" className="font-semibold text-[15px] py-1">Wedding Event</a>
                    </li>
                      <li className="pt-5">
                      <a href="#" className="font-semibold text-[15px] py-1">Wedding Planner</a>
                    </li>
                      <li className="pt-5">
                      <a href="#" className="font-semibold text-[15px] py-1">Wedding Tips</a>
                    </li>
                    
                  </ul>
                  </div>
                </div>
                <div className="pt-16">
                  <div className="text-2xl pb-5 font-semibold">Recent Posts</div>
                  <div className="flex items-center gap-4 w-full pb-4">
                    <div className="py-[1.5px] rounded-lg bg-slate-600 w-14 "></div>
                    <div className="py-[1.5px] rounded-lg bg-slate-100 w-full"></div>
                  </div>
                  <div className="flex  flex-nowrap gap-5 pt-4">
                    <div className="w-1/3 !shrink-0">
                      <a href="#" className="inline-block">
                    <Image width={300} height={300}  className="rounded-lg object-cover size-full" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/grid-post-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="w-9/12">
                      <div className="">
                        <Link href="" className="text-lg font-medium leading-[100%]">Make sure your wedding gown is the best one.</Link>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <span className="inline-block size-4 text-slate-500">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Stopwatch"><path d="M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"></path></g></svg>
                        </span>
                        <span className="inline-block text-[13px] font-semibold text-slate-500">
                          09 Oct 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-nowrap gap-5 pt-4">
                    <div className="w-1/3 !shrink-0">
                      <a href="#" className="inline-block">
                    <Image width={300} height={300}  className="rounded-lg object-cover size-full" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/grid-post-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="w-9/12">
                      <div className="">
                        <Link href="" className="text-lg font-medium leading-[100%]">You must need a great photographer.</Link>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <span className="inline-block size-4 text-slate-500">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Stopwatch"><path d="M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"></path></g></svg>
                        </span>
                        <span className="inline-block text-[13px] font-semibold text-slate-500">
                          09 Oct 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-nowrap gap-5 pt-4">
                    <div className="w-1/3 !shrink-0">
                      <a href="#" className="inline-block">
                    <Image width={300} height={300}  className="rounded-lg object-cover size-full" src="https://wpolive.com/habibi/wp-content/uploads/2023/10/grid-post-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="w-9/12">
                      <div className="">
                        <Link href="" className="text-lg font-medium leading-[100%]">Top 10 wedding bouquet arranging idea</Link>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <span className="inline-block size-4 text-slate-500">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Stopwatch"><path d="M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"></path></g></svg>
                        </span>
                        <span className="inline-block text-[13px] font-semibold text-slate-500">
                          09 Oct 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="pt-16">
                  <div className="text-2xl pb-5 font-semibold">Recent Posts</div>
                  <div className="flex items-center gap-4 w-full pb-4">
                    <div className="py-[1.5px] rounded-lg bg-slate-600 w-14 "></div>
                    <div className="py-[1.5px] rounded-lg bg-slate-100 w-full"></div>
                  </div>
                  <div className="pt-4 flex items-center flex-wrap gap-2">
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Creative
                      </Link>
                    </div>
                    
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Dress
                      </Link>
                    </div>
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Events
                      </Link>
                    </div>
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Flower
                      </Link>
                    </div>
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Gown
                      </Link>
                    </div>
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Planning
                      </Link>
                    </div>
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Solution
                      </Link>
                    </div>
                    
                    <div className="">
                      <Link href="" className="inline-block text-[13px] py-1 px-3 border border-slate-400 font-semibold rounded-2xl">Wedding
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
     </section>
     
     
     </div>
     
  )
}

export default page
