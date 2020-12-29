import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // // Pages
  pages: {
    signIn: '/auth/signin',
  },

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET
    // })
  ],
  debug: true,
};


export default (req, res) => NextAuth(req, res, options);