/** @type {import('next').NextConfig} */
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX({
  // Append the default value with md extensions
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
