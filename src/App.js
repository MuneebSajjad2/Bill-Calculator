import "./App.css"
import React, { useEffect, useState, useRef } from 'react';
// import { Practice } from "./Practice/Practice"
// import Practice1 from "./Practice/Practice2"
function App() {
  let dishes = [
    {name:"Biryani", price:150,ordered:false},
    {name:"Qorma", price:250},
    {name:"Shawarma", price:120},
    {name:"Mutton White Karahi", price:1450},
    {name:"Pizza", price:1299},
    {name:"Seekh Kabab", price:130},
    {name:"Chicken Tika Boti", price:140},
    {name:"Mutton Polao", price:570},
    {name:"Beef Polao", price:110}
  ]
   let filteredDishes; 
  console.log(filteredDishes);
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
          <td><input onChange={(evt)=>{
            if (dish.ordered === false){
              dish.ordered = evt.target.checked
            }else if(dish.ordered === true){
              dish.ordered = false
            }
            dish.ordered= evt.target.checked
            filteredDishes = dishes.filter((dishf)=>{
              return dishf.ordered
            })
            console.log(filteredDishes);


          }}
          type="checkbox" className="checkbox"></input></td>
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
   
    <td><ul><li>150</li></ul></td>
    <td><ul><li>3</li></ul></td>
    <td><ul><li>450</li></ul></td>
    <td><ul><li>45</li></ul></td>
    <td><ul><li>415</li></ul></td>
  </tr>
  
  <tr><button onClick={()=>{
    let mapedDishes = filteredDishes.map((dishM)=>{
      console.log(dishM.name);
      return dishM.name
    })
    showName.current.innerHTML = mapedDishes.map((sdish)=>{return {sdish}.toString()})
    
    console.log(mapedDishes);
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