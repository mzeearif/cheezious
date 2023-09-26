import Styles from "./Footer.module.css";
import React from "react";
import '../globals.css'
import Image from 'next/image';
import logo from '../assets/images/images.png';
import playstore from '../assets/images/playstore.svg';
import istore from '../assets/images/appstore.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
     faEnvelope,
    faMapMarkerAlt, faMessage, faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <>
            <div className="container-fluid adjust">
            <div className={Styles.footer}>
                <div className="row">
                    <div className="col-7 col-md-8 col-sm-12">
                        <div className={Styles.logosection}>
                        <div className="">
                        <Image src={logo} alt="Logo" width={160} height={160}/>
                    </div>
                        <div className="">
                            <div className={Styles.footericon1}>
                                <p>Cheezious</p>
                                <div><span><FontAwesomeIcon icon={faPhoneSquareAlt} className="location-icon"/>051111446699</span></div>
                                <div><span><FontAwesomeIcon icon={faEnvelope}  className="location-icon"/>support@cheezious.com</span></div>
                                <div><span><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon"/>Cheezious - F-7, Beside Standard Charterd Bank, Bhatai Road, F-7, Islamabad, Islamabad</span></div>
                                <div className={Styles.svgapp}>
                                    <span><Image src={playstore} alt="Logo" width={70} height={70}/></span>
                                    <span><Image src={istore} alt="Logo" width={70} height={70}/></span>
                                </div>
                            </div>

                    </div>
                            </div>
                    </div>
                    <div className="col-5 col-md-4 col-sm-12">
                        <div className={Styles.timediv}>
                        <div className="row">

                        <div className="col-6 col-md-6 col-sm-12">
                        <p>Our Timings</p>
                            <div><span>Monday - Thursday</span></div>
                                <div><span>Friday</span></div>
                                <div><span>Saturday - Sunday</span></div>
                                <div className={Styles.svgapp}>
                                    <p>Follow Us:</p>
                                    <span><FontAwesomeIcon icon={faFacebook} size="2x" className={Styles.facebook}/></span>
                                    <span><FontAwesomeIcon icon={faInstagram} size="2x" className={Styles.insta}/></span>
                                </div>
                    </div>
                        <div className="col-6 col-md-6 col-sm-12">
                        <div><span>11:00 AM - 03:00 AM</span></div>
                                <div><span>02:00 PM - 03:00 AM</span></div>
                                <div><span>11:00 AM - 03:00 AM</span></div>
                    </div>
                            </div>
                            </div>
                    </div>

                     </div>
                <div style={{ width: "100%", padding: "30px 0 0 0px", textAlign: "center" }}>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0px",
      borderTop: "2px solid rgb(51, 51, 51)"
    }}
  >
    <span
      style={{
        textAlign: "center",
        fontSize: 14,
        paddingTop: 5,
        margin: 0,
        color: "rgb(0, 0, 0)"
      }}
    >
      © 2023 Powered by{" "}
      <a className="blink-link" href="https://www.blinkco.io/" target="_blank">
        Blink Co.
      </a>
    </span>
  </div>
</div>

                 </div>
                 </div>


</>
    )
}
export default Footer;