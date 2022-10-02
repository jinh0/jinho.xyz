import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <a
      href={href}
      className="flex flex-row rounded-lg p-4 transition duration-150 hover:text-slate-800"
    >
      <p className="self-center">{text}</p>
    </a>
  )
}

const Footer = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 mb-8 w-full items-center text-base border-t-0 text-slate-600">
      <div>
        <div className="flex flex-row justify-center items-center">
          <Button text="GitHub" href="https://www.github.com/jinh0" />
          <Button text="Email" href="mailto:jinho.yoon@mcgill.ca" />
          <Button text="Resume" href="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
