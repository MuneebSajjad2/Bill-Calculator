import "./App.css"
import React, { useEffect, useState, useRef } from 'react';
// import { Practice } from "./Practice/Practice"
// import Practice1 from "./Practice/Practice2"
function App() {
  const [checkboxes,setCheckboxes] = useState([])
  let dishes = [
    {name:"Biryani", price:150,ordered:false},
    {name:"Qorma", price:250,ordered:false},
    {name:"Shawarma", price:120},
    {name:"Mutton White Karahi", price:1450},
    {name:"Pizza", price:1299},
    {name:"Seekh Kabab", price:130},
    {name:"Chicken Tika Boti", price:140},
    {name:"Mutton Polao", price:570},
    {name:"Beef Polao", price:110}
  ]
  useEffect(()=> {
    console.log(checkboxes)
  },[checkboxes])
  let showName = useRef();
  let showPrice = useRef();
  let showQty = useRef();
  let showTotal = useRef();
  let discount = useRef();
  let grandTotal = useRef();  
  return (
    <div className="container">
      <h1>Calculate Your Bill</h1>
     <table border="1"> {
      dishes.map((dish)=>{
        return <tr>
          <td>{dish.name}</td>
          <td>{dish.price}</td>
          <td><input onInput={(evt)=>{
            dish.quantity = evt.target.value
          }}
          type="number" className="qty"/></td>
          <td><input 
          type="checkbox" checked={checkboxes[dish.name.toLowerCase().split(" ").join("_")] || false} onChange={(e)=> {
            setCheckboxes(c=> ({...c, [dish.name.toLowerCase().split(" ").join("_")]: e.target.checked}))
          }} className="checkbox"/></td>
        </tr>
    })
  }    
  <div className="tableSecondPortion">
  <tr>
    <td >Item</td>
    <td>Price</td>
    <td>Qty</td>
    <td>Total =</td>
    <td>Disc (10%) =</td>
    <td>Grand Total =</td>
  </tr>
  <tr ref={showName}>  
  {/* <td ref={showPrice}>   */}
  {/* </td> */}
  </tr>
  
  <tr><button onClick={()=>{
  }}>Calculate</button></tr>
  </div>
  </table>
  </div>
  )

 
}

export default App;
// ocChange={(evt)=>{
//            dish.quantity = evt.target
//            console.log(dishes);
//           }}