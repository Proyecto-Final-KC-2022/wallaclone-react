import { AxiosResponse } from 'axios';
import client, { configureClient, resetClient } from '../../api/client';
import storage from '../../utils/storage';

const authPath = '/api';

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ accessToken }:any) => {
      configureClient({ accessToken });
      return accessToken;
    })
    .then(accessToken => {
      storage.remove('api');
      if (remember) {
        storage.set('api', accessToken);
      }
    });
};

export const logout = () => {
  return Promise.resolve().then(resetClient).then(storage.clear);
};
