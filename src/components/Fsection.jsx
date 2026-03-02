import React from 'react'
import axios from 'axios'

function Fsection() {
  const [products, setProducts] = React.useState([]);
  const handleproducts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  React.useEffect(() => {
    handleproducts();
  }, []);

  return (
    <div className='bg-gradient-to-r from-gray-300 to-gray-500 h-screen'>
      <h1 className='text-2xl font-bold text-white flex justify-center'>Products</h1>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {products.map((product) => (
          <div key={product._id} className='bg-white p-4 rounded-lg shadow-md'>
            <img src={`http://localhost:7000/${product.image}`} alt={product.name} className='w-full h-48 object-cover mt-2 rounded hover:h-60' />
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray-800'>${product.price}</p>
            <p className='text-gray-600'>{product.description}</p>
           
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fsection