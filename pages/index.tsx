import About from '@components/home/About'
import Footer from '@components/home/Footer'
import Heading from '@components/home/Heading'
import Head from 'next/head'
import React from 'react'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jinho Yoon</title>
      </Head>

      <div className="md:w-screen md:h-screen flex flex-row p-6 lg:p-24 transition-all">
        <div className="w-full self-center justify-center items-center flex flex-col md:flex-row">
          <div className="w-full xl:w-1/2">
            <div className="">
              <div className="flex flex-col">
                <Heading />
                <About />
              </div>
            </div>
            <Footer />
          </div>

          {/* <Writings /> */}
        </div>
      </div>
    </>
  )
}

export default Home
