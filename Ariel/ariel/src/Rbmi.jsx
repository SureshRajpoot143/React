import { useState } from "react";



function Rbmi() {
    const [data, setData] = useState("logged in")
    const{email,password}=data

    const handlecharge=(e)=>{

    
      const{name,value}=()=>{
        setData({...data,
        [name]:value
        })
    }
  }

    const handleclick = () => {
        data1 = "Loggend In "
        console.log(data1);
    }
    const li = ["apple", "ball", "cat"]
    let data1 = "Are you REndering  "

    const obj = { id: 1, "name": "suresh", "College": "RBCET" }
    const handleSubmit=(e)=>{
      e.preventDefault()
     email.trim()?alert("email enter"):alert("pls enter the vaild Email")
    }
    return (
        <>
            {/* <h1>{data1}</h1>

            <button onClick={handleclick}>logout</button>
            <button onClick={()=>{
                setData("Your are loggin in ")
            }}>logout</button> */}



            {/* <ul>
                {li.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </ul> */}
           <form onSubmit={handleSubmit}>
            <input  type="email" placeholder="email" required value={email} onChange={handlecharge} /> 
            <input type="password" placeholder=" password"required value={password} onChange={handlecharge} /> 
            <input type="submit"/>
           </form>
           
         
           
            {/* <ul>
                {Object.entries(obj).map(([key, value]) => {
                    return <li key={key}>{key}: {value}</li>
                })}
            </ul> */}
        </>
    );
}
export default Rbmi;