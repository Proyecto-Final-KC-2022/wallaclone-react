const signupBaseUrl = "/user/signup";
import ApiClient from "../client";
import { Chat } from "../../models/Chat.model";

class UserService {
  constructor() {}
  registerUser(body): Promise<any> {
    const url = `${signupBaseUrl}`;
    return ApiClient.post(url, body);
  }

  getUserChats(): Promise<Array<Chat>> {
    return ApiClient.get(`/getUserChats`);
  }
}

export default new UserService();
