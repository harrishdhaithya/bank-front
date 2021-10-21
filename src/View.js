import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import { useState,useEffect } from 'react';
import { getAllTransactions, getAllUsers } from './ApiCalls';

const View = () => {
    const [transactions,setTransactions]=useState([]);
    const preload = ()=>{
        getAllTransactions()
        .then((resp)=>{
            setTransactions(resp)
        })
    }
    useEffect(() => {
        preload();
    }, []);
    console.log(transactions)
    return (
        <div>
            <Navbar/>
            <div style={{minHeight:"80vh",width:"100vw"}} className="container grid-center overflow-y-scroll">
                <table className="table">
                    <thead className="thead-dark bg-dark text-light">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount$</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        transactions.map((trans,index)=>{
                            return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{trans.from}</td>
                                <td>{trans.to}</td>
                                <td>{trans.amount}</td>
                            </tr>
                            )
                        })
                    }
                        
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default View;
