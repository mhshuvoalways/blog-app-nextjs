import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = { email, role: "admin" };
        if ((email === "namnayit@gmail.com", password === "123456")) {
          return user; // return must be an object
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token = user);
      return token;
    },
    async session({ session, user, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/admin/signin",
  },
});

export default authOptions;
