import React from 'react'

export const About = () => {
  return (
    <div className='container ms-6  mt-6 px-4 py-3'>
      <h1 className='text-4xl font-bold mb-4 '>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='md:col-span-1'>
          <img
            src='../src/assets/PW.png'
            alt='About Us'
            className='w-full rounded-lg shadow-lg'
            style={{ maxWidth: '500px', maxHeight: '400px' }}
          />
          {/* Adjust the maxWidth and maxHeight values as needed */}
        </div>
        <div className='md:col-span-1'>
          <h2 className='text-2xl font-bold mb-4'>
          
            <br />
           
          </h2>
          <p className='mb-4'>
            The degree colleges in Jammu play a vital role in the higher
            education landscape of the region, offering a wide array of
            undergraduate and postgraduate programs to students from diverse
            backgrounds. These institutions serve as hubs of learning, fostering
            academic excellence and intellectual growth among their students.
            With a focus on providing quality education, degree colleges in
            Jammu strive to equip students with the knowledge, skills, and
            competencies necessary to succeed in their chosen fields.
          </p>
          <div className=' mt-[30vh] text-4xl'>
          <p className=' font-bold'>Expert teachers</p>
        </div>

        <div className="container ]">
          <div className="row flex flex-row">
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top h-[50vh] p-5 mr-[30vh]" src= alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top h-[50vh] p-5 mr-[30vh]" src="https://picsum.photos/201/300" alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top h-[50vh] p-5 mr-[30vh]" src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
   
        </div>
      </div>
      <div>
        <div className='container mx-auto px-4 py-8 flex justify-around absolute top-[30vh] left-0 right-0 z-10'>
          <div>
            <p className='text-white font-bold text-3xl'>5000+</p>
            <p className='text-white'>Total Students</p>
          </div>
          <div>
            <p className='text-white font-bold text-3xl'>200+</p>
            <p className='text-white'>Experienced Teachers</p>
          </div>
          <div>
            <p className='text-white font-bold text-3xl'>30+</p>
            <p className='text-white'>Departments</p>
          </div>
          <div>
            <p className='text-white font-bold text-3xl'>10000+</p>
            <p className='text-white'>Library Books</p>
          </div>
        </div>

        {/* Image positioned above the first image */}
        <div className='relative'>
          <div></div>
          <img
            src='../src/assets/lib2.jpg'
            alt='First Image'
            className='h-[60vh] w-[210vh]'
          />
        </div>

       
        <div className='text-center mt-8'>
          <p className='text-2xl  font-bold'>Great Moments</p>
        </div>

        <div className='grid grid-cols-3 mt-8 ml-40 mr-40 '>
          <img
            src='../src/assets/gal1.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />

          <img
            src='../src/assets/gal2.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />

          <img
            src='../src/assets/gal3.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />
        </div>

        <div className='grid grid-cols-3 mt-4 ml-40 mr-40 '>
          <img
            src='../src/assets/gal4.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />

          <img
            src='../src/assets/gal5.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />

          <img
            src='../src/assets/gal6.jpg'
            alt='Box Image'
            className='h-[50vh] w-[50vh] mx-auto'
          />
        </div>

        <div className='grid grid-cols-3 gap-0 mt-4 ml-40 mr-40'>
          <div className='text-center'>
            <img
              src='../src/assets/gal7.jpg'
              alt='Box Image'
              className='h-[50vh] w-[50vh] mx-auto'
            />
          </div>
          <div className='text-center'>
            <img
              src='../src/assets/gal8.jpg'
              alt='Box Image'
              className='h-[50vh] w-[50vh] mx-auto'
            />
          </div>
          <div className='text-center'>
            <img
              src='../src/assets/gal9.jpg'
              alt='Box Image'
              className='h-[50vh] w-[50vh] mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
