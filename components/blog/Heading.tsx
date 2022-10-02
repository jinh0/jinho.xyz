const H1: React.FC<{ children?: any }> = ({ children }) => {
  return <p className="font-bold text-3xl mb-4 text-polar1">{children}</p>
}

const H2: React.FC<{ children?: any }> = ({ children }) => {
  return <p className="font-bold text-2xl mb-4 text-polar1">{children}</p>
}

const H3: React.FC<{ children?: any }> = ({ children }) => {
  return <p className="font-bold text-xl mb-4 text-polar1">{children}</p>
}

export default {
  h1: H1,
  h2: H2,
  h3: H3,
}
