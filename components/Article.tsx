import Head from 'next/head'
import GoBack from './GoBack'
import Title from './Title'

const Article = ({
  title,
  children,
}: {
  title: string
  children: string | JSX.Element[]
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"
          integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="items-center flex flex-col md:w-screen md:h-screen p-6 md:p-20 md:text-lg transition-all">
        <div className="w-full lg:w-1/2">
          <GoBack />
          <Title>{title}</Title>
          <span className="">Last Updated: September 30th, 2022</span>

          <div className="mb-4"></div>
          <hr className="mb-6" />

          {children}
        </div>
      </div>
    </>
  )
}

export default Article
