import React from 'react'
import RecyclableProductsList from '../components/recyclableProducts/RecyclableProductsList'

function RecyclableProducts() {
  return (
    <div className='page-content'>
        <section className='heading'>
            <h1>Les consignes de tri Krysto</h1>
        </section>
        <RecyclableProductsList/>
    </div>
  )
}

export default RecyclableProducts