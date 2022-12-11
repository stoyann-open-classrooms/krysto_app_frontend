
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProfil, reset } from '../../features/user/userSlice'
import Spinner from '../../components/shared/spinner/Spinner'

function PrivateHome() {


  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.profil,
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
    dispatch(getProfil())
  }, [])


console.log(profil.data);

  if (!profil.data || isLoading) {
    return <Spinner />
  } else {
  return (
    <div className="page-content">
 <section className="heading">
  <h1>bienvenue</h1>
 </section>
    </div>
  )
}
}

export default PrivateHome