const signupBaseUrl = "/user/signup";
import ApiClient from "../client";

class UserService {
  constructor() {}
  registerUser(body): Promise<any> {
    const url = `${signupBaseUrl}`;
    return ApiClient.post(url, body);
  }
}

export default new UserService();
