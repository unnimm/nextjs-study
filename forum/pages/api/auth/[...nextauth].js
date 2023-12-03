import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'GITHUB_ID',
      clientSecret: 'GITHUB_PASSWORD',
    }),
  ],
  secret : 'qawsed1230987'
};
export default NextAuth(authOptions); 