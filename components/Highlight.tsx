import Link from 'next/link'
import React from 'react'

const Highlight = ({
  subtitle,
  href: link = '',
  isItalic = false,
  children,
}: {
  subtitle?: string
  href?: string
  isItalic?: boolean
  children: string | JSX.Element
}) => {
  return (
    <span className="relative w-fit">
      {/* <span className="bg-bg1 border-bg2 text-primary group-hover:bg-bg2 transition p-1 rounded-md cursor-pointer duration-100"> */}
      <span className="peer font-medium  border-bg2 text-primary hover:text-[#5E81AC] transition cursor-pointer duration-150 hover:underline underline-offset-4">
        <Link href={link}>
          <span className={isItalic ? 'italic' : ''}>{children}</span>
        </Link>
      </span>

      {subtitle ? (
        <span className="shadow-xl border border-[#D8DEE9] peer-hover:z-50 absolute left-0 top-12 peer-hover:-translate-y-4 opacity-0 peer-hover:opacity-100 transition ease-in-out duration-150 p-3 bg-bg1 rounded-md">
          {subtitle}
        </span>
      ) : (
        <></>
      )}
    </span>
  )
}

export default Highlight
