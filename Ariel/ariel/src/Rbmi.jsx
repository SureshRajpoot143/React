import { useState } from "react";


function Rbmi() {

   let[data,setData]=useState({"email":"","name":""})
   const inputchange=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
  
}
const handleSubmit=(e)=>{
    e.preventDefault()
    alert([data.email,data.name])
}

//    const{email,setEmail}=useState("")
//       console.log(email);
//    const emailchange=(e)=>{
//     setEmail(e.traget.value)
   
//    }
//     const namechange=(e)=>{
//         setName=(e.traget.value)
//         e.ssrDefault()
//         alert([name,email])
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         alert([name,email])

    // }
    // let[data,setData]=useState("content")
    //  let[data,setData]=useState (".....")
    //  const change=(e)=>{
    //     setData(e.traget.value)
   
    //  const[dec,setDec]=useState(0)
    //  const[inc,setInc]=useState(0)


// let data="content"
// console.log(data);
// const handleDecrease = () => {
//     setDec(dec - 1);
//     setData(`Decrease ${dec - 1}`);
// }

// const clicking=()=>{
//     setData("something")
//     // data="something"
//     alert("clikeed")
// }
    // const [data, setData] = useState("logged in")
    // const{email,password}=data

    // const handlecharge=(e)=>{

    
    //   const{name,value}=()=>{
    //     setData({...data,
    //     [name]:value
    //     })
    // }
  

    // const handleclick = () => {
    //     data1 = "Loggend In "
    //     console.log(data1);
    // }
    // const li = ["apple", "ball", "cat"]
    // let data1 = "Are you REndering  "

    // const obj = { id: 1, "name": "suresh rajpoot", "College": "RBCET" }
    // const handleSubmit=(e)=>{
    //   e.preventDefault()
    //  email.trim()?alert("email enter"):alert("pls enter the vaild Email")
    // }
    // const increase = () => {

        // setData((next)=>next + 10)
    //     setInc(inc+ 1);
    // setData(`Increase ${inc +1}`);

        // setData((next)=>next + 1)

        // setData((next)=>next + 1)
        // setData((next)=>next + 1)
       
        // setData((next)=>next + 1)
        // setData((next)=>next + 1)
       
       
    // }
    // const decrease = () => {
    //     // setData((prev)=>prev - 1)
    //     // setData((prev)=>prev-1)
    //     //  setData((prev)=>prev - 1)
    //     // setData((prev)=>prev-1)
    //     setData(data - 10)
        //   setData(data - 1)
        
    // }
    // const Increase=()=>{
            
        // }
    return (
       
        <>
         <form onSubmit={handleSubmit}>
          <input type="email" 
          placeholder="enter your email"
          value={data.email}
          name="email"
          onChange={inputchange}
          />  
          <input type="text" 
          placeholder="enter your name"
          value={data.name}
          name="name"
          onChange={inputchange}
          />
          <input type='submit'
          /> 
        </form>

     
        {/* <div> {data}</div>
        <br/> */}
        {/* <button onClick={handleDecrease}>Decrease by 1</button>
        <button onClick={increase}>increse by 1</button> */}
       {/* <input */}
    {/* //    value={data}
    //    onChange={(e)=>console.log(e)}
       */}
       {/* /> */}


        {/* <button onClick={} style={{border:"solid red 2px"}}> onClick</button> */}

        
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
           {/* <form onSubmit={handleSubmit}>
            <input  type="email" placeholder="email" required value={email} onChange={handlecharge} /> 
            <input type="password" placeholder=" password"required value={password} onChange={handlecharge} /> 
            <input type="submit"/>
           </form>
            */}
         
           
            {/* <ul>
                {Object.entries(obj).map(([key, value]) => {
                    return <li key={key}>{key}: {value}</li>
                })}
            </ul> */}

       
        </>


    );
}
export default Rbmi;