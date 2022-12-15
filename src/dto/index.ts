export interface CardItem {
    id: number
    name: string
    description: string
    tags: string[]
    photos: Photo[]
}

export interface Photo {
    url: string
}