import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { client, db } from '.'

const main = async () => {
  await migrate(db, { migrationsFolder: 'src/db/migrations' })

  await client.end()
}

main()
