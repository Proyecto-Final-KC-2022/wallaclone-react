import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import AdvertisementService from '../../api/service/Advertisement.service';
import NewAdvertForm from './NewAdvertForm';
import useMutation from '../../hooks/useMutation';
import { objectToFormData } from '../../utils/converters';

function NewAdvertPage() {
  const navigate = useNavigate();
  const mutation = useMutation(AdvertisementService.createAdvert);

  const handleSubmit = newAdvert => {
    const newAdvertFormData = objectToFormData(newAdvert);
    mutation.execute(newAdvertFormData).then((response) => {navigate(`/product/${response['name']}/${response['_id']}`)});
  };

  if (mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NewAdvertForm onSubmit={handleSubmit} />
    </>
  );
}

export default NewAdvertPage;
