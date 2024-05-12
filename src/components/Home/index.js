import {Component} from "react"
import { Helmet } from 'react-helmet';
import { ThreeDots } from 'react-loader-spinner'

import FiltersGroup from "../FiltersGroup";
import ProductCard from "../ProductCard";
import Header from "../Header";
import Footer from "../Footer";

import { TbMathGreater, TbMathLower } from "react-icons/tb";
import "./index.css"

const sortbyOptions = [
    {
      optionId: 'recom',
      displayText: 'RECOMMENDED',
    },
    {
      optionId: 'new',
      displayText: 'NEWEST FIRST',
    },
    {
        optionId: 'popular',
        displayText: 'POPULAR',
    },
    {
        optionId: 'desc',
        displayText: 'PRICE: HIGH TO LOW',
    },
    {
        optionId: 'asc',
        displayText: 'PRICE: LOW TO HIGH',
    },
  ]

  const filterByCatergory = 
[
    {
        filterId: "electronics",
        displayFilterText: "ELECTRONICS",
    },
    {
        filterId: "jewelery",
        displayFilterText: "JEWELLERY",
    },
    {
        filterId: "men's clothing",
        displayFilterText: "MENS",
    },
    {
        filterId: "women's clothing",
        displayFilterText: "WOMENS",
    },
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
  

class Home extends Component{
    state = {
        apiStatus: apiStatusConstants.initial,
        showFilter: true, 
        productsList: [],
        activeSortId: sortbyOptions[0].optionId,
        activeCategoryId: "",
        isClicked: false,
        likedId : "",
    }

    componentDidMount(){
        alert("Welcome to the E-commerce site About website: It is a interactive/dynamic website You can check price LOW to HIGH or vice versa through dropdown and Checkbox filters too.. tq"
)
        this.getProducts()
    }

    getProducts = async () => {
        const {activeSortId} = this.state
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
          })
        const url = `https://fakestoreapi.com/products?sort=${activeSortId}`;
        const options = {
            method : "GET"
        }

        const response = await fetch(url,options);
        if (response.ok === true){
            const responseData = await response.json();
            this.setState({productsList: responseData, apiStatus: apiStatusConstants.success,})
        }else{
            console.log("error")
        }
    }

    onChangeSortBy = (event) => {
        this.setState({activeSortId: event.target.value},this.getProducts)
    }

    changeCategoryId = (id) => {
        this.setState({activeCategoryId: id})
    }

    showFiltersClicked = () => {
        this.setState((prevState) => ({showFilter: !prevState.showFilter}))
    }

    showCatergoryDrop = () => {
        this.setState(prevState => ({isClicked: !prevState.isClicked}))
        }
       
    activeCategory = () => {
        const {activeCategoryId,productsList} = this.state 
        const updatedList = productsList.filter(each => each.category === activeCategoryId)

        return updatedList
    } 

    toggleLike = (id) => {
        this.setState({likedId: id})
    }
    
    renderLoadingView = () => (
        <div className="products-loader-container">
          <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )

      renderProductsListView = () => {
        let {showFilter,productsList, activeSortId,activeCategoryId,isClicked,likedId} = this.state
        const filteredList = activeCategoryId !== "" ? this.activeCategory() : productsList
        let count = filteredList.length
        let filterStatus = showFilter ? "SHOW FILTER":"HIDE FILTER"
        let symbol = showFilter ? <TbMathGreater/> : <TbMathLower/> 
        return(
        <div className="bg-container">
        <Header/>
        <Helmet>
            <title className="heading">DISCOVER OUR PRODUCTS</title>
            <meta className="discription" name="description" content="Lorem Ipsum dolor sit amet consectuter. Amet eset posuere
            rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor."/>
        </Helmet>
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
            
            <select className="drop-down-options" value={activeSortId} onChange={this.onChangeSortBy}>
                {sortbyOptions.map(eachItem => (
                    <option key={eachItem.optionId}
                    value={eachItem.optionId}>
                        {eachItem.displayText}
                    </option>
                ))}
            </select>
        </div>
        <hr className="bottom-line"/>
        <div className="filters-product-container">
        {showFilter ?"" : 

        <FiltersGroup 
        filterByCatergory={filterByCatergory}
        changeCategoryId={this.changeCategoryId}
        showCatergoryDrop = {this.showCatergoryDrop}
        isClicked = {isClicked}
        />}
        <ul className="ul-products">
            {filteredList.map((eachItem) => (<ProductCard toggleLike={this.toggleLike} likedId = {likedId} productsList = {productsList} product={eachItem} key={eachItem.id}/>))}
        </ul>
        </div>
        {<Footer/>}
    </div>
        
        )
      }
        
      renderAllProducts = () => {
        const {apiStatus} = this.state 

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderProductsListView()
            
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()    
        
            default:
                break;
        }
      }

    render(){
        return(      
            this.renderAllProducts()
    )}
}

export default Home