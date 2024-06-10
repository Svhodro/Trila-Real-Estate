import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider=({children})=>{
  
    const [user,setuser]=useState(false)
    const [category,setCategory]=useState()
    const [payment,setpayment]=useState([])
    const [details,setdetails]=useState()
    const [roll,setroll]=useState()
    const [userdata,setuserdata]=useState([])
    const [offer,setoffer]=useState([])
    const [update,setupdate]=useState([])
    const [sort,setSort]=useState()
    
   
    return(
        <UserContext.Provider value={{sort,setSort,payment,setpayment,userdata,setuserdata,user,setuser,category,setCategory,details,setdetails,roll,setroll,offer,setoffer,update,setupdate}}>
           {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider