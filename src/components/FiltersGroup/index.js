import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import "./index.css"



const FiltersGroup = (props) => {
    const {showCatergoryDrop,isClicked} = props
    const showOptions = isClicked? "": "options"
    let arrow = isClicked ? <IoIosArrowUp/> : <IoIosArrowDown/>
  
const isDropClicked = () => {
    showCatergoryDrop()
}

const renderCategoryFiltersList = () => {
    const {filterByCatergory} = props

    return filterByCatergory.map(filter => {
      const {changeCategoryId} = props
      const onClickCategory = () => changeCategoryId(filter.filterId)

      return (
        <>
        <input type="checkbox" key={filter.filterId}
        id={filter.filterId} onClick={onClickCategory}/>
        <label htmlFor={filter.filterId}>{filter.displayFilterText}</label><br/>
        </>
      )
    })
  }
  
  return(
    <div className="filters-group-container">
        <label htmlFor="custom" className="label">CUSTOMIZBLE</label><br/>
        {renderCategoryFiltersList()}
        <hr className="filter-line"/>
        <div>
            <div className="symbol-container">
                <label className="label">IDEAL FOR</label>
                <button type="button" className="button" onClick={isDropClicked}>{arrow}</button>
            </div>
            <p className="all">All</p>
            <div className={`${showOptions}`}>
                <p className="filter">Unselect</p>
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
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
                {renderCategoryFiltersList()}
            </div>
        </div>
        <hr className="filter-line"/>
     
    </div>
  )

}


export default FiltersGroup
