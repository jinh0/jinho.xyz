import About from '@components/home/About'
import Footer from '@components/home/Footer'
import Heading from '@components/home/Heading'
import Writings from '@components/home/Writings'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jinho Yoon</title>
      </Head>

      <div className="md:w-screen md:h-screen flex flex-row p-8 lg:p-24 transition-all">
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

          {/* <Writings /> */}
        </div>
      </div>
    </>
  )
}

export default Home
