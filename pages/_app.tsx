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
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-BD8X7BE9RV"
      />

      <Script strategy="lazyOnload" id="analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BD8X7BE9RV');
        `}
      </Script>

      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}

export default MyApp
