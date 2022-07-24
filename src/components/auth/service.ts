import { AxiosResponse } from "axios";
import client, { configureClient, resetClient } from "../../api/client";
import storage from "../../utils/storage";
import { parseJwt } from "../../utils/utils";

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
  return Promise.resolve()
    .then(resetClient)
    .then(() => {
      const auth = storage.get("auth") || storage.getSession("auth");
      const jwtToken = auth?.replace('"', "");
      const userId = parseJwt<{ _id?: string }>(jwtToken)?._id;
      storage.clear();
      storage.clearSession();
      return userId;
    });
};
