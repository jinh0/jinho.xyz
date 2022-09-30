import Head from 'next/head'
import GoBack from './GoBack'

const Article = ({
  title,
  children,
}: {
  title?: string
  children: string | JSX.Element[]
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="items-center flex flex-col md:w-screen md:h-screen p-10 md:p-20  transition-all">
        <div className="w-full lg:w-1/2">
          <GoBack />
          {children}
        </div>
      </div>
    </>
  )
}

export default Article
