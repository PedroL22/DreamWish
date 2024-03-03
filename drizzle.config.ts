import type { Config } from 'drizzle-kit'

import { env } from '~/env'

export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.EXPO_PUBLIC_DATABASE_URI,
  },
} satisfies Config
