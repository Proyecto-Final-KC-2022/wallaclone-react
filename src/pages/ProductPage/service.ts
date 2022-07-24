import client from '../../api/client';
import { withFormData } from '../../utils/converters';


const advertsPath = '/advertisements';

export const getAdvert = advertId => {
  return client.get(`${advertsPath}/${advertId}`);
};

export const deleteAdvert = advertId => {
  return client.delete(`${advertsPath}/${advertId}`);
};


// PENDIENTE BORRAR 

/*
export const getTags = () => {
  return client.get(`${advertsPath}/tags`);
};

export const getAdverts = () => {
  return client.get(`${advertsPath}`);
};

export const createAdvert = withFormData(newAdvert => {
  return client.post(advertsPath, newAdvert);
});

*/
