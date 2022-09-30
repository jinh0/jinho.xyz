const Title = ({ children }: { children: JSX.Element | string }) => {
  return <p className="mt-6 mb-4 text-3xl md:text-5xl font-bold">{children}</p>
}

export default Title
