import './recyclableProducts.css';
import RecyclableProductsLists from '../../components/recyclableProducts/RecyclableProductsList'
import SearchproductsBar from '../../components/recyclableProducts/SearchproductsBar';

function RecyclableProducts() {
  return (
   <div className="page-content">
    <h1>liste des produits recyclables</h1>
  
  <SearchproductsBar/>
  
   <RecyclableProductsLists/>
  
  
   </div>
  );
}

export default RecyclableProducts;
