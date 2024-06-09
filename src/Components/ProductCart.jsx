import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProductCart({img,title,price,quantity,index,handleInc,handleDec,handleRemove}) {
  return (
    <div className='flex'>
    <div className="prod">
      <img width="80px" src={img}/>
      <div>
      <h2>{title}</h2>
      <p>${price}</p>
      <button className='rmv-btn' onClick={()=>handleRemove(index)}>remove</button>
      </div>
    </div>
      <div style={{marginRight:"500px"}}>
        <p onClick={()=>handleInc(index)}><KeyboardArrowUpIcon/></p>
        <p>{quantity}</p>
        <p onClick={()=>handleDec(index)}><KeyboardArrowDownIcon/></p>
      </div>
    </div>
  )
}

export default ProductCart
