import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArticleCategories, reset } from '../../features/articleCategory/articleCategorySlice'
import './productCategories.css'
import { Link } from 'react-router-dom'
import Spinner from '../shared/spinner/Spinner'


function ProductCategoriesList() {
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

          <Link to={`/nos-produits-categorie/${articleCategories._id}`}>
       <article className='card' key={articleCategories._id}>
        <div className="article-card_img-container">
        <img src={`http://localhost:5500/uploads/` + articleCategories.photo} alt="" />
        </div>
        <h3>{articleCategories.name}</h3>
       </article>
          </Link>
            
          ))
        : ''}
    </div>
  )
}

export default ProductCategoriesList