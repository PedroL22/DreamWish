import { UserEntity } from './entities'

export const fakeData = () => {
  const user: UserEntity = {
    name: 'Victoria Nunes',
    userName: 'victorianunes',
    profilePicture:
      'https://t4.ftcdn.net/jpg/05/58/85/45/360_F_558854520_lx9qrz9BCE1qpLo1UDBzptTD0KaYRIIe.jpg',
  }

  return { user }
}
