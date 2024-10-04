import { withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware";
// import { useSession } from "next-auth/react";
// import { NextRequest } from "next/server";

export default withAuth({
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized: ({ req }) => {
      // verify token and return a boolean
      const sessionToken = req.cookies.get("next-auth.session-token");
      if (sessionToken) return true;
      else return true;
    },
  },
});

export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
