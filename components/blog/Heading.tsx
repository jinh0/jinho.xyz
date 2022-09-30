const H1: React.FC<{ children?: any }> = ({ children }) => {
  return <h1 className="font-bold text-3xl mb-3 mt-6">{children}</h1>
}

export default {
  h1: H1,
}
