import './NavItem.css'


function NavItem ({icon, action}){
    return (
        <>
        <div className='item-principal'>

        <div className='item-icon'> <img src={icon} alt="" />  </div>
        <div className='item-text'> <span> {action} </span>   </div>
        
        </div>




        </>
    )


}


export default NavItem;