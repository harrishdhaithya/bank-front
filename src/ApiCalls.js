const backend = "https://bank-back002.herokuapp.com/api";

export const getAllUsers = ()=>{
 return fetch(backend+"/users",{
     method:"POST",
     headers:{
         "Access-Control-Allow-Origin":backend,
         "Access-Control-Allow-Credentials":"true"
     }
 }).then((resp)=>{
     return resp.json();
 }).catch((err)=>console.log(err))
}


export const getAllTransactions = () =>{
    return fetch(backend+"/transaction/get",{
     method:"POST",
     headers:{
         "Access-Control-Allow-Origin":backend,
         "Access-Control-Allow-Credentials":"true"
     }
    }).then((resp)=>{
        return resp.json();
    }).catch((err)=>console.log(err))
}


export const makeTransaction = (reqBody)=>{
    return fetch(backend+"/transaction/make",{
        method:"POST",
        headers:{
             Accept:"application/json",
             "Access-Control-Allow-Origin":"http://localhost:3000",
            "Access-Control-Allow-Credentials":"true",
            "Content-type":"application/json"
        },
        body:JSON.stringify(reqBody)
    }).then(res=>res.json()).catch((err)=>console.log(err));
}