import React, { useState, useEffect } from 'react'

function UseFetch() {
    const [products, setproducts] = useState([]);
    const [url, setUrl] = useState ('http://localhost:5000/products');
     useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setproducts(result);
        }
        dataFetch();
     }, [url])
  return (
    <div>
        <ul >
            {products.map((prod, index) => <li key={prod.id}>
                <div>
                    <img src= {prod.img} alt="" />
                    <p>
                        <span>{prod.name}</span>
                        <span>{prod.description}</span>
                        <span>{prod.price}</span>

                    </p>
                </div>
           </li>)}
        </ul>
        
    </div>
  )
}

export default UseFetch