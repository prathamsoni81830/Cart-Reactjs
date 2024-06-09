/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar"
import ProductCart from './Components/ProductCart'
import './App.css'

function App() {
  const [product, setProduct] = useState([
    {
      img : "./src/assets/phone-1.png",
      title: "Samsung Galaxy S8",
      price : 399.99,
      quantity : 1
    },
    {
      img : "./src/assets/phone-2.png",
      title : "Google Pixel",
      price : 499.99,
      quantity : 1
    },
    {
      img : "./src/assets/phone-3.png",
      title : "Xiaomi Redmi Note 2",
      price : 699.99,
      quantity : 1
    },
    {
      img : "./src/assets/phone-4.png",
      title : "Samsung Galaxy S7",
      price : 599.99,
      quantity : 1
    }
  ])
  const[total,setTotal]=useState(0)
  const[cartSum,setCartSum]=useState(0)
    
  function handleInc(index){
   let temp=[...product]
   temp[index].quantity+=1;
   setProduct(temp)
  }
  function handleDec(index){
   
    let temp=[...product]
    if(temp[index].quantity>1){
    temp[index].quantity-=1;
    setProduct(temp)
    }
    else{
      handleRemove(index)
    }
    
  }
  function handleRemove(index){
    let temp=[...product]
    temp.splice(index,1)
    setProduct(temp)
  }

  useEffect(()=>{
    let sum=0;
    let fakeSum=0;
    product.forEach((item,index)=>{
      sum+=Math.floor(item.quantity*item.price);
      setTotal(sum);
      fakeSum+=item.quantity;
      if(product.length>0)
      setCartSum(fakeSum);
    }
  )
  },[product])
   
  

  return (
    <>
     <Navbar cartSum={cartSum}/>
     {
        product.length ? <div> {
          product.map((item,index) =>{
            return <ProductCart img={item.img} title={item.title} price={item.price} quantity={item.quantity} index={index} handleRemove={handleRemove} handleInc={handleInc} handleDec={handleDec}/>
          })
         }
         <hr></hr>
         <br></br>
         <div className="total">
         <p>Total</p>
         <div className='price'>
         ${total}
         </div>
         </div>
         <button className='btn' onClick={()=>setProduct([])}>Clear Cart</button>
         </div> : <div className='last-para'>
          
          <h4>is currently empty</h4>
                  </div>
     }
    
    </>
  )
}

export default App
