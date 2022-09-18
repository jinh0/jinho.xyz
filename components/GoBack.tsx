import Link from 'next/link'

const GoBack = () => {
  return (
    <Link href="/">
      <p className="flex flex-row items-center font-semibold cursor-pointer hover:bg-bg1 rounded-lg transition w-fit -translate-x-3 px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Go back
      </p>
    </Link>
  )
}

export default GoBack
