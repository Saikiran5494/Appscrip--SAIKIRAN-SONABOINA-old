import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import "./index.css"

const ProductCard = (props) => {
    const {product,productsList,toggleLike,likedId} = props 
    let {title,image,id} = product

    const renderHeart = () => {
        const item = productsList.find(each => each.id === id)
        if(item.id === likedId){
            return <FcLike/>
        }else{
            return <IoIosHeartEmpty/>
        }
    }

    const heartClicked = () => {
        toggleLike(id)
    }

    return(
    <li className="list-container">
        <img src={image} alt={product.rating} className="product-image"/>
            <h1 className="title">{title}</h1>
            <div className="details-container">
                <p className="paragraph">Sign in to Create an account to see pricing</p>
                <button type="button" onClick={heartClicked} className="heart-button">{renderHeart()}</button>
                
                
            </div>
    </li>
)
}

export default ProductCard