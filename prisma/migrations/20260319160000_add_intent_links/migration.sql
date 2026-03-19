-- CreateTable
CREATE TABLE "IntentLink" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "org" TEXT NOT NULL,
    "positionTitle" TEXT,
    "positionUrl" TEXT,
    "intentType" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntentLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IntentLink_code_key" ON "IntentLink"("code");

-- CreateIndex
CREATE INDEX "IntentLink_createdAt_idx" ON "IntentLink"("createdAt");
