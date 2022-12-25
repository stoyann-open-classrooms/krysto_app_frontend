import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  getPartners, reset } from '../../features/partner/partnerSlice'
import Spinner from '../../components/shared/spinner/Spinner'
import PartnerLocation from './PartnerLocation'

import '../../pages/partners/partners.css'
import { Link } from 'react-router-dom'




function PartnersList() {
  const { partners, isLoading, isError, isSuccess } = useSelector(
    (state) => state.partner,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getPartners())
  }, [])
console.log(partners);

  if (!partners|| partners.length === 0 || isLoading) {
    return <Spinner/>
  }

  return (
    <div className='flex-container'>
  
      {partners.data
        ? partners.data.map((partner) => (
          <article className='partner-card'>
            <div className="partner-card-header">

            <img src={`http://localhost:5500/uploads/` + partner.photo} alt= {partner.productName} />
            </div>
            
            <div className="partner-card-content">
            <h3>{partner.name}</h3>
            <ul>
                <li>Email : {partner.email}</li>
                <li>Télèphone: {partner.phone}</li>
                <li>Site internet: {partner.website}</li>
              </ul>
        
            </div>
           
              
              <Link className="btn btn-block"> Voir le profil</Link>

          </article>
          ))
        : ''}
    </div>
  )
}

export default PartnersList