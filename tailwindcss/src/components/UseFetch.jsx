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
                <section className="my-3 mx-auto">
                        <div className="flex justify-center flex-wrap">
                          <card className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
                            <img className="rounded-md" src={prod.img} alt="" />
                            <h1 className="text-2xl my-7">{prod.name}</h1>
                            <p>
                              {prod.description} </p>
                            <p className='mt-2'> price: {prod.price}</p>
                            </card>
                            <card className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
                            <img className="rounded-md" src={prod.img} alt="" />
                            <h1 className="text-2xl my-7">{prod.name}</h1>
                            <p>
                              {prod.description} </p>
                            <p className='mt-2'> price: {prod.price}</p>
                            </card>
                            <card className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
                            <img className="rounded-md" src={prod.img} alt="" />
                            <h1 className="text-2xl my-7">{prod.name}</h1>
                            <p>
                              {prod.description} </p>
                            <p className='mt-2'> price: {prod.price}</p>
                            </card>
                            <card className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
                            <img className="rounded-md" src={prod.img} alt="" />
                            <h1 className="text-2xl my-7">{prod.name}</h1>
                            <p>
                              {prod.description} </p>
                            <p className='mt-2'> price: {prod.price}</p>
                            </card>
                            <card className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
                            <img className="rounded-md" src={prod.img} alt="" />
                            <h1 className="text-2xl my-7">{prod.name}</h1>
                            <p>
                              {prod.description} </p>
                            <p className='mt-2'> price: {prod.price}</p>
                            </card>
                          </div>
                          </section>
           </li>)}
        </ul>
        
    </div>
  )
}

export default UseFetch