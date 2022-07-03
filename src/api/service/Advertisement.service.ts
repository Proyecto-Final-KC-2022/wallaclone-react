import { Advert } from "../../models/Advert.model";
import ApiClient from "../client";
const advertsBaseUrl = "/advertisements";

class AdvertisementService {
  constructor() {}
  getAllAdvertisements(): Promise<Array<Advert>> {
    const url = `${advertsBaseUrl}`;
    return ApiClient.get(url);
  }

  getAdvert(id: string): Promise<Advert> {
    const url = `${advertsBaseUrl}/${id}`;
    return ApiClient.get(url);
  }

  getTags(): Promise<string> {
    const url = `${advertsBaseUrl}/tags`;
    return ApiClient.get(url);
  }

  createAdvert(body): Promise<any> {
    const url = `${advertsBaseUrl}`;
    return ApiClient.post(url, body);
  }

  deleteAdvert(id): Promise<any> {
    const url = `${advertsBaseUrl}/${id}`;
    return ApiClient.delete(url);
  }
}

export default new AdvertisementService();
