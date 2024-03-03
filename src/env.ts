import zod from 'zod'
import 'dotenv/config' // using dotenv because of ts-node in db:migrate script

const envSchema = zod.object({
  EXPO_PUBLIC_DATABASE_URI: zod.string(),
})

export const env = envSchema.parse(process.env)
