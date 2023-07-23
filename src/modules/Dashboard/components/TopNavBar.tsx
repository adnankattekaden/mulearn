import React, { useEffect, useState } from "react";
import styles from "./SideNavBar.module.css";
import MulearnBrand from "../assets/MulearnBrand";
import { useNavigate } from "react-router-dom";
import dpm from "../assets/images/dpm.jpg";

//TODO: Change the styles to camelCase from snake_case
const TopNavBar = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        if (
            localStorage.getItem("userInfo") &&
            JSON.parse(localStorage.getItem("userInfo")!).first_name
        ) {
            setName(JSON.parse(localStorage.getItem("userInfo")!).first_name);
            setProfilePic(
                JSON.parse(localStorage.getItem("userInfo")!).profile_pic
            );
        }
    });
    return (
        <>
            <div id="top_nav" className={styles.top_nav}>
                <div className={styles.nav}>
                    <div className={styles.nav_items}>
                        <b className={styles.greetings}>Hello, {name} 👋</b>

                        <div className={styles.mulearn_brand2}></div>
                        <div className={styles.menu}>
                            {/* <i className="fi fi-sr-settings"></i> */}
                            {/* <i className="fi fi-sr-bell"></i> */}
                            <div className={styles.profile}>
                                <img
                                    onClick={() => {
                                        navigate("/profile");
                                    }}
                                    src={profilePic ? profilePic : dpm}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};

export default TopNavBar;
