import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar({cartSum}) {
  return (
    <>
    <div className="navbar">
      <p style={{borderRadius:"5px",outline:"none"}}>UseReducer</p>
      <div>
      < AddShoppingCartIcon/>{cartSum}
      </div>
    </div>
    <p className='bag' style={{fontSize:"40px",fontFamily:"sans-serif",}}>Your Bag</p>
    </>
  )
}

export default Navbar
