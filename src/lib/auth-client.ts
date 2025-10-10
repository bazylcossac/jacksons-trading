import { createAuthClient } from "better-auth/react";
export const { useSession, signOut, signIn, signUp, getSession, revokeOtherSessions } =
  createAuthClient();
