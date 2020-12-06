# ![alt text](https://github.com/mowens86/firebolt/blob/main/public/firebolt48.png "Firebolt") Firebolt Music App
## 30 Second Clips of Pure Bliss

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

#### 12/5/2020

Figured out a way to map through a component. I feel like I should have known this but it was a big stuck I atleast have gotten it started but will need to adjust the component itself to fit within the dashboard. 

#### 12/1/2020

Added styling and fontawesome icons to the navigation bar. Will have to come backaround to finish it when other components/links are created.


#### 11/30/2020

Worked on the styling of the navbar in the dashboard page. But mainly focused on figuring out a way to map the charts component based on the array received from the Deezer Api. May have to also create a music player that way there won't be individual ones. Found that the standard audio with controls doesn't give a whole lot of styling options.

#### 11/25/2020 - 11/27/2020

Worked on the custom page signin styling and found that getStaticProps can't work on components, it only works on pages. Also started working on integrating fontawesome for icons within the dashboard, this [article](https://dev.to/vuongddang/how-to-use-fontawesome-in-next-js-5bl5) might be able to help.


#### 11/24/2020

Found out in a [closed issue](https://github.com/nextauthjs/next-auth/issues/350) that for custom sign in pages using Next-Auth that you need to manually add-in a callbackurl otherwise it will just redirect back into the signin page rather than the callbackurl. The Next-Auth portion of this app is basically complete will need to style the custom signin page and begin working on the dashboard. 

#### 11/19/2020

Did a little research on routers and how it can be used with preventdefault.

#### 11/18/2020

After much research it seems like the custom provider set-up and Next Auth itself may have an issue. For the time being I am going to continue on with creating a sign-in with other pre-configured providers like Google, FB, and Twitter. I think those will be sufficient. Plus, I'll create my own Firebolt sign-in page, which will be fun designing.

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


