import { IoIosHeartEmpty } from "react-icons/io";
import "./index.css"

const ProductCard = (props) => {
    const {product} = props 
    let {title,image} = product

    return(
    <li className="list-container">
        <img src={image} alt={product.rating} className="product-image"/>
            <h1 className="title">{title}</h1>
            <div className="details-container">
                <p className="paragraph">Sign in to Create an account to see pricing</p>
                <IoIosHeartEmpty/>
            </div>
    </li>
)
}

export default ProductCard