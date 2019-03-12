# hockey-cards: Live Roster Hockey Cards

[Check it out](http://cgilroy.github.io/hockey-cards)

This is the second project I've done using the NHL API, this time looking at roster and player data to create cool vintage hockey cards.

## Skills Developed
* Next.js
* React.js - using the newly released React Hooks feature
* react-spring - animation library used for animating the card flip and pick-up animations
* SVG manipulation - created custom card template, manipulated using <filter> and CSS
* CSS - lots of work with animations, keyframes and timing; working with rotate3d
* Node.js NPM - learning more about deployment, webpack, manipulating and configuring project export
    * [react-spring](https://www.npmjs.com/package/react-spring)
    * [react-with-gesture](https://www.npmjs.com/package/react-with-gesture) - for drag detection and response

## Known Issues
* The player images aren't always centered; this is due to the image source I am using not having the subject centered all the time.  Not really much I can do here as the image source is much too wide for a portrait view card (unless I changed the card to landscape).

## Project Conclusions
* After gaining confidence with the React.js library, I enjoyed checking out Next.  Was super quick to get the project up and running, and very easy to use.  It was interesting getting to see the server-side rendering in action, even if this project is pretty light-weight by nature. In the future I'd like to look at the routing and code-splitting functionality within Next.
* I used React Hooks exclusively for this project, and loved how light-weight and simple they were to use.
* This project also gave me lots of work to do with graphics and animation.  I gained skills in Adobe Illustrator creating a template for each card, and learned about manipulating this SVG using React, JS, and CSS.

### Acknowledgments
* [Paul Henschel](https://github.com/drcmda) - created [this](https://codesandbox.io/s/j0y0vpz59) flick animation which I altered for use in this project
* Once again, the comprehensive data within the NHL API
