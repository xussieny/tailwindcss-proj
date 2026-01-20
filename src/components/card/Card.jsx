import React from 'react'

function Card({children}) {
  return (

          <div className=" max-w-sm border rounded p-3 hover:cursor-pointer m-4">
           {/* //render children as props */}
            {children} 
        
          
          </div>
  )
}

export default Card