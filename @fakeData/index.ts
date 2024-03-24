import { UserEntity, WishlistEntity } from './entities'

export const fakeData = () => {
  const user: UserEntity = {
    id: 'b3a1d78d-524e-4d9f-877e-d3686a1a8d69',
    name: 'Victoria Nunes',
    userName: 'victorianunes',
  }

  const wishlists: WishlistEntity[] = [
    {
      id: '3bce4921-6b1d-4e56-a2bd-9c15ad80a6aa',
      name: 'My Birthday Wishlist',
      productQuantity: 5,
    },
    {
      id: 'b7a0d557-e9b7-4c3b-a9b0-82554c9a7b24',
      name: 'Christmas Wishlist',
      productQuantity: 10,
    },
    {
      id: 'a6a41e62-e301-45d9-aee3-56db5dda9d83',
      name: 'Summer Wishlist',
      productQuantity: 3,
    },
    {
      id: 'a6a41e62-e301-45d9-aee3-56db5dda9d84',
      name: "Valentine's Day Wishlist",
      productQuantity: 2,
    },
  ]

  return { user, wishlists }
}
