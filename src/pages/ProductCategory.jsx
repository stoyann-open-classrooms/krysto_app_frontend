import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getArticleCategory } from '../features/articleCategory/articleCategorySlice'
import Spinner from '../components/shared/spinner/Spinner'


function ProductCategory() {

  const params = useParams()

  const { articleCategory, isLoading, isError, isSuccess } = useSelector(
    (state) => state.articleCategories,
  )
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(getArticleCategory(params.id))
  }, [])
  console.log(articleCategory)

  if (!articleCategory.data || isLoading) {
    return <Spinner />
  }
  return (
    <>

    <div className="page-content">
      <section className="heading">

           <h1>{articleCategory.data.name}</h1>
    <p>{articleCategory.data.description}</p>
      </section>

      <section className="articles-card-container">
        
    {articleCategory.data.articles
        ? articleCategory.data.articles.map((article) => ( 

          <Link to={`/nos-produits-categorie/${article._id}`}>
       <article className='card' key={article._id}>
        <div className="article-card_img-container">
        <img src={`http://localhost:5500/uploads/` + article.photo} alt="" />
        </div>
     
        <p>{article.description}</p>
       </article>
          </Link>
            
          ))
        : ''}
      </section>
    </div>

    </>
  )
}

export default ProductCategory