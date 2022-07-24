import React from 'react';
import T from 'prop-types';

import { ConfirmationButton } from '../../components/common';
import placeholder from '../../../assets/images/placeholder.png';
import { Advert } from "../../models/Advert.model";

// import { advert } from '../propTypes'; PENDIENTE BORRAR

function AdvertDetail({ name, sale, price, tags, photo, onDelete }) {
  return (
    <div>
      <p>{name}</p>
      <p>{sale ? 'Sell' : 'Buy'}</p>
      <p>{tags.join(', ')}</p>
      <p>{price}</p>
      <img
        src={photo || placeholder}
        alt={name}
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
      <ConfirmationButton confirmation="Are you sure?" onConfirm={onDelete}>
        Delete
      </ConfirmationButton>
    </div>
  );
}

export default AdvertDetail;
