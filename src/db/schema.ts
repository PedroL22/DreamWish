import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: uuid('id').primaryKey(),
  nickname: text('nickname').unique().notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  bio: text('bio'),
  profile_pic: text('profile_pic'),
  cover_pic: text('cover_pic'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at'),
})

export const wishList = pgTable('wish_list', {
  id: uuid('id').primaryKey(),
  author_id: uuid('author_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  cover_pic: text('cover_pic'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at'),
})

export const wish = pgTable('wish', {
  id: uuid('id').primaryKey(),
  wish_list_id: uuid('wish_list_id')
    .notNull()
    .references(() => wishList.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  cover_pic: text('cover_pic'),
  price: text('price'),
  link: text('link'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at'),
})
