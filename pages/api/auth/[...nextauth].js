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
    // Providers.Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET
    // }),
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    // Providers.Spotify({
    //   clientId: process.env.SPOTIFY_CLIENT_ID,
    //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    // }),
    // {
    //   id: 'deezer',
    //   name: 'Deezer',
    //   type: 'oauth',
    //   version: '2.0',
    //   scope: `basic_access,email`,
    //   params: { grant_type: 'authorization_code' },
    //   accessTokenUrl: `https://connect.deezer.com/oauth/access_token.php?`,
    //   authorizationUrl: `https://connect.deezer.com/oauth/auth.php?response_type=token`,
    //   profileUrl: `https://api.deezer.com/user/me`,
    //   profile: (profile) => {
    //     console.log(profile);
    //     return {
    //       id: profile.id,
    //       name: profile.name,
    //       email: profile.email,
    //       image: profile.picture
    //     };
    //   },
    //   clientId: process.env.DEEZER_APP_ID,
    //   clientSecret: process.env.DEEZER_SECRET,
    // }
  ],
  debug: true,
  // secret: process.env.AUTH_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
};

export default (req, res) => NextAuth(req, res, options);