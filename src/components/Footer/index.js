import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiPaypalLine } from "react-icons/ri";
import { PiCopyrightLight } from "react-icons/pi";
import "./index.css"


const Footer = () => {
return(
    <div className="bottom-section">
    <div className="top-section">
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
    <hr/>
    <div className="top-section">
    <div>
        <h3>metta muse</h3>
        <ul>
            <li className="li">About Us</li>
            <li className="li">Stories</li>
            <li className="li">Artisans</li>
            <li className="li">Boutiques</li>
            <li className="li">Contact Us</li>
            <li className="li">Eu Compliances Docs</li>
        </ul>
        </div>
        <hr className="b-section-line"/>
        <div>
            <h3>QUICK LINKS</h3>
            <ul>
                <li className="li">Orders & Shipping</li>
                <li className="li">Join/Login as a Seller</li>
                <li className="li">Payment & Pricing</li>
                <li className="li">Return & Refunds</li>
                <li className="li">FAQs</li>
                <li className="li">Privacy Policy</li>
                <li className="li">Terms & Conditions</li>
            </ul>
        </div>
        <hr className="b-section-line"/>
        <div>
            <h3>FOLLOW US</h3>
            <div className="insta-linke-container">
                <IoLogoInstagram/>
                <TbBrandLinkedin/>
            </div>
            <h3>metta muse ACCEPTS</h3>
            <div className="payment-container">
                <FaCcMastercard/>
                <FaCcApplePay/>
                <FaGooglePay/>
                <RiPaypalLine/>
            </div>
        </div>
    </div>
    <p className="copy-rights-line">Copyright <PiCopyrightLight/> 2023 mettamuse. All rights reserved.</p>
</div>)
}

export default Footer