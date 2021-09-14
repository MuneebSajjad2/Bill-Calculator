import "./App.css"
import React, { useEffect, useState, useRef } from 'react';
// import { Practice } from "./Practice/Practice"
// import Practice1 from "./Practice/Practice2"
function App() {
  let dishes = [
    {name:"Biryani", price:150},
    {name:"Qorma", price:250},
    {name:"Shawarma", price:120},
    {name:"Mutton White Karahi", price:1450},
    {name:"Pizza", price:1299},
    {name:"Seekh Kabab", price:130},
    {name:"Chicken Tika Boti", price:140},
    {name:"Mutton Polao", price:570},
    {name:"Beef Polao", price:110}
  ]
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
            dish.ordered = evt.target.checked
          }}
          type="checkbox" className="checkbox"></input></td>
        </tr>

    })
  }    
  <div className="tableSecondPortion">
  <tr>
    <td >Item</td>
    <td ref={showName} className="itemName, " colSpan="2" > </td>
  </tr>
  <tr>
    <td>Price</td>
    <td ref ={showPrice} className="itemPrice" colSpan="2"></td>
    </tr>
  <tr>
    <td>Qty</td>
    <td className="itemQTY " ref={showQty} colSpan="2"></td>
    </tr>
  <tr>
    <td>Total =</td>
    <td className="itemTotal" ref={showTotal} colSpan="2"></td>
    </tr>
  <tr>
    <td>Disc (10%) =</td>
    <td className="itemDisc" ref={discount} colSpan="2"></td>
    </tr>
  <tr>
    <td>Grand Total =</td>
    <td className="itemGrandTotal" ref={grandTotal} colSpan="2"></td>
    </tr>
  <tr><button onClick={()=>{
      dishes.forEach(dishItem => {
        if(dishItem.ordered){
          showName.current.innerText += dishItem.name;
          showPrice.current.innerText += parseInt(dishItem.price);
        }
        if(dishItem.quantity){
          showQty.current.innerText = dishItem.quantity;
        }
        if(dishItem.quantity && dishItem.ordered){
  
          showTotal.current.innerText =  showPrice.current.innerText * showQty.current.innerText;
        }
        else if (dishItem.ordered){
          showTotal.current.innerText =  showPrice.current.innerText
        }
        if(dishItem.ordered &&  showTotal.current.innerText > 800){
         
          discount.current.innerText = Math.round(showTotal.current.innerText * 0.010);
        }
        if(dishItem.ordered && showTotal.current.innerText > 800){
          grandTotal.current.innerText = (showPrice.current.innerText * showQty.current.innerText) - discount.current.innerText;
        }
      });
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