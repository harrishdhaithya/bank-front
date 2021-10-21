import React from 'react';
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
    const [disp,setDisp]=useState("none");
    const NavStyle = {
        height:"12vh",
        width:"100vw",
        backgroundColor:"#F0A500",
    }
    
      var Style = {
        display:disp,
        position:"fixed",
        height:"100vh",
        width:"100%",
        top:"0",
        left:"0",
        backgroundColor:"grey",
        opacity:"40%"
    }
    var SideNavStyle = {
        display:disp,
        position:"fixed",
        height:"100vh",
        top:"0",
        left:"0",
        transitionDelay:"width 5s"
    }
    return (
        <div>
            <div className="flex-row" style={NavStyle}>
                <div className="ml-3">
                        <button className="btn btn-lg" onClick={()=>{
                            setDisp("block")
                        }}>&#x2630;</button>
                </div>
                <div className="flex-space-around" style={{flex:2}}>
                    <div className="flex-row">
                        <img src={logo} alt="" style={{height:"12vh"}}/>
                        <div className="fs-2 text-light">
                            <b>Banking System</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="cover" style={Style}></div>
                    <div className="col-lg-3 col-md-8 row bg-dark flex-space-around" style={SideNavStyle}>
                        <div className="col-12 flex-row-rev">
                            <button className="btn btn-sm fs-1 text-light"
                            onClick={
                                ()=>{
                                    setDisp("none")
                                }
                            }
                            >X</button>
                        </div>
                        <div className="col-12 flex-row">
                            <Link to = "/" className="text-light fs-5" style={{textDecoration:"none"}}>HOME</Link>
                        </div>
                        <div className="col-12 flex-row">
                            <Link to = "/customers" className="text-light fs-5" style={{textDecoration:"none"}}>CUSTOMER DETAILS</Link>
                        </div>
                        <div className="col-12 flex-row">
                            <Link to = "/transaction" className="text-light fs-5" style={{textDecoration:"none"}}>MAKE TRANSACTION</Link>
                        </div>
                        <div className="col-12 flex-row">
                            <Link to = "/view" className="text-light fs-5" style={{textDecoration:"none"}}>VIEW TRANSACTIONS</Link>
                        </div>
                    </div>
            </div>
        </div>
        
    );
}

export default Navbar;
