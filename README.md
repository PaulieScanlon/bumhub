<p align="center">
  <a href="https://bumhub.netlify.app/">
    <img alt="Bum Hub" src="https://bumhub.netlify.app/images/bumhub-og-image.jpg" />
  </a>
</p>

<br />

# Bum Hub

[https://bumhub.netlify.app](https://bumhub.netlify.app/)

The cheekiest way to explore GitHub. A [#SillySiteChallenge](https://twitter.com/search?q=%23SillySiteChallenge) by
[@PaulieScanlon](https://twitter.com/PaulieScanlon)

BumHub first and foremost is a static site. It's built with [Gatsby](https://www.gatsbyjs.com/) and acts as a porthole
to the worlds GitHub Bum repositories.

## Merry Christmass

I've curated a list of GitHub repositories that contain both the word "bum" in the repository name and have an
interesting README. These can be seen by clicking on each one of the Christmas advent cards. A new advent card is/has
been revealed on each day of advent by checking the server time returned by a Netlify Function. Each card links to a
page that has been statically rendered using Gatsby's new
[Routes API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/) and upon page load a client side
request is made using GitHub's REST API to fetch the repositories README.md and render it to the page.

## EcoBum

BumHubs carbon usage is calculated by [EcoPing](https://ecoping.earth/) ... in human farts no less.

## Bum Bum Maker

Bum Bum Maker is good old JavaScript, HTML and Svg elements. Interactivity is provided by Reacts `useState` hook.

## Bum UI

The styles for BumHub have been created using [Theme UI](https://theme-ui.com/), it's my fave CSS-in-Js solution and
comes with a convenient [gatsby-plugin](https://theme-ui.com/packages/gatsby-plugin/)

## Bum Search

Bum Search is my attempt to demonstrate that Gatsby isn't just for static sites. It can be used to just as easily build
to "app like" functionality. After all, Gatsby IS React. Using a build time API request to the GitHub REST API i've
create a static page for each and every repository that contains the word Bum in the repository name or description. The
Search table can be used to search, sort and filter on a number of data points, repository size, language or star gazers
count for example. Feels like the kind of thing you might wanna do in any given boring commercial application right?

### Illustrations

Illustrations have been created by the wonderful [@Miss_ChatZ](https://twitter.com/Miss_ChatZ) who's not only very
talented but an absolute sweetheart. Her portfolio of work can be seen on [dribbble](https://dribbble.com/Miss_ChatZ)

### Everything else

Design, Front End, Back End, Design, Art Direction and Copy Writing was all done by me:
[@PaulieScanlon](https://twitter.com/PaulieScanlon) and if you'd like to read about my plan of attack thought process
and detailed explanations about how each section was created I kept a dev diary on my
[blog](https://paulie.dev/posts/2020/11/silly-site-challenge/)
