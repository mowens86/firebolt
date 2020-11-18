# ![alt text](https://github.com/mowens86/firebolt/blob/main/public/firebolt48.png "Firebolt") Firebolt Music App

### Find a suitable music API
After lots of consideration, it looks like I'll be using [Deezer](https://www.deezer.com/us/) as the API for this project. We might be limited to 30second songs but I think this will lead to an overall fun Next.js project.

### Functionality wants/needs
- oAuth Login
- Create Playlist
- Favorites
- Search Bar
- Music Player
- Mobile Responsiveness (how in the world will this look on mobile o.0)

### The Firebolt Journey/Journal

#### 11/17/2020

Looked at other PR's that used the custom provider. It loks like I may have the set-up correct or atleast am close. But now I am getting a 404 error for the oAuth Callback. But it looks like I atleast am getting an access_token.

#### 11/16/2020

Attempted to try using NextAuth.js, using the custom provider however I am unsure of what links to input in the custom space as it isn't clear cut with the way Deezer exaplins it. After continuously trying different things and reading the docs, I may have stumbled across a complete simulation oAuth 2.0 access with Next.js and Deezer. I am pretty stoked to get through to the callback page after authorization. Will need to test this out more to ensure this is actually right.

#### 11/14/2020

Short update, currently taking a ReactJS course and decided to break for a bit and ended up doing more oAuth research, it looks like NextAuth.js just might be my problem solver for the oAuth login afterall. Note to self to check out the "Using a custom provider" in the NextAuth.js [documentation](https://next-auth.js.org/configuration/providers)

#### 11/7/2020

Will come back to this. After much debate, I think I need to learn more about ReactJS, to get more backbone on how it works, and then learn more about NextJS and oAuth. I'll be back...in maybe a few weeks after some udemy courses and youtube.

#### 11/6/2020

Attempted to slice code out of the pulled in url but from the first step of the Deezer API but am currently getting a "Warning: Prop 'href' did not match" It looks like server isn't producing the code into the url link but the client side is and is giving this mismatch. Even so, if I got it to work I'd be linking over to the access token, which in essence, doesn't do what I need for the user. I think I need to think about how to get the access token through different means. Possibly using a GET request after I get the initial code first steps code of the Deezer Api.

#### 11/5/2020

Researched the next/router Api to see if that might be able to help with my url problem. Figured it out before giving up for the night. Importing the useRouter and console.logging the asPath part of the router will pull in the url and includes the code needed from Deezer. Looking forward to some bigger steps in the next couple of days.

#### 11/4/2020

Really stuck on how Next.js works with oAuth for the Deezer API. I am only able to direct to the login for Deezer and get back the first part of the code needed to complete authorization for the Firebolt App. On a positive note I learned about the built-in encodeUrlComponent() function to help with the the url.

#### 11/3/2020

Learned a little about Auth0, NextAuth, and oAuth, but ultimately found I don't really need it for the Deezer API since they require a few steps to get an authorization. Currently completed first step of oAuth process for Deezer. My plan, once first step is complete, try cutting the code in the last part of the URL and using next.config.js to redirect using all the environment variables and cut code to get the access token.

- Learned about Auth0 in Next.js - [Auth0 Guide](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/) | [YouTube Video - How to add Autho0 to Nextjs](https://www.youtube.com/watch?v=vrj9gCSjzw0)

- Learned about NextAuth.js - [NextAuth.js Homepage](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/)


