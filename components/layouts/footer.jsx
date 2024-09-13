import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8  border-t border-gray-100 dark:border-gray-800">

            <nav className="grid grid-flow-col justify-center sm:gap-4 " aria-label="Secondary navigation">
                <Link className=" sm:px-5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-500 dark:text-gray-200" title="About" href={"/about-us"}>About
                </Link>
                <Link className=" sm:px-5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-500 dark:text-gray-200" title="Contact" href={"/contact"}>Contact
                </Link>
                <Link className=" sm:px-5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-500 dark:text-gray-200" title="Terms" href={"/blog"}>Blog
                </Link>
                <Link className=" sm:px-5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-500 dark:text-gray-200" title="Privacy" href={"/gallery"}>Gallery
                </Link>
            </nav>
            <nav className="grid grid-flow-col justify-center gap-2 p-4" aria-label="Social media links">
                <Link className="p-2" aria-label="facebook profile" title="Visit our facebook profile" href="https://www.facebook.com/">
                    <span className="[&>svg]:size-5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transition-all hover:fill-[#1877F2]" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </span>
                </Link>
                <Link className="p-2" aria-label="instagram profile" title="Visit our instagram profile" href="https://www.instagram.com//">
                    <span className="[&>svg]:size-5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transition-all hover:fill-[#E4405F]" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </span>
                </Link>
                <Link className="p-2" aria-label="x profile" title="Visit our x profile" href="https://x.com/">
                    <span className="[&>svg]:size-5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor" />
                        </svg>
                    </span>
                </Link>
                <Link className="p-2" aria-label="linkedin profile" title="Visit our linkedin profile" href="https://linkedin.com/company/">
                    <span className="[&>svg]:size-5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transition-all hover:fill-[#E4405F]" viewBox="0 0 448 512">
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </span>
                </Link>
                <Link className="p-2" aria-label="rss profile" title="Visit our rss profile" href="/">
                    <span className="[&>svg]:size-5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transition-all hover:fill-[#FFA500]" viewBox="0 0 24 24">
                            <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
                        </svg>
                    </span>
                </Link>
            </nav>

            <div className="text-sm text-center mt-6">
                Copyright © 2024
                <span>
                    <Image
                        src={'/img/logo1.png'}
                        loading="lazy"
                        className="inline-block px-2"
                        width={65}
                        height={15}
                        alt="vercel logo for footer"
                    />
                </span>
                All rights reserved.
            </div>
            <div className="mt-3 text-sm text-center text-gray-500 dark:text-gray-600">
                Made by
                <Link
                    href="https://www.imgglobalinfotech.com/"
                    target="_blank"
                    className="ml-2"
                >
                    IMG Global Infotech
                </Link>
            </div>
        </footer>
    )
}

export default Footer