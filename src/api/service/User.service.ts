const signupBaseUrl = "/user/signup";
const userBaseUrl = "/user";
import { User } from "../../models/User.model"
import ApiClient from "../client";
import { Chat } from "../../models/Chat.model";
import { getQueryParams, getUrlParams } from "./service.utils";

class UserService {
  constructor() {}
  registerUser(body): Promise<any> {
    const url = `${signupBaseUrl}`;
    return ApiClient.post(url, body);
  }

  getUserChats(payload?: Payload<GetUserChats>): Promise<Array<Chat>> {
    const path = `/getUserChats${getUrlParams(
      payload?.urlParams
    )}${getQueryParams(payload?.queryParams)}`;
    return ApiClient.get(path);
  }

  getUser(id: string): Promise<User> {
    const url = `${userBaseUrl}/${id}`;
    console.log(url);
    return ApiClient.get(url);
  }
}

export type Payload<T> = {
  urlParams?: Array<string>;
  queryParams?: T;
};
export type GetUserChats = {
  advertId?: string;
};

export default new UserService();
