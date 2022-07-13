import { AxiosResponse } from "axios";
import client, { configureClient, resetClient } from "../../api/client";
import storage from "../../utils/storage";

const authPath = "/api";

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ token }: any) => {
      configureClient({ token });
      return token;
    })
    .then((accessToken) => {
      storage.remove("auth");
      storage.removeSession("auth");
      if (remember) {
        storage.set("auth", accessToken);
      } else {
        storage.setSession("auth", accessToken);
      }
    });
};

export const logout = () => {
  return Promise.resolve().then(resetClient).then(()=>{
    storage.clear();
    storage.clearSession();
  });
};
