import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jinho Yoon</title>
      </Head>

      <div className="md:w-screen md:h-screen flex flex-row bg-gradient-to-r from-white-0 to-bg1 p-8 lg:p-24 transition-all text-[#2E3440]">
        <div className="w-full self-center flex flex-col md:flex-row">
          <div className="w-full lg:w-3/5">
            <div className="">
              <div className="flex flex-col">
                <div className="pb-12 border-fg4">
                  <p className="text-4xl md:text-5xl font-extrabold mb-4">
                    Jinho Yoon
                  </p>
                  <p className="text-base md:text-xl font-normal font-mono">
                    Honours Math & Computer Science @ McGill University
                  </p>
                </div>

                <div className="pb-8 text-base md:text-xl">
                  <p className="font-bold text-xl md:text-2xl pb-3">About</p>

                  <p className="pb-4">
                    Hi, I&apos;m an undergraduate student interested in
                    <span className="font-medium">
                      {' '}
                      the problem of representation.
                    </span>
                  </p>

                  <p className="pb-2">
                    To that extent, I have been working on:
                  </p>

                  <ul className="list-disc list-outside pl-6">
                    <li className="pb-2">
                      A series of essays,{' '}
                      <span className="relative w-fit group">
                        <span className="bg-bg1 border-1 border-bg2 text-primary group-hover:bg-bg2 transition py-1 rounded-lg cursor-pointer duration-100">
                          <a href="" className="font-medium italic">
                            On the Problem of Pride
                          </a>
                        </span>
                      </span>
                      , in which I outline the problem of understanding and
                      argue for the world as will and representation.
                    </li>
                    <li>
                      <span className="bg-bg1 text-primary hover:bg-bg2 transition p-1 rounded-lg cursor-pointer duration-100">
                        <a href="https://github.com/jinh0/atp">
                          An automated theorem prover
                        </a>
                      </span>
                      written in OCaml and TypeScript.
                    </li>
                  </ul>
                </div>
                <div className="pb-8 text-base md:text-xl">
                  <p className="font-bold text-xl md:text-2xl pb-3">
                    Currently Reading
                  </p>

                  <ul className="list-disc list-outside pl-6">
                    <li className="pb-1">
                      <span className="italic">
                        The World as Will and Representation
                      </span>{' '}
                      by Arthur Schopenhauer
                    </li>
                    <li className="pb-1">
                      <span className="italic">
                        Two Essays on Analytical Psychology
                      </span>{' '}
                      by Carl Jung
                    </li>
                    <li>
                      <span className="italic">Deep Learning</span> by Ian
                      Goodfellow
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="font-medium text-base flex flex-col md:flex-row pt-2 border-t-2 border-fg4 w-full">
              <a
                href="https://www.github.com/jinh0"
                className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
              >
                <i className="self-center fa-brands fa-github text-2xl mr-3"></i>
                <p className="self-center">GitHub</p>
              </a>
              <a
                href="mailto:jinho.yoon@mcgill.ca"
                className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
              >
                <i className="self-center fa-solid fa-envelope text-2xl mr-3"></i>
                <p className="self-center">Email</p>
              </a>
              <a
                href=""
                className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
              >
                <i className="self-center fa-solid fa-briefcase text-2xl mr-3"></i>
                <p className="self-center">Resume</p>
              </a>
            </div>
          </div>

          <div className="hidden md:block pl-8">
            <p className="font-bold text-3xl pb-6">Writings</p>

            <p className="text-primary">My reading list.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
