// app/lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signin`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );

        const result = await res.json();

        if (
          res.ok &&
          result.responseStatus === "SUCCESS" &&
          result.data.user.role === "CUSTOMER"
        ) {
          return {
            id: result.data.user.id,
            email: result.data.user.email,
            username: result.data.user.username,
            role: result.data.user.role,
            accessToken: result.data.token,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.role = token.role;
      session.user.username = token.username;
      return session;
    },
  },
  pages: { signIn: "/auth/signin" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 30 },
  jwt: { maxAge: 60 * 60 * 24 * 30 },
};
