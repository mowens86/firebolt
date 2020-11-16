import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
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
      scope: `https://connect.deezer.com/oauth/auth.php?app_id=${process.env.deezer_app_id}&redirect_uri=${process.env.deezer_redirect_uri}&perms=basic_access,email`,
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      requestTokenUrl: 'https://connect.deezer.com/oauth/access_token.php',
      authorizationUrl: `https://connect.deezer.com/oauth/access_token.php?app_id=${process.env.deezer_app_id}&secret=${process.env.deezer_secret}&code=THE_CODE_FROM_ABOVE`,
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
  ]
};

export default (req, res) => NextAuth(req, res, options);