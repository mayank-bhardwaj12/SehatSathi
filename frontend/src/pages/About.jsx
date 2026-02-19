import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p><b>SehatSathi</b> is your trusted digital companion for better healthcare. We are built with one simple goal — <b>making quality healthcare accessible, easy, and stress-free for everyone.</b></p>
          <p>In today’s fast-paced world, finding the right doctor at the right time shouldn’t be complicated. SehatSathi bridges the gap between patients and healthcare professionals by providing a seamless platform to search doctors, book appointments, and manage your health journey — all in one place.</p>
          <p>We work with verified and experienced doctors across multiple specialties to ensure you receive reliable and professional medical care. Whether it’s a routine check-up, a specialist consultation, or urgent medical advice, SehatSathi is here to support you at every step.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To simplify healthcare access through technology and empower people to take control of their health with confidence.</p>
          <b>Our Vision</b>
          <p>To become India’s most trusted digital healthcare partner, connecting millions with timely, affordable, and quality medical services.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className=' px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About