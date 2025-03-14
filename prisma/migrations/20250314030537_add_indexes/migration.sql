-- CreateIndex
CREATE INDEX "Post_title_content_idx" ON "Post"("title", "content");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");
