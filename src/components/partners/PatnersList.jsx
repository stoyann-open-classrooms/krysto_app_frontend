import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  getPartners, reset } from '../../features/partner/partnerSlice'
import Spinner from '../../components/shared/spinner/Spinner'
import PartnerLocation from './PartnerLocation'




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
    <div className='flex-content'>
  
      {partners.data
        ? partners.data.map((partner) => (
          <article className='card'>
            <PartnerLocation location={partner.location}/>
            <div className="card-content">
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
            </div>
            <div className="card-footer">
                <p>{partner.email}</p>
                <p>{partner.phone}</p>
                <p>{partner.website}</p>
            </div>
          </article>
          ))
        : ''}
    </div>
  )
}

export default PartnersList