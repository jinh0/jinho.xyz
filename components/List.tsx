const List = ({ children }: { children: JSX.Element[] }) => {
  return <ul className="list-disc list-outside pl-6 md:text-xl">{children}</ul>
}

export default List
