import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '../env' // not using alias import because of ts-node in db:migrate script

export const client = postgres(env.EXPO_PUBLIC_DATABASE_URI)

export const db = drizzle(client)
