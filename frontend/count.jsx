import {buttom}from "@/components/ui/buttom";
import{useState} from "react";
const Count=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>

            <h3>Count:{count}</h3>
            <buttom onClick={()=>setCount(count+1)}>Increase</buttom>

            </div>
    )}
    
