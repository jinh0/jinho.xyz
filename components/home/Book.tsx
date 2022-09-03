const Book = ({ title, author }: { title: string; author: string }) => {
  return (
    <li className="last:pb-0 pb-3">
      <span className="italic">{title}</span> by {author}
    </li>
  )
}

export default Book
