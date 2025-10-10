import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { trpcServer } from "@/trpc/trpcServer";
import { headers } from "next/headers";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
export const auth = betterAuth({
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_ID as string,
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await trpcServer.resend.sendVerificationEmail({
        email: user.email,
        firstName: user.name,
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
}
