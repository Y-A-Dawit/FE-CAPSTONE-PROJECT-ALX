import React from 'react';
import '../pages/Dashboard.css';
import faviconLogo from '../assets/faviconLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarData from './SidebarData';

const Sidebar = () => {
  return (
    <>
        <div className="Sidebar">
            <div className="webName" style={{ ...styles.logoContainer, width: "180px", flexShrink: '0', marginTop: '25px', marginLeft: '4px', gap: '0px'}}>
                <img src={faviconLogo} alt="website-logo" style={{ ...styles.faviconLogo, width: '25px', height: '25px', backgroundColor: "white", borderRadius: '30px'}} />
                <h1 style={{ ...styles.websiteName, fontSize: '18px'}} >Simple<span style={{color: ' orange'}}>Habit</span>Tracker</h1> {/*using spread operator possible to merge styles*/}
            </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key)=> {
                    return (
                    <li 
                        key={key}
                        className="row"
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}
                    >
                        {" "}
                        <div id="icon">
                            <FontAwesomeIcon icon={val.icon} />
                        </div>{" "} 
                        
                        <div id="title">
                            {val.title}
                        </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
    
  )
}

const styles = {
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    faviconLogo: {
        height:"40px",
        marginRight: "10px",
    },
    websiteName: {
        fontSize: "1.5rem",
        fontWeight: 'bold',
        color: '#333',
        width:"180px"
    },
}

export default Sidebar