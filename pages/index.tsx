import About from '@components/home/About'
import Footer from '@components/home/Footer'
import Heading from '@components/home/Heading'
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
                <Heading />
                <About />
              </div>
            </div>
            <Footer />
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
