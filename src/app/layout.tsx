
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
 
  return (
    <html lang="en">
      <head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        /></head>
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
       <header className="flex justify-between items-center w-11/12 self-center h-24">
        <div className="w-24 h-24 ">
          <img
            src="https://png.pngtree.com/element_our/sm/20180411/sm_5ace0628840fa.png"
            alt="agriculture logo"
         
          />
        </div>
        <div className=" w-3/5 h-full">
          <nav className="w-full h-full flex items-center">
            <ul className="flex w-full justify-between text-xl">
              <li className="transition-all hover:text-green-700">
                <Link href="/">Home</Link>
              </li>
              <li className="transition-all hover:text-green-700">
                <Link href="/about">About Us</Link>
              </li>
              <li className="transition-all hover:text-green-700">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="transition-all hover:text-green-700">
                <Link href="/Testimonials"  >Testimonials</Link>
              </li>
              <li className="transition-all hover:text-green-700">
                <Link href="/Blog">Blog</Link>
              </li>
              <li className="relative group ">
                <Link href="#" className="group-hover:underline ">
                  DropDown
                </Link>
                <ul className="absolute left-0  hidden group-hover:flex flex-col bg-white shadow-lg border group  rounded p-1 ">
                  <li  className=" hover:text-green-700">
                    <Link href="#" className="mb-1">DropDown1</Link>
                  </li>
                  <li  className=" hover:text-green-700">
                    <Link href="#"  className="mb-1">DropDown2</Link>
                  </li>
                  <li  className=" hover:text-green-700">
                    <Link href="#"  className="mb-1">DropDown3</Link>
                  </li>
                </ul>
              </li>
              <li  className=" hover:text-green-700">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}</main>
        <footer className="flex flex-col w-full">
      <div className="flex flex-row justify-between bg-stone-900 flex-wrap w-full p-14">
        <div className=" text-white">
          <h3 className="mb-6 text-3xl">AgriCulture</h3>
          <ul>
            <li className="mb-1">A108 Adam Street</li>
            <li className="mb-1">Phone: +1 5589 55488 55</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-2xl text-white ">Useful Links</h3>
          <ul>
            <li  className="mb-1 text-gray-500 hover:text-green-800"><a href="#">Home</a></li>
            <li  className="mb-1 text-gray-500 hover:text-green-800"><a href="#">About us</a></li>
            <li  className="mb-1 text-gray-500 hover:text-green-800"><a href="#">Services</a></li>
            <li  className="mb-1 text-gray-500 hover:text-green-800"><a href="#">Terms of service </a></li>
            <li  className="mb-1 text-gray-500 hover:text-green-800"><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-2xl text-white ">Our Services</h3>
          <ul>
            <li  className="mb-1 text-gray-500 hover:text-green-800">Web Design</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Web Development</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Product Management</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Marketing</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Graphic Design</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-2xl text-white ">Hic solutasetp</h3>
          <ul>
            <li className="mb-1 text-gray-500 hover:text-green-800">Molestiae accusamus iure</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Excepturi dignissimos</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Suscipit distinctio</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Dilecta</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Sit quas consectetur
            </li>
          </ul>
        </div>
        <div>
          <h3  className="mb-6 text-2xl text-white ">Nobis illum</h3>
          <ul>
            <li className="mb-1 text-gray-500 hover:text-green-800">Ipsam</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Laudantium dolorum</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Dinera</li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Trodelas </li>
            <li className="mb-1 text-gray-500 hover:text-green-800">Flexo</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between p-10 bg-black">
        <div >
          <h4 className="text-white">© Copyright MyWebsite. All Rights Reserved</h4>
          <h5 className="text-white">Designed by <a className="text-green-600" href="#">BootstrapMade</a></h5>
        </div>
        <div className="w-52  justify-between flex flex-row">
          <span className="inline-flex justify-center items-center bg-gray-700 w-10 h-10 p-1 text-green-800 text-xl rounded "><a href="#"><i className="fa-brands fa-x-twitter"></i></a></span>
          <span className="inline-flex justify-center items-center bg-gray-700 w-10 h-10 p-1 text-green-800 text-xl rounded "><a href="#"><i className="fa-brands fa-facebook"></i></a></span>
          <span className="inline-flex justify-center items-center bg-gray-700 w-10 h-10 p-1 text-green-800 text-xl rounded "><a href="#"><i className="fa-brands fa-instagram"></i></a></span>
          <span className="inline-flex justify-center items-center bg-gray-700 w-10 h-10 p-1 text-green-800 text-xl rounded "><a href="#"><i className="fa-brands fa-linkedin"></i></a></span>
        </div>
      </div>
      </footer>
      </body>
    </html>
  );
}
