import './ToggleMenu.css'

function ToggleMenu ({icon, action}){

    return (
        <>
       <div className='toggleMenu'>

        <div className='item-icon'> <img src={icon} alt="" />  </div>
        <div className='item-text'> <span> {action} </span>   </div>

        </div>

        
        </>
    )

}



export default ToggleMenu;