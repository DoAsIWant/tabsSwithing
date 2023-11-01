import React from "react"
import {Link} from "react-router-dom";
const TabsMenu = ({tabs}) => {
    
    return (
        <div className="router__menu">
            <ul>
            {tabs.map(tab=>{
                return (
                <li>
                <Link key={tab.id} to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>)
            })}
            </ul>
        </div>    
    )
    
}

export default TabsMenu;