import client from "../../api/client";

const advertsPath = "/advertisements";

export const getAdvert = (advertId) => {
  return client.get(`${advertsPath}/${advertId}`);
};

export const deleteAdvert = (advertId) => {
  return client.delete(`${advertsPath}/${advertId}`);
};
