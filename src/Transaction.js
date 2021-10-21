import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import { useState, useEffect} from 'react';
import { getAllUsers, makeTransaction } from './ApiCalls';

const Transaction = () => {
    const [users, setUsers] = useState([]);
    const [success,setSucess] = useState(false);
    const [failed,setFail] = useState(false);
    const [errMsg,seterrMsg]=useState("Transaction Failed");
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
    const onSubmit = (event)=>{
        event.preventDefault();
        makeTransaction(transValues)
        .then(resp=>{
            if(resp.error){
                setFail(true);
                seterrMsg(resp.error);
            }else{
                setSucess(true);
                settransValues({...transValues,from:"",to:"",amount:""});
            }
        }).catch(err=>{
            setFail(true);
            seterrMsg("Transaction Failed")
        });
    }
    const [transValues, settransValues] = useState({
        from:"",
        to:"",
        amount:""
    });
    const handleChange = name => event =>{
        settransValues({...transValues,[name]:event.target.value})
    }
    var {from,to,amount} = transValues;
    return (
        <div>
            {success&&(<div>
                <div style={{backgroundColor:"grey",opacity:"45%",height:"100vh",width:"100vw",position:"fixed"}}>
                
                </div>
                <div className="box bg-dark p-3" style={{minHeight:"200px",width:"500px",opacity:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>
                    <div className="col-12 row">
                        <button className="btn btn-sm fs-1 text-light col-12 flex-row-rev"
                        onClick={
                            ()=>{
                                setSucess(false);
                            }
                        }
                        ><span className="btn btn-primary p-2">X</span></button>
                        <div className="text-success fs-1 text-center col-12">
                        Transaction Successful                       
                        </div>
                    </div>
                </div>
            </div>)}

            {failed&&(<div>
                <div style={{backgroundColor:"grey",opacity:"45%",height:"100vh",width:"100vw",position:"fixed"}}>
                
                </div>
                <div className="box bg-dark p-3" style={{minHeight:"200px",width:"500px",opacity:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>
                    <div className="col-12 row">
                        <button className="btn btn-sm fs-1 text-light col-12 flex-row-rev"
                        onClick={
                            ()=>{
                                setFail(false);
                                seterrMsg("Transaction Failed");
                                settransValues({
                                    from:"",
                                    to:"",
                                    amount:""
                                })
                            }
                        }
                        ><span className="btn btn-primary p-2">X</span></button>
                        <div className="text-danger fs-1 text-center col-12">
                            {errMsg}  
                        </div>
                    </div>
                </div>
            </div>)}
            
            <Navbar />
                <div style={{minHeight:"80vh",width:"100vw"}} className="container grid-center overflow-y-scroll">
                <div>
                    <div className="text-light bg-primary p-2 fs-3" style={{border:"2px solid black"}}>Fill to Make Transaction</div>
                    <form style={{border:"3px solid black",padding:"8px"}}  onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="from">FROM</label>
                            <input list="userlist" type="text" className="form-control" id="from" placeholder="FROM" onChange={handleChange("from")} value={from} name="from" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="to">TO</label>
                            <input list="userlist" type="text" className="form-control" id="to" placeholder="TO" onChange={handleChange("to")} value={to} name="to" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">AMOUNT</label>
                            <input type="text" className="form-control" id="amount" placeholder="AMOUNT" onChange={handleChange("amount")} value={amount} name="to" />
                        </div>
                        <div className="form-group">
                            {/* <input type="submit" onSubmit={onSubmit} className="form-control mt-2 btn btn-warning"/> */}
                            <button type="submit"  className="form-control mt-2 btn btn-warning">Make Transaction</button>
                        </div>
                        <datalist id="userlist">
                        {
                            users.map((user,index)=>{
                                console.log(user);
                                return (
                                    <option key={index} value={user.accNo}>{user.name}</option>
                                );
                            })
                        }
                        </datalist>
                    </form>
                </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Transaction;
