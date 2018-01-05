let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:5000';
} else {
  // backendHost = 'https://destinder-api.herokuapp.com';
  backendHost = 'http://production.yvrgehncpb.us-east-1.elasticbeanstalk.com';
}

export const API_URL = `${backendHost}`;