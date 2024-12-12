import React from 'react';
import logo from '../logo.png'
import { Link, NavLink } from 'react-router-dom';
const MenuBar:React.FC<{buttonArr:any}> = ({buttonArr}) => {

    const buttonContent = buttonArr.map((bt:any)=>{
    return(  <NavLink key={bt.label}
        to={bt.path}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-white"
        }
      >
        {bt.label}
      </NavLink>
);
    })

return(
    <div className="flex justify-between items-center bg-blue-500 p-4">
        <div className='flex space-x-4'>
            <img src={logo} alt="logo" className="h-10 w-10"/>
            {buttonContent}
        </div>

        <button className='text-white'>LogIn</button>
    </div>
)
}

export default MenuBar;