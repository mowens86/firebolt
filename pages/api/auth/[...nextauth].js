import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Pages
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  },

  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    {
      id: 'deezer',
      name: 'Deezer',
      type: 'oauth',
      version: '2.0',
      scope: `user-read-email`,
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: `https://connect.deezer.com/oauth/access_token.php`,
      authorizationUrl: `https://connect.deezer.com/oauth/auth.php?response_type=token`,
      profileUrl: `https://api.deezer.com/user/me`,
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        }
      },
      clientId: process.env.DEEZER_APP_ID,
      clientSecret: process.env.DEEZER_SECRET,
    }
  ],
  // debug: process.env.NODE_ENV === 'development',
  // secret: process.env.AUTH_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // }
};

export default (req, res) => NextAuth(req, res, options);