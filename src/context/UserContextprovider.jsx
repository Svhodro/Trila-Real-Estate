import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider=({children})=>{
  
    const [user,setuser]=useState(false)
    const [category,setCategory]=useState()
    const [details,setdetails]=useState()
    
   
    return(
        <UserContext.Provider value={{user,setuser,category,setCategory,details,setdetails}}>
           {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider