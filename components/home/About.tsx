import Highlight from '@components/Highlight'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-bold text-xl md:text-2xl pb-3">About</p>

        <p className="pb-4">
          Hi! I&apos;m an undergraduate student interested in how the world is
          represented by the mind. To that extent, I am interested in
          psychoanalysis, algorithms, and artificial intelligence.
        </p>

        <p className="pb-2">I am currently working on:</p>

        <ul className="list-disc list-outside pl-6">
          <li className="pb-2">
            A series of essays,{' '}
            <Highlight text={'On the Problem of Pride'} isItalic={true} />, that
            deals with the concept of understanding and "becoming".
          </li>
          <li>
            <Highlight
              text={'An automated theorem prover'}
              link="https://github.com/jinh0/gentzen"
            />{' '}
            for propositional logic written in OCaml and TypeScript.
          </li>
        </ul>
      </div>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-semibold text-xl md:text-2xl pb-3">
          Currently Reading
        </p>

        <ul className="list-disc list-outside pl-6">
          <li className="pb-3">
            <span className="italic">
              Structure and Interpretation of Computer Programs
            </span>{' '}
            by Harold Abelson
          </li>
          <li className="last:pb-0 pb-3">
            <span className="italic">Introduction to Real Analysis</span> by
            Robert Brabenec
          </li>
        </ul>
      </div>
    </>
  )
}

export default About