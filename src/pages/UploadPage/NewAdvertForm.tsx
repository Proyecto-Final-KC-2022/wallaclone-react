import T from 'prop-types';

import useForm from '../../hooks/useForm';
import InputFile from './InputFile';
import SelectTags from './SelectTags';

const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;

function NewAdvertForm({ onSubmit }) {
  const {
    formValue: advert,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    name: '',
    image: null,
    description: '',
    forSale: true,
    price: 0,
    tags: [],
  });
  const { name, image, description, forSale, price, tags } = advert;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" value={name} onChange={handleChange} />
      <InputFile name="image" onChange={handleChange} />
      <input
        type="checkbox"
        name="forSale"
        checked={forSale}
        onChange={handleChange}
      />
      <input type="number" name="price" value={price} onChange={handleChange} />
      <SelectTags name="tags" value={tags} onChange={handleChange} />
      
      <button disabled={!validate(validName, validPrice, validTags)}>
        Subir producto
      </button>
    </form>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
