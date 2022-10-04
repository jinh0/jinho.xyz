import type { AppProps } from 'next/app'
import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import Heading from '@components/blog/Heading'

const Wrapper = ({ children, meta }: { children?: any; meta?: any }) => {
  return <>{children}</>
}

const components = {
  h1: Heading.h1,
  h2: Heading.h2,
  h3: Heading.h3,
  li: BulletPoint,
  ul: List,
  p: Paragraph,
  strong: Bold,
  a: Link,
  wrapper: Wrapper,
}

import '../styles/index.css'
import BulletPoint from '@components/blog/BulletPoint'
import List from '@components/blog/List'
import Paragraph from '@components/blog/Paragraph'
import Bold from '@components/blog/Bold'
import Link from '@components/blog/Link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
