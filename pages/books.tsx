import Article from '@components/Article'
import GoBack from '@components/GoBack'
import Book from '@components/home/Book'
import List from '@components/List'
import Title from '@components/Title'
import Head from 'next/head'

const ReadingList = () => {
  return (
    <Article>
      <Head>
        <title>Book Recommendations</title>
      </Head>

      <GoBack />
      <Title>Great Books</Title>

      <p className="italic mt-4 md:text-xl">
        These are books I believe have fundamentally shaped my thinking.
      </p>

      <List>
        <Book title="The Interpretation of Dreams" author="Sigmund Freud" />
        <Book title="Symbols of Transformation" author="Carl Jung" />
        <Book title="Maps of Meaning" author="Jordan Peterson" />
        <Book title="Understanding Life" author="Alfred Adler" />
        <Book
          title="Structure & Interpretation of Computer Programs"
          author="Harold Abelson"
        />
        <Book title="Beyond Good and Evil" author="Friedrich Nietzsche" />
        <Book title="Cosmos" author="Carl Sagan" />
        <Book title="Crime and Punishment" author="Fyodor Dostoyevsky" />
        <Book title="The Pilgrim's Progress" author="John Bunyan" />
        <Book title="Siddhartha" author="Hermann Hesse" />
        <Book title="Faust" author="Johann Wolfgang von Goethe" />
        <Book title="The Bible" author="Anonymous" />
      </List>
    </Article>
  )
}

export default ReadingList
