import React, { useState, useEffect } from 'react'
import loadingImg from '../assets/loading.gif'
function UseFetch() {
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState ()
    const [url, setUrl] = useState ('http://localhost:5000/products');
     useEffect(() => {
        const dataFetch = async () => {
          setLoading(true)
            try{
              const response = await fetch(url);
              if (!response){
              throw new Error (response.status)
            }
            const result = await response.json();
            setLoading(false)
            setproducts(result);
        } catch(err){
          setError(err.message)
          setLoading(false)
        }
      }
        dataFetch();
     }, [url])
  return (
    
     <div className="container mx-auto p-6">
      <div className="flex justify-center flex-wrap">
        {error && <p className='text-red text-4xl font-mono'> {error}</p>}
        {loading && <img className='w-10 size-15 animate-accordion-down' src={loadingImg}/> }
        {products.map((prod, index) => (
          <div 
            key={`product-${prod.id}-${index}`} 
            className="max-w-sm border rounded p-3 hover:cursor-pointer m-4"
          >
            <img className="rounded-md" src={prod.img} alt={prod.name} />
            <h1 className="text-2xl my-7">{prod.name}</h1>
            <p>{prod.description}</p>
            <p className='mt-2'>price: {prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseFetch