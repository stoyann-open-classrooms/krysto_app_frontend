import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArticleCategories, reset } from '../../features/articleCategory/articleCategorySlice'
import './productCategories.css'
import { Link } from 'react-router-dom'
import Spinner from '../shared/spinner/Spinner'


function ProductCategoriesList() {

  const userRole = JSON.parse(localStorage.getItem('userRole'))

  const { articleCategories, isLoading, isError, isSuccess } = useSelector(
    (state) => state.articleCategories,
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
    dispatch(getArticleCategories())
  }, [])
 

  if (!articleCategories || isLoading) {
    return <Spinner/>
  }

  console.log(articleCategories.data);
  return (
    <div  className='flex-content'>
  
    {articleCategories.data
        ? articleCategories.data.map((articleCategories) => ( 

          <Link className='card-categories' to={`/nos-produits-categorie/${articleCategories._id}`}>
       <article key={articleCategories._id}>
        <div className="card-categories-header">
        <img src={`http://localhost:5500/uploads/` + articleCategories.photo} alt="" />
        </div>
        <div className="card-categories-txt">

        <h3>{articleCategories.name}</h3>
        </div>
       </article>
          </Link>
            
          ))
        : ''}
    </div>
  )
}

export default ProductCategoriesList