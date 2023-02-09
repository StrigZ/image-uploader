-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "firebaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "downloadLink" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_firebaseId_key" ON "Image"("firebaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_downloadLink_key" ON "Image"("downloadLink");
