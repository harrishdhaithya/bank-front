import React from 'react';
import { useState,useEffect } from 'react';



const SideNav = ({display}) => {
    const [dispProp,setDispProp] = useState(display)
    console.log(dispProp);
    
    var Style = {
        display:dispProp,
        position:"absolute",
        height:"100vh",
        width:"100%",
        top:"0",
        left:"0",
        backgroundColor:"grey",
        opacity:"40%"
    }
    var NavStyle = {
        display:dispProp,
        position:"fixed",
        height:"100vh",
        top:"0",
        left:"0",
        transitionDelay:"width 5s"
    }
    return (
        <div className="row">
            <div className="cover" style={Style}></div>
            <div className="col-lg-3 col-md-8 row bg-dark" style={NavStyle}>
                <div className="col-12 flex-row-rev">
                    <button className="btn btn-sm fs-1 text-light"
                    onClick={
                        ()=>{
                            setDispProp("none")
                        }
                    }
                    >X</button>
                </div>
            </div>
        </div>
    );
}

SideNav.defaultProps = {
    display:"none"
}

export default SideNav;
