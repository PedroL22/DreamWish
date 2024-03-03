ALTER TABLE "user" RENAME COLUMN "name" TO "nickname";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_name_unique";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "wish" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "wish_list" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_nickname_unique" UNIQUE("nickname");