const Title = ({ children }: { children: JSX.Element | string }) => {
  return (
    <p className="mt-8 mb-4 text-3xl md:text-5xl font-bold text-polar1">
      {children}
    </p>
  )
}

export default Title
