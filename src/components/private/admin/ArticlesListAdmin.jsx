import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArticleCategories } from "../../../features/articleCategory/articleCategorySlice";
import AccessDenied from "../../../pages/accessDenied/AccessDenied";
import Spinner from "../../shared/spinner/Spinner";

function ArticlesListAdmin() {
  const { articleCategories, isLoading, isError, isSuccess } = useSelector(
    (state) => state.articleCategories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleCategories());
  }, []);

  if (!articleCategories || isLoading) {
    return <Spinner />;
  }
  console.log(articleCategories.data);

  return (
    <div className="page-content">

        
        {articleCategories.data
        ? articleCategories.data.map((articleCategories) => ( 


          <div>
            <h3>{articleCategories.name}</h3>
            <p>cette catégorie contient {articleCategories.articles.length} articles</p>
           
           <Link className="btn btn-cta" to={`/nos-produits-categorie/${articleCategories._id}`}> Voir la catégorie</Link>
            </div>
      //     <Link className='card-categories' to={`/nos-produits-categorie/${articleCategories._id}`}>
      //  <article key={articleCategories._id}>
       
      //   <div className="card-categories-txt">

      //   <h3>{articleCategories.name}</h3>
      //   </div>
      //  </article>
      //     </Link>
            
          ))
        : ''}
    </div>
  );
}

export default ArticlesListAdmin;
