import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getArticleCategory } from "../../features/articleCategory/articleCategorySlice";
import Spinner from "../../components/shared/spinner/Spinner";
import './ProductCategory.css'
function ProductCategory() {
  const userRole = JSON.parse(localStorage.getItem("userRole"));

  const params = useParams();

  const { articleCategory, isLoading, isError, isSuccess } = useSelector(
    (state) => state.articleCategories
  );
  const dispatch = useDispatch();

  console.log(userRole);

  useEffect(() => {
    dispatch(getArticleCategory(params.id));
  }, []);
  console.log(articleCategory);

  if (!articleCategory.data || isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="page-content">
        {userRole === "admin" ? (
          <button className="btn btn-danger">Modifier</button>
        ) : (
          ""
        )}

        <section className="heading">
          <h1>{articleCategory.data.name}</h1>
          <p>{articleCategory.data.description}</p>
        </section>

        <section className="articles-card-container">
          {articleCategory.data.articles
            ? articleCategory.data.articles.map((article) => (
                <Link to={`/nos-produits-categorie/${article._id}`}>
                  <article className="article-card" key={article._id}>
                    <div className="article-card_img-container">
                      <img
                        src={`http://localhost:5500/uploads/` + article.photo}
                        alt={article.name}
                      />
                    </div>

                    <p>{article.description}</p>
                  </article>
                </Link>
              ))
            : ""}
        </section>
      </div>
    </>
  );
}

export default ProductCategory;
