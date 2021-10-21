import React, { useState,useEffect } from 'react';
import "./App.css";
import {PieChart} from "react-minimal-pie-chart"
import Navbar from './Components/NavBar';
import Chart from "./Components/Chart"
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';
import { Link,withRouter } from 'react-router-dom';
import { getAllTransactions, getAllUsers } from './ApiCalls';

const App = ({history}) => {
   const [users, setUsers] = useState([]);
   const [transactions,setTrans]=useState([]);
   const preload = ()=>{
     getAllUsers()
     .then(data=>{
       console.log(data)
       if(data.error){
         console.log(data.error);
       }else{
         setUsers(data)
       }
     })
   }
   const loadTransactions = ()=>{
     getAllTransactions()
     .then(resp=>{
       if(resp.error){
         console.log(resp.error);
       }else{
         setTrans(resp)
       }
     })
   }
   useEffect(() => {
     preload();
     loadTransactions();
   }, []);
   console.log(users);
   const calcMoney = ()=>{
     let sum = 0;
     users.forEach(user=>{
       sum+=user.balance;
     })
     return sum;
   }
   const filterData = () =>{
     let below1000 = users.filter(user=>user.balance<1000).length
     let ThousandToTenThousand = users.filter(user=>user.balance>=1000 && user.balance<10000).length
     let TenThousandTo50000 = users.filter(user=>user.balance>=10000&&user.balance<50000).length
     let Above50000 = users.filter(user=>user.balance>=50000).length
     return [below1000,ThousandToTenThousand,TenThousandTo50000,Above50000];
   }
  return (
    <div>
      
      <Navbar/>
      <div className="container mt-lg-4 bg-secondary p-3 rounded" style={{minHeight:"70vh",width:"100vw"}}>
        <div className="row">
          <div className="col-lg-6 col-md-12 grid-center mt-md-2">
            <Chart data={filterData}/>
            <div className="container row mt-md-2" style={{height:"auto",backgroundColor:"#FEF5ED",padding:"10px"}}>
              <div className="col-12 p-2">
                      <button className="btn btn-success btn-lg col-12"
                      onClick = {()=>{
                        history.push("transaction")
                      }}
                      >Make Transaction</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 grid-center mt-1 mr-2" style={{backgroundColor:"#FF4848"}}>
              <div className="container row bg-secodary" style={{height:"auto",padding:"10px"}}>
                <div className="col-12 bg-light fs-2 text-primary text-center rounded">
                  Dashboard
                </div>
                <div className="col-12 bg-light text-primary rounded mt-2">
                  <div className="col-12 bg-primary">
                    <div className="text-dark text-center p-2 m-2">
                        No of Customers Available
                    </div>
                    <div className="text-light text-center fs-1 m-2">
                        {users.length}
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-light text-primary rounded mt-2">
                  <div className="col-12 bg-primary">
                    <div className="text-dark text-center p-2 m-2">
                        Number of transactions
                    </div>
                    <div className="text-light text-center fs-1 m-2">
                        {transactions.length}
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-light text-primary rounded mt-2">
                  <div className="col-12 bg-primary">
                    <div className="text-dark text-center p-2 m-2">
                        Total Money Available
                    </div>
                    <div className="text-light text-center fs-1 m-2">
                        ${calcMoney()}
                    </div>
                  </div>
                </div>
                

              </div>
          </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
