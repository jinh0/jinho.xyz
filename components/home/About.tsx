import Highlight from '@components/Highlight'
import React from 'react'
import Book from './Book'

const About = () => {
  return (
    <>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-bold text-xl md:text-2xl pb-4">About</p>

        <p className="pb-6">
          Hi! I&apos;m an undergraduate student interested in how mental
          representations of the world work. To that extent, I am interested in
          artificial intelligence, psychoanalysis, and logic.
        </p>

        <p className="pb-4">I am currently working on:</p>

        <ul className="list-disc list-outside pl-6 pb-6">
          <li className="pb-2">
            A series of essays,{' '}
            <Highlight isItalic={true}>On the Problem of Pride</Highlight>, in
            which I have been laying the philosophical groundwork for an
            analysis of psychological growth.
          </li>
          <li>
            <Highlight href="https://github.com/jinh0/gentzen">
              An automated theorem prover
            </Highlight>{' '}
            for propositional logic written in OCaml and TypeScript.
          </li>
        </ul>

        <p className="pb-4">
          A lot of people ask me what books to read, so{' '}
          <Highlight href="/books">here is a list of books</Highlight>.
        </p>

        <p>
          Here{"'"}s{' '}
          <Highlight href="/writings/groups">
            some notes about group theory
          </Highlight>
          .
        </p>
      </div>
      {/* <div className="pb-8 text-base md:text-xl">
        <p className="font-semibold text-xl md:text-2xl pb-3">
          Currently Reading
        </p>

        <ul className="list-disc list-outside pl-6">
          <Book title="The Burnout Society" author="Byung-Chul Han" />
        </ul>
      </div> */}
    </>
  )
}

export default About
