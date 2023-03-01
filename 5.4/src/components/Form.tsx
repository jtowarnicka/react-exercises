import * as React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ handleAddProd }) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form
      className="form"
      onSubmit={handleSubmit(async (data) => {
        await handleAddProd(data);
        reset();
      })}
    >
      <label>title</label>
      <input
        name="title"
        {...register('title', { required: 'Please enter title.' })}
      />
      <label htmlFor="">price</label>
      <input
        name="price"
        type="number"
        {...register('price', { required: 'Please enter price.', min: 0 })}
      />
      <label htmlFor="">description</label>
      <input
        name="description"
        {...register('description', { required: 'Please enter description.' })}
      />
      <label htmlFor="">category</label>
      <select {...register('category', { required: true })}>
        <option value="">Select...</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="man's clothing">man's clothing</option>
        <option value="woman's clothing">woman's clothing</option>
      </select>
      <label htmlFor="">image</label>
      <input
        name="image"
        {...register('image', { required: 'Please enter url.' })}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
