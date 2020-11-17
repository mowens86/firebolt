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
      // scope: `https://connect.deezer.com/oauth/auth.php?app_id=${process.env.deezer_app_id}&redirect_uri=${process.env.deezer_redirect_uri}&perms=basic_access,email`,
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: `https://connect.deezer.com/oauth/access_token.php`,
      requestTokenUrl: `http://redirect_uri?code=`,
      authorizationUrl: `https://connect.deezer.com/oauth/auth.php`,
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
      redirectUri: process.env.DEEZER_REDIRECT_URI,
    }
  ],
  // debug: process.env.NODE_ENV === 'development',
  // secret: process.env.AUTH_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // }
};

export default (req, res) => NextAuth(req, res, options);

//https://connect.deezer.com/oauth/auth.php?app_id=443402&redirect_uri=http://localhost:3000/api/auth/callback/deezer&perms=basic_access,email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdeezer&scope=&state=8dc79c59eb7787aa3d386bb712f3b3c3841584664ebfed1b1e213322d3735f5c&client_id=443402