import { useEffect } from "react";
import { useState } from "react"



const LifeCycle = () => {

    const [ count, setCount] = useState(0);

   useEffect(() => {
     first
   
     return () => {
       second
     }
   }, [third])
   
  return (
    <div>
        
        
        <button onClick={()=>setCount((count)=> count + 1)}>
        count:{count}

        </button>
        
        </div>
  )
}

export default LifeCycle