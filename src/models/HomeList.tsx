class HomeList {
  id: number
  title: string
  description: string
  tags: string[]
  image: string

  constructor(
    id: number,
    title: string,
    description: string,
    tags: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.tags = tags
    this.image = image
  }
}

export default HomeList
