ALTER TABLE "wish" DROP CONSTRAINT "wish_wish_list_id_wish_list_id_fk";
--> statement-breakpoint
ALTER TABLE "wish_list" DROP CONSTRAINT "wish_list_author_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wish" ADD CONSTRAINT "wish_wish_list_id_wish_list_id_fk" FOREIGN KEY ("wish_list_id") REFERENCES "wish_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wish_list" ADD CONSTRAINT "wish_list_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
