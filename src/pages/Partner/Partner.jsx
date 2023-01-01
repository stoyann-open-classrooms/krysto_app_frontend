import React from 'react'
import { useParams } from 'react-router-dom'

function Partner() {

    const params = useParams()



  return (
    <div className='page-content'> partenaire {params.id}</div>
  )
}

export default Partner