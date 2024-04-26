import {Component} from "react"
import FiltersGroup from "../FiltersGroup";
import ProductCard from "../ProductCard";
import { BsBag } from "react-icons/bs";
import { CiSearch,CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosOptions } from "react-icons/io";
import { TbMathGreater, TbMathLower } from "react-icons/tb";
import { LiaFlagUsaSolid } from "react-icons/lia";
import "./index.css"

class Home extends Component{
    state = {showFilter: true, productsList: []}

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => {
        const url = "https://fakestoreapi.com/products";
        const options = {
            method : "GET"
        }

        const response = await fetch(url,options);
        if (response.ok === true){
            const responseData = await response.json();
            this.setState({productsList: responseData})
        }else{
            console.log("error")
        }
    }


    showFiltersClicked = () => {
        this.setState((prevState) => ({showFilter: !prevState.showFilter}))
    }

    render(){
        let {showFilter,productsList} = this.state
        let count = productsList.length
        let filterStatus = showFilter ? "SHOW FILTER":"HIDE FILTER"
        let symbol = showFilter ? <TbMathGreater/> : <TbMathLower/> 
        return(
        <div className="bg-container">
            <nav className="navbar">
                <div className="options-logo">
                    <IoIosOptions className="option" onClick={this.toggleOptions}/>
                    <img alt="logo" className="logo" src="https://previews.123rf.com/images/urfandadashov/urfandadashov1802/urfandadashov180200415/96334789-black-swastik-logo-hinduism-religion-sign-indian-swastik-symbol-isolated-on-white-background.jpg"/>
                </div>
                <h1 className="heading-logo">LOGO</h1>
                <div className="icons-container">
                <CiSearch className="icons" onClick={this.searchClciked}/>
                <CiHeart className="icons"/>
                <BsBag className="icons"/>
                <GoPerson className="icons person"/>
                <select className="person">
                    <option>ENG</option>
                    <option>TEL</option>
                    <option>HI</option>
                </select>
                </div>
            </nav>
            <ul className="ul">
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
            <hr className="line"/>
            <p className="home-shop">HOME/SHOP</p>
        <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
        <p className="discription">Lorem Ipsum dolor sit amet consectuter. Amet eset posuere <br/>
        rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        <hr className="line-filter"/>
        <div className="filters-container">
            <div className="item-show-hide-filter-con">
            <p className="count">{count} ITEMS</p>
            <button className="filter-desktop" type="button" onClick={this.showFiltersClicked}>{symbol}{filterStatus}</button> 
            <button className="filter-small" type="button" onClick={this.showFiltersClicked}>Filter</button> 
            </div>
            <select className="drop-down-options">
                <option>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
            </select>
        </div>
        <hr className="bottom-line"/>
        <div className="filters-product-container">
        {showFilter ?"" : <FiltersGroup/>}
        <ul className="ul-products">
            {productsList.map((eachItem) => (<ProductCard product={eachItem} key={eachItem.id}/>))}
        </ul>
        </div>
        <div className="bottom-section">
            <div>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>SignUp for updates from metta muse.</p>
                <input type="email" placeholder="Enter Email" className="input"/>
                <button className="subscribe-button">SUBSCRIBE</button>
            </div>
            <div>
                <h5>CONTACT US</h5>
                <phone>+412023344223</phone>
                <p>vvaahndfjfd43@gmail.com</p>
                <h5>CURRENCY</h5>
                <p><LiaFlagUsaSolid /> -USD</p>
            </div>
        </div>
    </div>
        
        )
    }
}

export default Home