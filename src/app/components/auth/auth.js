'use client'
import Styles from './auth.module.css';
import "../../globals.css"
import Button from "@/app/components/Button";
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClosedCaptioning, faEyeDropperEmpty, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Auth = ({onClose}) => {
    const [isAuthOpen, setAuthOpen] = useState(true);

    const closeAuth = () => {
        setAuthOpen(false);
        onClose();
    };
    return (
        <div className={Styles.modalbg}>
            <div className={Styles.auth}>
                <div className={Styles.authmodal}>
                    <div className={Styles.closebtn}>
                    <div><span className={Styles.label}>
                    Enter your mobile number
                    </span></div>
                    <div>
                    <span onClick={closeAuth}><FontAwesomeIcon icon={faTimes}/></span>
                    </div>
                    </div>
                    <div
                        className={Styles.alert}
                    >
                        <div className="MuiAlert-icon blink-style-1l54tgj">
                            <svg
                                className=" blink-style-1cw4hi4"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ErrorOutlineIcon"
                                width="20"
                                color="red"
                            >
                                <path
                                    d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            </svg>
                        </div>
                        <div className="MuiAlert-message blink-style-1xsto0d">
                            Mobile Number is invalid
                        </div>
                    </div>
                    <div style={{padding: "10px 0px"}}>
    <span style={{width: "100%", color: "rgb(36, 40, 43)", fontSize: 14}}>
      Please confirm your country code and enter your mobile number
    </span>
                        <div dir="ltr">
                            <div className=" react-tel-input " style={{marginTop: 6}}>
                                <div className="special-label">Phone</div>
                                <input
                                    className="form-control "
                                    placeholder="Enter your mobile number"
                                    type="tel"
                                    autoComplete="new-password"
                                    defaultValue={+92}
                                    style={{
                                        borderColor: "unset",
                                        borderRadius: 25,
                                        width: "100%",
                                        height: 42,
                                        backgroundColor: "rgb(255, 255, 255)",
                                        color: "rgb(36, 40, 43)",
                                        fontSize: 14
                                    }}
                                />
                                <div
                                    className="flag-dropdown "
                                    style={{
                                        backgroundColor: "transparent",
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                    }}
                                >
                                    <div
                                        className="selected-flag"
                                        title="Pakistan: + 92"
                                        tabIndex={0}
                                        role="button"
                                        aria-haspopup="listbox"
                                    >
                                        <div className="flag pk">
                                            <div className="arrow"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="grecaptcha-text MuiBox-root blink-style-0"
                                style={{marginTop: 10}}
                            >
                                This site is protected by reCAPTCHA and the Google{" "}
                                <a href="">Privacy Policy</a> and{" "}
                                <a href="">Terms of Service</a> apply.
                            </div>
                        </div>
                    </div>
                    <Button label={"Login"}/>
                    <div
                        className={Styles.t4jjy9}
                    >
                        <span className={Styles.c1ovea}> <hr/></span>
                        <span style={{fontSize: 12, color: "rgb(197, 197, 197)", lineHeight: "30px"}}>OR</span>
                        <span className={Styles.c1ovea}><hr/> </span>
                    </div>
                    <button
                        className={Styles.convertbtn}
                    >
                        Order as Guest
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Auth;