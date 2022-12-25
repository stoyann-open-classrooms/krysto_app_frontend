import React from 'react'
import recyclableProductService from '../../features/recyclableProduct/recyclableProductService'
import '../../pages/recyclableProducts/recyclableProducts.css'
function RecyclableProductsCard({recyclableProduct}) {
  return (
    <div className='recyclableProduct-card'>
         <div className="recylableProduct-card-header">
         <img src={`http://localhost:5500/uploads/` + recyclableProduct.photo} alt="" />
         </div>
         <div className="recyclableProduct-card-content">
            <h3>{recyclableProduct.productName}</h3>
         </div>
    </div>
  )
}

export default RecyclableProductsCard