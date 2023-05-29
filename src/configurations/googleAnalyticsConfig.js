import ReactGA from 'react-ga';

const TRACKING_ID = "UA-269237971-1";
ReactGA.initialize(TRACKING_ID);

export const googleAnalytics = () =>{
    ReactGA.pageview(window.location.pathname + window.location.search);
}