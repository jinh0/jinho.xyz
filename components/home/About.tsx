import Highlight from '@components/Highlight'
import React from 'react'
import Book from './Book'

const About = () => {
  return (
    <>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-bold text-xl md:text-2xl pb-3">About</p>

        <p className="pb-4">
          Hi! I&apos;m an undergraduate student fascinated by how mental
          representations of the world work. To that extent, I am interested in
          psychoanalysis, algorithms, and artificial intelligence.
        </p>

        <p className="pb-2">I am currently working on:</p>

        <ul className="list-disc list-outside pl-6 pb-6">
          <li className="pb-2">
            A series of essays,{' '}
            <Highlight text={'On the Problem of Pride'} isItalic={true} />, that
            deals with the concepts of understanding and {'"'}becoming{'"'}.
          </li>
          <li>
            <Highlight
              text={'An automated theorem prover'}
              link="https://github.com/jinh0/gentzen"
            />{' '}
            for propositional logic written in OCaml and TypeScript.
          </li>
        </ul>

        <p>
          A lot of people ask me what books to read, so{' '}
          <Highlight
            text="here is a list of books that I found most helpful."
            link="/reading-list"
          />
        </p>
      </div>
      <div className="pb-8 text-base md:text-xl">
        <p className="font-semibold text-xl md:text-2xl pb-3">
          Currently Reading
        </p>

        <ul className="list-disc list-outside pl-6">
          <Book
            title="Structure and Interpretation of Computer Programs"
            author="Harold Abelson"
          />
          <Book
            title="Archetypes and the Collective Unconscious"
            author="Carl Jung"
          />
        </ul>
      </div>
    </>
  )
}

export default About
