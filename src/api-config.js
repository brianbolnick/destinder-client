let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:5000';
} else {
  backendHost = 'https://destinder-api.herokuapp.com';
}

export const API_ROOT = `${backendHost}`;