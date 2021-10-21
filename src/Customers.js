import React from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState,useEffect } from 'react';
import { getAllUsers } from './ApiCalls';
const Customers = () => {
    const [users, setUsers] = useState([]);
    const preload = ()=>{
     getAllUsers()
     .then(data=>{
       if(data.error){
         console.log(data.error);
       }else{
         setUsers(data)
       }
     })
   }
   useEffect(() => {
    preload();
    }, []);
    return (

        <div>
            {console.log(users)}
            <Navbar/>
              <div className="container grid-center overflow-y-scroll" style={{minHeight:"80vh",width:"100vw"}}>
                    <table className="table">
                        <thead className="thead-dark bg-dark text-light">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Account Number</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            
                            users.map((user,index)=>{
                                console.log(user)
                                return (
                                    
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.accNo}</td>
                                        <td>{user.balance}</td>
                                    </tr>
                                );
                            })
                            
                        }
                        </tbody>
                    </table>
              </div>
            <Footer/>
        </div>
    );
}

export default Customers;
