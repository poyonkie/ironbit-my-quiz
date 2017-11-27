// Dependencies
import queryString from 'query-string';

// Config
import config from '../../config';

export function apiFetch(endpoint, options = {}, query = false) {
  let qs;

  if (query) {
    qs = queryString.stringify(query);
  }

  const getPromise = async() => {
    try {
      const fetchOptions = apiOptions(options);
      const fetchEndpoint = apiEndpoint(endpoint, qs);
      const response = await fetch(fetchEndpoint, fetchOptions);
      return response.json();
    } catch (e) {
      throw e;
    }
  };

  return getPromise();
}

export function apiEndpoint(endpoint, qs) {
  let query = '';

  if (qs) {
    query = `?${qs}`
  }

  return `${endpoint.match(/^https?:/) ? '' : config.api.clarovideo.url}${endpoint}${query}`;
}

export function apiOptions(option = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-type': 'application/json'
    },
    body = false
  } = option;

  let newOptions = {
    method,
    headers
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}
