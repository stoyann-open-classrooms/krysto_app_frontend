import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  getRecyclableProducts, reset } from '../../features/recyclableProduct/recyclableProductSlice'
import Spinner from '../../components/shared/spinner/Spinner'
import RecyclableProductsCard from './RecyclableProductsCard'




function RecyclableProductsList() {
  const { recyclableProducts, isLoading, isError, isSuccess } = useSelector(
    (state) => state.recyclableProduct,
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
    dispatch(getRecyclableProducts())
  }, [])

  console.log(recyclableProducts);
  if (!recyclableProducts|| recyclableProducts.length === 0 || isLoading) {
    return <Spinner/>
  }

  return (
    <div className='flex-container'>
   {recyclableProducts.data
        ? recyclableProducts.data.map((recyclableProduct) => (
            <RecyclableProductsCard key={recyclableProduct._id} recyclableProduct={recyclableProduct}/>
          ))
        : ''}
    </div>
  )
}

export default RecyclableProductsList