-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "favouriteCryptos" TEXT[] DEFAULT ARRAY[]::TEXT[];
