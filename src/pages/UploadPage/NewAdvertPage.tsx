import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import AdvertisementService from '../../api/service/Advertisement.service';
import NewAdvertForm from './NewAdvertForm';
import useMutation from '../../hooks/useMutation';

function NewAdvertPage() {
  const navigate = useNavigate();
  const mutation = useMutation(AdvertisementService.createAdvert);

  const handleSubmit = newAdvert => {
    mutation.execute(newAdvert).then(({ id }) => navigate(`/advertisements/${id}`));
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
