// import { data } from "autoprefixer";
import React from "react";
import{Link} from "react-router-dom";


function Navbar(){
    return(
        <div className='p-5 bg-green-400 flex justify-between'>
           <h1 className='text-4xl uppercase font-semibold'>programer</h1>
           <nav className='flex gap-2 list-none' >
           <li className='px-5'><Link to="/">Home</Link></li>
           <li className='px-5'><Link to="/hero">Hero</Link></li>
           <li className='px-5'><Link to="/second">Second</Link></li>
           <li className='px-5'><Link to="/git">GitHub</Link></li>
           </nav>
        </div>
    )
}

export default Navbar;