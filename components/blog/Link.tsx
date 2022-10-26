import Highlight from '@components/Highlight'

const CustomLink = ({ children, href }: { children?: any; href?: string }) => {
  return <Highlight href={href}>{children}</Highlight>
}

export default CustomLink
