import axios from 'axios';

/*========================================================
 * function Name: requestApiClient
 * function Purpose: check api calling is valid
 * function Parameters: method, baseURL, url, data, headers
 * function ReturnType: data and status
 * function Description: requestApiClient method api calling using fetch
 *=====================================================*/

/**
 * @typedef {Object} ApiClientRequestConfig
 * @prop {string} [method]
 * @prop {string} url
 * @prop {string | FormData} [data]
 * @prop {{ [header: string]: string }} [headers]
 *
 * @typedef {Object} ApiClientResponse
 * @prop {*} data
 * @prop {number} status
 */

export default class ApiClient {
  /** @param {{ baseURL: string }} config */
  constructor({baseURL}) {
    this.config = {baseURL};
  }

  /**
   * @param {ApiClientRequestConfig} config
   * @returns {Promise<ApiClientResponse>}
   */

  async requestApiClient(config) {
    const {method, baseURL, url, data, headers} = {
      ...this.config,
      ...config,
    };
    const fetchUrl = baseURL + url;

    let fetchResponse;
    if (method == 'GET') {
      fetchResponse = await axios.get(fetchUrl, {headers});
    } else if (method == 'POST') {
      fetchResponse = await axios.post(fetchUrl, data, {headers});
    } else if (method == 'DELETE') {
      fetchResponse = await axios.delete(fetchUrl, {headers});
    } else if (method == 'PUT') {
      fetchResponse = await axios.put(fetchUrl, data, {headers});
    }
    let response = fetchResponse.data;

    return {
      data: response,
      status: fetchResponse.status,
    };
  }
}
