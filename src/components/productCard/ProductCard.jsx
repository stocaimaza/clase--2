import './productCard.css';
import ProductImage from '../productImage/ProductImage';
import ProductInfo from '../productInfo/ProductInfo';
import ProductButton from '../productButton/ProductButton';
function ProductCard() {
    return (
        <div className="product-card">
        <ProductImage />
        <ProductInfo />
        <ProductButton />
        </div>
    );
}

export default ProductCard;

