import { BsBag } from "react-icons/bs";
import { CiSearch,CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosOptions } from "react-icons/io";

const Header = () => {
    return(
        <>
        <nav className="navbar">
            <div className="options-logo">
                <IoIosOptions className="option"/>
                <img alt="logo" className="logo" src="https://previews.123rf.com/images/urfandadashov/urfandadashov1802/urfandadashov180200415/96334789-black-swastik-logo-hinduism-religion-sign-indian-swastik-symbol-isolated-on-white-background.jpg"/>
            </div>
            <h1 className="heading-logo">LOGO</h1>
            <div className="icons-container">
            <CiSearch className="icons" />
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
    </>
)}

export default Header