import About from '@components/home/About'
import Footer from '@components/home/Footer'
import Heading from '@components/home/Heading'
import Head from 'next/head'
import React from 'react'

const Home = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Jinho Yoon</title>
      </Head>

      <div className="min-h-screen md:w-screen md:h-screen relative flex flex-row p-6 lg:p-24 leading-relaxed select-none">
        <div className="w-full self-center justify-center items-center flex flex-col md:flex-row select-text">
          <div className="w-full xl:w-1/2">
            <div className="">
              <div className="flex flex-col">
                <Heading />

                <div className="pb-8 text-base md:text-xl">{children}</div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
