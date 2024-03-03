CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"bio" text,
	"profile_pic" text,
	"cover_pic" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "user_name_unique" UNIQUE("name"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wish" (
	"id" uuid PRIMARY KEY NOT NULL,
	"wish_list_id" uuid NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"cover_pic" text,
	"price" text,
	"link" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wish_list" (
	"id" uuid PRIMARY KEY NOT NULL,
	"author_id" uuid NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"cover_pic" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wish" ADD CONSTRAINT "wish_wish_list_id_wish_list_id_fk" FOREIGN KEY ("wish_list_id") REFERENCES "wish_list"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wish_list" ADD CONSTRAINT "wish_list_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
