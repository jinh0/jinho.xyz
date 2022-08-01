import React from 'react'

const Highlight = ({
  text,
  link = '',
  isItalic = false,
}: {
  text: string
  link?: string
  isItalic?: boolean
}) => {
  return (
    <span className="relative w-fit">
      {/* <span className="bg-bg1 border-bg2 text-primary group-hover:bg-bg2 transition p-1 rounded-md cursor-pointer duration-100"> */}
      <span className="peer border-bg2 text-primary hover:text-[#81A1C1] transition cursor-pointer duration-150 underline underline-offset-4">
        <a href={link} className={`${isItalic ? 'italic' : ''}`}>
          {text}
        </a>
      </span>

      <span className="shadow-xl border border-[#D8DEE9] peer-hover:z-50 absolute left-0 top-12 peer-hover:-translate-y-4 opacity-0 peer-hover:opacity-100 transition ease-in-out duration-150 p-3 bg-bg1 rounded-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </span>
    </span>
  )
}

export default Highlight
