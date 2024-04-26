import { Component } from "react";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import "./index.css"

class FiltersGroup extends Component{
    state = {isClicked: false}

isDropClicked = () => {
this.setState(prevState => ({isClicked: !prevState.isClicked}))
}

    render(){
        let {isClicked} = this.state
        let showOptions = isClicked? "": "options"
        let arrow = isClicked ? <IoIosArrowUp/> : <IoIosArrowDown/>
        return(<div className="filters-group-container">
        <input id="custom" type="checkbox"/>
        <label htmlFor="custom" className="label">CUSTOMIZBLE</label>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">IDEAL FOR</label>
                <button type="button" className="button" onClick={this.isDropClicked}>{arrow}</button>
            </div>
            <p className="all">All</p>
            <div className={`${showOptions}`}>
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">OCCASION</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">WORK</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">FABRIC</label>
                <button type="button" className="button" ><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">SEGMENT</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">SUITABLE FOR</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">RAW MATERIALS</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">PATTERN</label>
                <button type="button" className="button"><IoIosArrowDown/></button>
            </div>
            <p className="all">All</p>
            <div className="options">
                <p className="filter">Unselect</p>
                <input id="men" type="checkbox"/>
                <label htmlFor="men">Men</label><br/>
                <input id="women" type="checkbox"/>
                <label htmlFor="women">Women</label><br/>
                <input id="baby" type="checkbox"/>
                <label htmlFor="baby">Baby & Kids</label><br/>
            </div>
        </div>
        <hr className="filter-line"/>
     
    </div>
)
    }
}


export default FiltersGroup
