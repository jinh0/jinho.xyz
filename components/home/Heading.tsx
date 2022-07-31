import React from 'react'
import About from './About'

const Heading = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="pb-12 border-fg4">
          <p className="text-4xl md:text-5xl font-extrabold mb-4">Jinho Yoon</p>
          <p className="text-base md:text-xl font-normal font-mono">
            Honours Math & Computer Science @ McGill University
          </p>
        </div>

        <About />
      </div>
    </div>
  )
}

export default Heading
