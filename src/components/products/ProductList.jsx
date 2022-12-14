import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles, reset } from '../../features/article/articleSlice'
import Spinner from '../../components/shared/spinner/Spinner'
import './products.css'
import img from '../../assets/image/Poutres et planches/applications/beam_0.jpg'


function ProductList() {
  const { articles, isLoading, isError, isSuccess } = useSelector(
    (state) => state.article,
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
    dispatch(getArticles())
  }, [])
 

  if (!articles || isLoading) {
    return <Spinner/>
  }

  console.log(articles.data);
  return (
    <div  className='flex-content'>
  
    {articles.data
        ? articles.data.map((article) => (
       <article className='card' key={article._id}>
        <div className="article-card_img-container">
        <img src={`http://localhost:5000/uploads/` + article.photo} alt="" />
        </div>
        <h3>{article.name}</h3>
        <p>{article.description}</p>
       </article>
            
          ))
        : ''}
    </div>
  )
}

export default ProductList