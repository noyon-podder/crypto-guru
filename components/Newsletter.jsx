import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className='bg-secondary py-16'>
        <div className="container  mx-auto">

  
  <section className="text-gray-800 text-center lg:text-left">
    <div className="flex flex-wrap justify-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
        <div className="grid lg:grid-cols-2 gap-x-6 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-white">
              Sign up for exclusive email newsletter
              
            </h2>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="md:flex flex-row">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="main-small-button "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Submit
                <FaArrowRight className='mx-2'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

</div>
    </div>
  )
}

export default Newsletter