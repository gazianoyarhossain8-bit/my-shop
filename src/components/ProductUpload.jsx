import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function ProductUpload() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) =>{
    setProduct({
      ...product,[e.target.name] : e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", image);

    try{
      const res = await axios.post(
        "https://shop-backend-mz62.onrender.com/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/ form-data",
          },
        }
      );
      console.log(res.data);
      alert("product upload")
    } catch(error){
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
       name='name'
       placeholder='product name'
       onChange={handleChange}/>

<input type='number'
       name='price'
       placeholder='product price'
       onChange={handleChange}/>
<textarea
name='description'
placeholder='Description'
onChange={handleChange}/>

<input type="file"
onChange={handleImageChange} />
<button type='submit'>upload product</button>
       

    </form>
    
  )
}

export default ProductUpload