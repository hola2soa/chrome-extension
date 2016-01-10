import fetch from 'isomorphic-fetch';
import config from '../../config';


export function api(url, options={}) {
  return fetch(`${config.api.host}/v1${url}`, options);
}
