import Highlight from '@components/Highlight'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-bold text-xl md:text-2xl pb-3">About</p>

        <p className="pb-4">
          Hi, I&apos;m an undergraduate student interested in
          <span className="font-medium"> the problem of representation.</span>
        </p>

        <p className="pb-2">To that extent, I have been working on:</p>

        <ul className="list-disc list-outside pl-6">
          <li className="pb-2">
            A series of essays, <Highlight text={'On the Problem of Pride'} />,
            in which I outline the problem of understanding and argue for the
            world as will and representation.
          </li>
          <li>
            <Highlight text={'An automated theorem prover'} /> written in OCaml
            and TypeScript.
          </li>
        </ul>
      </div>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-bold text-xl md:text-2xl pb-3">Currently Reading</p>

        <ul className="list-disc list-outside pl-6">
          <li className="pb-1">
            <span className="italic">The World as Will and Representation</span>{' '}
            by Arthur Schopenhauer
          </li>
          <li className="pb-1">
            <span className="italic">Two Essays on Analytical Psychology</span>{' '}
            by Carl Jung
          </li>
          <li>
            <span className="italic">Deep Learning</span> by Ian Goodfellow
          </li>
        </ul>
      </div>
    </>
  )
}

export default About
