const Article = ({ children }: { children: string | JSX.Element[] }) => {
  return (
    <div className="items-center flex flex-col md:w-screen md:h-screen p-8 py-24 lg:p-24 transition-all">
      <div className="w-full lg:w-1/2">{children}</div>
    </div>
  )
}

export default Article
