"use client";

import { SessionProvider } from "next-auth/react";

interface AuthContextPage {
  children: React.ReactNode;
}
function AuthContext({ children }: AuthContextPage) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthContext;
