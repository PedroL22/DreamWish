import { UserEntity } from './entities'

export const fakeData = () => {
  const user: UserEntity = {
    name: 'Victoria Nunes',
    userName: 'victorianunes',
  }

  return { user }
}
