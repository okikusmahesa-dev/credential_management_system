-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credential_groups" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "parent_id" UUID,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" UUID,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,

    CONSTRAINT "credential_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credential_categories" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" UUID,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,

    CONSTRAINT "credential_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "group_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "encrypted_value" TEXT NOT NULL,
    "url" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" UUID,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "credential_groups_user_id_idx" ON "credential_groups"("user_id");

-- CreateIndex
CREATE INDEX "credential_groups_parent_id_idx" ON "credential_groups"("parent_id");

-- CreateIndex
CREATE INDEX "credential_groups_deleted_at_idx" ON "credential_groups"("deleted_at");

-- CreateIndex
CREATE INDEX "credential_categories_user_id_idx" ON "credential_categories"("user_id");

-- CreateIndex
CREATE INDEX "credential_categories_deleted_at_idx" ON "credential_categories"("deleted_at");

-- CreateIndex
CREATE INDEX "credentials_user_id_idx" ON "credentials"("user_id");

-- CreateIndex
CREATE INDEX "credentials_group_id_idx" ON "credentials"("group_id");

-- CreateIndex
CREATE INDEX "credentials_category_id_idx" ON "credentials"("category_id");

-- CreateIndex
CREATE INDEX "credentials_deleted_at_idx" ON "credentials"("deleted_at");

-- AddForeignKey
ALTER TABLE "credential_groups" ADD CONSTRAINT "credential_groups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credential_groups" ADD CONSTRAINT "credential_groups_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "credential_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credential_categories" ADD CONSTRAINT "credential_categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "credential_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "credential_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
