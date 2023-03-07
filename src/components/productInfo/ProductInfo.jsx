import './productInfo.css'

function ProductInfo() {
    return (
        <div className="product-info">
            <h1 className="product-info__title">Producto</h1>
            <p className="product-info__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod
                voluptatibus. Quae, quod voluptatibus.
            </p>
            <div className="product-info__price">$ 100</div>
        </div>
    );
}

export default ProductInfo;

