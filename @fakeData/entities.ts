export interface UserEntity {
  id: string
  name: string
  userName: string
  profilePic?: string
}

export interface WishlistEntity {
  id: string
  name: string
  productQuantity: number
  coverPic?: string
}
