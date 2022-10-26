-- CreateTable
CREATE TABLE "opposicheq" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "RIB" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "motif" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "opposicheq_email_key" ON "opposicheq"("email");
