import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-16 text-sm">
        <img
          className="w-full md:max-w-[360px] rounded-2xl"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="flex flex-col justify-center gap-6 items-start">
          <b className="text-gray-800">OUR OFFICE</b>

          <p className="text-gray-500">
            124001, Shastri Nagar <br />
            Rohtak, Haryana, India
          </p>

          <p className="text-gray-500">
            Email: <span className="font-medium">bhardwajmayank058@gmail.com</span>
          </p>

          <b className="text-gray-800">CAREERS AT SEHATSATHI</b>

          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 rounded-md text-gray-600 hover:bg-black hover:text-white transition-all duration-500">
            View Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
