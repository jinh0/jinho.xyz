import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <a
      href={href}
      className="flex flex-row rounded-lg px-5 py-2 transition duration-150 hover:text-polar1"
    >
      <p className="self-center">{text}</p>
    </a>
  )
}

const Footer = () => {
  return (
    <div className="text-base flex flex-col md:justify-center md:flex-row pt-2 border-t border-polar4 w-full text-polar1">
      <a
        href="https://www.github.com/jinh0"
        className="flex flex-row rounded-lg hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={'self-center fa-brands fa-github text-2exl mr-3'}
        />
        <p className="self-center">GitHub</p>
      </a>
      <a
        href="mailto:jinho.yoon@mcgill.ca"
        className="flex flex-row rounded-lg hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-2 self-center"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>

        <p className="self-center">Email</p>
      </a>
      <a
        href=""
        className="flex flex-row rounded-lg hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-2 self-center"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>

        <p className="self-center">Resume</p>
      </a>
    </div>
    // <div className="absolute text-sm py-2 left-0 bottom-0 flex flex-row justify-center w-full text-polar4">
    //   <Button href="https://www.github.com/jinh0" text="GitHub" />
    //   <Button href="mailto:jinho.yoon@mcgill.ca" text="Email" />
    //   <Button href="" text="Resume" />
    // </div>
  )
}

export default Footer
