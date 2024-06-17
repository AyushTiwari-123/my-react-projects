import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 roundede-3xl">
     <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Red")} //onClick ko pura function chahie agr hmlog direct setColor lekh denge to usme yo hmlog refrence hoga to usme function se return value jygi onClick m 
      //onClick ko pura function isliye hmlog cll back k sath die h setColor ko aur direct lekhne m hmlog parameter(eg: Red) bhi ni pas kr pyge
      style={{backgroundColor:"Red"}}> 
        Red 
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Green")}
      style={{backgroundColor:"Green"}}>
        Green
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Black")}
      style={{backgroundColor:"Black"}}>
        Black
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Olive")}
      style={{backgroundColor:"Olive"}}>
        Olive
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Gray")}
      style={{backgroundColor:"Gray"}}>
        Gray
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Yellow")}
      style={{backgroundColor:"Yellow"}}>
        Yellow
      </button>
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      onClick={()=>setColor("Brown")}
      style={{backgroundColor:"Brown"}}>
        Brown
      </button>
    </div>
    </div>

   </div>
  )
}

export default App
