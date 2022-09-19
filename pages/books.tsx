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

      <List>
        <Book title="The Interpretation of Dreams" author="Sigmund Freud" />
        <Book title="Symbols of Transformation" author="Carl Jung" />
        <Book
          title="Structure and Interpretation of Computer Programs"
          author="Harold Abelson"
        />
        <Book title="Crime and Punishment" author="Fyodor Dostoyevsky" />
        <Book title="Faust, Part One" author="Johann Wolfgang von Goethe" />
        <Book title="The Bible" author="Anonymous" />
      </List>
    </Article>
  )
}

export default ReadingList
