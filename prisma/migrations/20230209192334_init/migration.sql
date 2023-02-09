/*
  Warnings:

  - You are about to drop the column `downloadLink` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[downloadUrl]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `downloadUrl` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Image_downloadLink_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "downloadLink",
ADD COLUMN     "downloadUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_downloadUrl_key" ON "Image"("downloadUrl");
