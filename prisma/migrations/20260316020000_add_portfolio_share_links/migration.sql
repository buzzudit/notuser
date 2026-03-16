-- CreateTable
CREATE TABLE "public"."PortfolioShareLink" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfolioShareLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioShareLink_code_key" ON "public"."PortfolioShareLink"("code");

-- CreateIndex
CREATE INDEX "PortfolioShareLink_createdAt_idx" ON "public"."PortfolioShareLink"("createdAt");
