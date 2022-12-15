import React from 'react'
import RecyclableProductsList from '../components/recyclableProducts/RecyclableProductsList'
import dailyPlastic from '../assets/image/dailyplastic.png'


function RecyclableProducts() {
  return (
    <div className='page-content'>
        <section className='heading'>
            <h1>Les consignes de tri Krysto</h1>
        </section>
        <div className="image-container">
          <img src={dailyPlastic} alt="" />
        </div>
        <RecyclableProductsList/>
    </div>
  )
}

export default RecyclableProducts