import Article from '@components/Article'
import GoBack from '@components/GoBack'
import Book from '@components/home/Book'
import Title from '@components/Title'
import Link from 'next/link'

const ReadingList = () => {
  return (
    <Article>
      <GoBack />
      <Title>Reading List</Title>

      <ul className="list-disc list-outside pl-6 text-xl">
        <Book title="The Interpretation of Dreams" author="Sigmund Freud" />
        <Book title="Symbols of Transformation" author="Carl Jung" />
        <Book title="The Bible" author="Anonymous" />
        <Book
          title="Structure and Interpretation of Computer Programs"
          author="Harold Abelson"
        />
        <Book title="Crime and Punishment" author="Fyodor Dostoyevsky" />
        <Book title="Siddhartha" author="Hermann Hesse" />
      </ul>
    </Article>
  )
}

export default ReadingList
