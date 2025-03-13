import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 px-8 md:px-16 py-12 bg-[#F9F9F9]'>
            {/* Contact Form Section */}
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl font-extrabold text-gray-800'>Get in Touch</h1>
                <p className='text-lg text-[#A1824A] my-4 leading-relaxed'>
                    Have questions? We're here to help. Send us a message, and we'll respond as soon as possible.
                </p>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div className='flex flex-col w-full md:w-1/2'>
                            <label className='font-semibold text-gray-700 text-md'>First Name</label>
                            <input className='w-full p-3 border border-[#A1824A] rounded-md outline-none focus:ring-2 focus:ring-[#A1824A]' type="text" />
                        </div>
                        <div className='flex flex-col w-full md:w-1/2'>
                            <label className='font-semibold text-gray-700 text-md'>Last Name</label>
                            <input className='w-full p-3 border border-[#A1824A] rounded-md outline-none focus:ring-2 focus:ring-[#A1824A]' type="text" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-700 text-md'>Email</label>
                        <input className='w-full p-3 border border-[#A1824A] rounded-md outline-none focus:ring-2 focus:ring-[#A1824A]' type="email" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-700 text-md'>Message</label>
                        <textarea className='w-full p-3 h-32 border border-[#A1824A] rounded-md outline-none focus:ring-2 focus:ring-[#A1824A]' />
                    </div>
                    <button className='mt-4 px-6 py-3 text-white font-semibold bg-[#009963] rounded-md hover:bg-[#007a4a] transition duration-200'>
                        Send Message
                    </button>
                </div>
            </div>
            
            {/* Office Details Section */}
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl font-extrabold text-gray-800'>Visit Our Office</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-700'>Address</h2>
                        <p className='text-md text-[#A1824A]'>123 Business Street, Silicon Valley, CA 94025</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-700'>Phone</h2>
                        <p className='text-md text-[#A1824A]'>+1 (555) 123-4567</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-700'>Email</h2>
                        <p className='text-md text-[#A1824A]'>contact@workconnect.com</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-700'>Business Hours</h2>
                        <p className='text-md text-[#A1824A]'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className='text-md text-[#A1824A]'>Saturday: 10:00 AM - 4:00 PM</p>
                        <p className='text-md text-[#A1824A]'>Sunday: Closed</p>
                    </div>
                    {/* Social Media Icons */}
                    <div className='flex gap-3 mt-3 text-xl'>
                        <Link
                            to={'https://www.instagram.com/'}
                            className='bg-[#F5F0E5] rounded-full p-3 cursor-pointer hover:bg-[#E4DAC5] transition'>
                            <i className="text-gray-700 ri-instagram-fill"></i>
                        </Link>
                        
                        <Link
                            to={'https://www.facebook.com/'}
                            className='bg-[#F5F0E5] rounded-full p-3 cursor-pointer hover:bg-[#E4DAC5] transition'>
                            <i className="text-gray-700 ri-facebook-circle-fill"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;