import fs from 'fs/promises'

// Function that converts Date to a string
// with the format Month Day, Year
function formatDate(date: Date) {
  const monthNames = [
    'Jan.', 'Feb.', 'March',
    'April', 'May', 'June', 'July',
    'Aug.', 'Sept.', 'Oct.',
    'Nov.', 'Dec.'
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${monthNames[monthIndex]} ${day}, ${year}`
}

export async function getStaticProps() {
  console.log(__filename)
  const file = await fs.stat(__filename)
  console.log(file.ctime)
  console.log(file.mtime)

  return {
    props: {
      ctime: formatDate(file.ctime),
      mtime: formatDate(file.mtime),
    }
  }
}