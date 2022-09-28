import '../../assets/css/css-articles/card-products.css'

/* Importamos las imagenes de forma manual:) 
Si lo quieres cambiar, solo cambia el nombre de la imagen despues de la ruta from
*/
import Americano from '../../assets/image/Americano.jpg'
import Capuccino from '../../assets/image/Capuccino.jpeg'
import Espresso from '../../assets/image/Espresso.jpg'
import Frapuccino from '../../assets/image/Frapuccino.jpeg'
import Moccacino from '../../assets/image/Mocaccino.jpg'

const images = [Americano, Espresso, Moccacino, Capuccino, Frapuccino];

function ProductsCard({id, bebida, ingredientes, precio}) {
    return ( 
        <div className="product-card">
            <div className="image-container-card">
                <img className="image-card" src={images[id]} alt="" />
            </div>
            <h1 className="title-card">{bebida}</h1>
            <span className="ingredientes-card">{ingredientes}</span>
            <span className="precio-card">{`$${precio}.00`}</span>
        </div>
     );
}

export default ProductsCard;