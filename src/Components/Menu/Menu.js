import React from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";


export default function Menu() {
    const pages = [
        {text: "Home" , link: "/"},
        {text: "Page 1" , link: "/page-1"},
        {text: "Page 2" , link: "/page-2"},
        {text: "Page 3" , link: "/page-3"}
    ]

    return(
        <div className="menu">
            <div className="menu-items">
                {
                    pages.map(data => 
                        <NavLink to={data.link} className="items" key={data.text}>
                            {data.text}
                        </NavLink>
                    )
                }
            </div>
        </div>
    )



}
