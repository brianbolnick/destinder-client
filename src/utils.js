import { API_ROOT } from './api-config';

export function getQueryParams() {
    const query = window.location.search.substring(1);
    const pairs = query.split('&').map((str) => str.split('='));
    return pairs.reduce((memo, pair) => {
      memo[pair[0]] = pair[1];
      return memo;
    }, {});
  }

  console.log("api root", API_ROOT);

  export function fetchUserDetails(options) {
    const { token } = options;
    const url = `${API_ROOT}/user?token=${token}`;
  
    return fetch(url, {
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      // console.log(response.json());
      
      return response.json();    
    })
    .catch(error => {
      console.error('Could not fetch user details', error);
    });
  }