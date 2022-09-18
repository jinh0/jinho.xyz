const Writing = ({ title, preview }: { title: string; preview?: string }) => {
  return (
    <div className="cursor-pointer py-3 p-2 border-y border-[#ffffff] hover:border-[#dddddd] w-full transition duration-75 group">
      <p className="font-mono text-xl underline-offset-4">{title}</p>
    </div>
  )
}

export default Writing
