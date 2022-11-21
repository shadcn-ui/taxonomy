/*
  Warnings:

  - A unique constraint covering the columns `[stripe_customer_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_subscription_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_userId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `stripe_current_period_end` DATETIME(3) NULL,
    ADD COLUMN `stripe_customer_id` VARCHAR(191) NULL,
    ADD COLUMN `stripe_price_id` VARCHAR(191) NULL,
    ADD COLUMN `stripe_subscription_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_stripe_customer_id_key` ON `users`(`stripe_customer_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_stripe_subscription_id_key` ON `users`(`stripe_subscription_id`);
