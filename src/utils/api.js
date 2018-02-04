import axios from 'axios'
import md5 from 'md5'
import { apikey, privatekey, baseUrl } from './config'

const api = baseUrl

const params = {
  apikey,
  ts: Date.now(),
  hash: md5(Date.now() + privatekey + apikey),
}

const headers = {
  Accept: '*/*',
}

export const getCharacters = () =>
  axios.get(`${api}characters`, {
    params,
    headers,
  })
    .then(data => data.data)
    .catch(error => console.error(error))
