import Head from 'next/head'
import GoBack from './GoBack'
import Title from './Title'

const Article = ({
  title,
  subtitle,
  ctime,
  utime,
  children,
}: {
  title: string
  subtitle?: string
  ctime?: string
  utime?: string
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
      <div className="items-center flex flex-col md:w-screen md:min-h-screen p-6 md:pt-16 md:p-20 md:text-lg transition-all leading-relaxed select-none">
        <div className="w-full lg:w-1/2 select-text">
          <GoBack />
          <Title>{title}</Title>

          {subtitle && (
            <div className="mb-8 text-polar1 font-semibold">{subtitle}</div>
          )}

          <div className="text-polar4 text-sm mb-4">
            <span className="">{ctime ? ctime : 'Sept. 30th, 2022'}</span>
            {utime && (
              <span className="ml-5">
                <span className="font-semibold">Updated: </span>
                {utime}
              </span>
            )}
          </div>

          <div className="mb-8"></div>

          <div className="">
            <hr className="absolute w-screen left-0" />
          </div>

          <div className="mt-20"></div>

          {children}
        </div>
      </div>
    </>
  )
}

export default Article
