import './Navbar.css'
const Navbar = ({setCategory}) => {

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  }
  return (
    <div className='navbar'>
     
      <div className="nav-left">
        <h3 className='nav-logo'>Animals</h3>
      </div>
      <div className='nav-right'>
      <select name="animals" id="animals" className='nav-select' onChange={(e) => handleSelect(e)}>
               <option className='option' value="Select">Select</option>
               <option className='option' value="all">All</option>
               <option className='option' value="dog">Dogs</option>
               <option value="cat">Cats</option> 
                
                      
</select>
      </div>
      
      </div>
  )
}

export default Navbar;