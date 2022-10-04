import Highlight from '@components/Highlight'

const Link = ({ children, href }: { children?: any; href?: string }) => {
  return <Highlight href={href}>{children}</Highlight>
}

export default Link
