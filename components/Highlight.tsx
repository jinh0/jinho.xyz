import React from 'react'

const Highlight = ({ text, isItalic }: { text: string; isItalic: boolean }) => {
  return (
    <span className="relative w-fit group">
      <span className="bg-bg1 border-bg2 text-primary group-hover:bg-bg2 transition p-1 rounded-sm cursor-pointer duration-100">
        <a href="" className={`${isItalic ? 'italic' : ''}`}>
          {text}
        </a>
      </span>
    </span>
  )
}

export default Highlight
