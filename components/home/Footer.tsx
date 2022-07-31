import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div className="font-medium text-base flex flex-col md:flex-row pt-2 border-t-2 border-fg4 w-full">
      <a
        href="https://www.github.com/jinh0"
        className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={'self-center fa-brands fa-github text-2xl mr-3'}
        />
        <p className="self-center">GitHub</p>
      </a>
      <a
        href="mailto:jinho.yoon@mcgill.ca"
        className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          className={'self-center text-2xl mr-3'}
        />
        <p className="self-center">Email</p>
      </a>
      <a
        href=""
        className="flex flex-row rounded-md hover:bg-bg1 p-3 transition duration-150 mr-1"
      >
        <FontAwesomeIcon
          icon={faFile}
          className={'self-center text-2xl mr-3'}
        />
        <p className="self-center">Resume</p>
      </a>
    </div>
  )
}

export default Footer
