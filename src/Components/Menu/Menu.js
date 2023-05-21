import React from "react";
import "./Menu.scss";


export default function Menu() {
    const pages = [
        {text: "Home" , link: "/"},
        {text: "Page 1" , link: "/page-one"},
        {text: "Page 2" , link: "/page-two"},
        {text: "Page 3" , link: "/page-three"}
    ]

    return(
        <div className="menu">
            <div className="menu-items">
                {
                    pages.map(data => 
                        <div className="items" key={data.text}>
                            {data.text}
                        </div>
                    )
                }
            </div>
        </div>
    )



}
