import { Advert } from "../../models/Advert.model";
import ApiClient from "../client";
import { getQueryParams, getUrlParams } from "./service.utils";
const advertsBaseUrl = "/advertisements";

class AdvertisementService {
  constructor() {}
  getAllAdvertisements(
    payload: Payload<GetAllAdvertisementsQueryParams>
  ): Promise<Array<Advert>> {
    const queryParams = payload.queryParams;
    const urlParams = payload.urlParams;
    const path = `${advertsBaseUrl}${getUrlParams(urlParams)}${getQueryParams(queryParams)}`;
    return ApiClient.get(path);
  }

  getAdvert(id: string): Promise<Advert> {
    const url = `${advertsBaseUrl}/${id}`;
    return ApiClient.get(url);
  }

  getTags(): Promise<Array<string>> {
    const url = `/availableTags`;
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

export type Payload<T> = {
  urlParams?: Array<string>;
  queryParams?: T;
};
export type GetAllAdvertisementsQueryParams = {
  start?: number;
  limit?: number;
  sort?: string;
  tags?: string;
  forSale?: boolean;
  price?: string;
  name?: string;
};
export default new AdvertisementService();
