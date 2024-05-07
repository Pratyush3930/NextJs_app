import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
          Discover & Share
          <br  className='max-md:hidden'/>
          {/* hide the above element in screen that are medium sized or larger */}
          <span className='orange_gradient
          text-center'>AI-Powered Prompts</span>
        </h1>
        <p className='desc tect-center'>
          Promptopia is an open-source AI prompting tool for moden world to discover, create and share creative prompts
        </p>
    </section>
  )
}

export default Home