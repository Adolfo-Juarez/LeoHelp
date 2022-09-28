import '../assets/css/css-articles/articles.css'
import datos from '../assets/JSON/Data.json'
import ProductsCard from '../Atoms/Atoms-Main/ProductsCard';


function Articles() {
    return (
        <>
            <div className="section-down">
                <div className="cards-container">
                    {datos.map((product) => (
                        <ProductsCard
                            key={product.id}
                            id={product.id}
                            bebida={product.bebida}
                            ingredientes={product.ingredientes}
                            precio={product.precio}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Articles;