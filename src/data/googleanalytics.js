import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-147601557-4"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})