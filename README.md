# ![alt text](https://github.com/mowens86/firebolt/blob/main/public/firebolt48.png "Firebolt") Firebolt Music App
## 30 Second Clips of Pure Bliss

### Find a suitable music API
After lots of consideration, it looks like I'll be using [Deezer](https://www.deezer.com/us/) as the API for this project. We might be limited to 30second songs but I think this will lead to an overall fun Next.js project.

### Functionality wants/needs
- oAuth Login
- Weekly Top Tracks
- Favorites
- Search Bar
- Radio
- Podcast
- Music Player
- Mobile Responsiveness (how in the world will this look on mobile o.0)

### The Firebolt Journey/Journal

#### 12/14/2020

Worked on the search bar and looked up some information on how to use hooks for one within React. It's definitely different from another project I did using PHP as a searchbar, but I think I learned a little about it. I also found an extension called Moesif Origins and CORS changer that can help with localhost CORS problems.

#### 12/11/2020

After a lot of toying with different things I found out that using setState was the solve to update the musicplayer with a new song and adding the id. Since setState works asynchronously it will update the component which is what I was needing. I also added a setState to keep the musicplayer from starting automatically when the page first loads and will automatically play for any song that is selected after.

#### 12/10/2020

Figured out how to get the id for each figure in the dashboard component by getting all of the figure elements as an HTMLcollection, converting them into and array, and using a forEach method to add an event listener to each of them to grab the id. 

But, now the musicplayer won't update with the variable being used as the props to hold the id. Additionally the event listeners fire off more than once when clicking on a figure element that holds the id. 

#### 12/7/2020

Adjusted the hero image in dashboard to be a background image and set the signout button in the top right corner. Also added in an embedded Deezer music player, this might save me some time from having to build one out entirely which initself would have been a project. But we'll see if I may need to down the road.

I am currently trying to get the Deezer music player to take the id's of the weekly tracks. Currently I can get the ids of the tracks to show when I click on weekly tracks in console.log which is what I need to pass into the music player to play it but I am stuck on how I can pass information from the charts component to the music player component. 

Since they're both children components I am not sure if I can pass the id I need between one another. I may have to adjust the charts to be a parent component of the music player component. I will need to do more research.

#### 12/6/2020

Finally added in a mapped out component of the top tracks and started working on the layout of this component. Additionally, added in a hero image and added a signout button. Will have to adjust the image to be a background image and work the signout button to be layered over the background image.

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


