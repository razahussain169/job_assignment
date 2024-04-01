import * as React from 'react';

import Button from '@mui/material/Button';

import { ShoppingBag } from '@mui/icons-material';
import logo from '../assets/360_F_241390620_hihddCG15N7I8HyPWUiv1eUH85D2SN9z.jpg'

interface HeaderProps{
open:boolean,
toggleDrawer: (newOpen: boolean) => void;
}

export const Header : React.FC<HeaderProps> = ({toggleDrawer}) => {
 




  return (
    <div className='flex justify-around items-center'>
      <img src={logo} className='w-32 h-auto' alt="" />
        <nav>
            <ul className='flex justify-center items-center gap-x-[3vw]' >
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
            </ul>
        </nav>
      <Button onClick={()=>toggleDrawer(true)} ><ShoppingBag></ShoppingBag></Button>
   
    </div>
  );
}