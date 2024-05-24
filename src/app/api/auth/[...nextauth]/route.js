import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



export const authOptions={
  secret:process.env.SECRET,

  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    ],
    callbacks: {
      async redirect({ url, baseUrl }) {
        return 'http://localhost:3000' + '/chat';
      },
    },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }