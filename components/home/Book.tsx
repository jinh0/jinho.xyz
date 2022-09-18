const Book = ({ title, author }: { title: string; author: string }) => {
  return (
    <li className="last:pb-0 pb-2">
      <span className="italic font-semibold">{title}</span> by {author}
    </li>
  )
}

export default Book
