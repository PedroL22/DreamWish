import zod from 'zod'

const envSchema = zod.object({
  EXPO_PUBLIC_DATABASE_URI: zod.string(),
})

export const env = envSchema.parse(process.env)
